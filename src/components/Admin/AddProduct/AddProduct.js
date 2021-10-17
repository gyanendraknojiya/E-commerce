import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Resizer from "react-image-file-resizer";
import firebase from "firebase";
import BeatLoader from "react-spinners/BeatLoader";
import swal from "sweetalert";

const AddProduct = () => {
  const [imagePerview, setImagePerview] = useState(null);
  const [newProduct, setNewProduct] = useState({});
  const [isLoading, setIsloading] = useState(false);

  const { collection } = useParams();
  console.log(collection);

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        400,
        400,
        "JPEG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "blob"
      );
    });

  function blobToFile(theBlob, fileName) {
    theBlob.lastModifiedDate = new Date();
    theBlob.name = fileName;
    return theBlob;
  }

  const onChangeResize = async (event) => {
    console.log("called");
    try {
      const file = event.target.files[0];
      console.log(file);
      const image = await resizeFile(file);
      const newFile = blobToFile(image, file.name);
      setImagePerview(newFile);
      console.log(newFile);
    } catch (err) {
      console.log(err);
    }
  };

  const HandleFormChanges = (e) => {
    newProduct[e.target.name] = e.target.value;
    setNewProduct(newProduct);
  };

  const HandleFormSubmit = (e) => {
    e.preventDefault();
    console.log(newProduct);
    if (
      !newProduct.title ||
      !newProduct.details ||
      !newProduct.MRP ||
      !newProduct.price ||
      !newProduct.type
    ) {
      swal("Error", "Please Enter all product details!", "error");
      return;
    }
    if (collection) {
      newProduct["collection"] = collection;
      setNewProduct(newProduct);
    }
    if (parseInt(newProduct.price) > parseInt(newProduct.MRP)) {
      swal("Error", "Selling price should be less than MRP!", "error");
      return;
    }

    if (!imagePerview) {
      swal("Error", "Please upload product image!", "error");
      return;
    }
    setIsloading(true);
    var storageRef = firebase
      .storage()
      .ref()
      .child("Products/" + imagePerview.name);
    var uploadTask = storageRef.put(imagePerview);

    uploadTask.on(
      "state_changed",
      function (snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      function (error) {
        console.log(error);
        setIsloading(false);
        swal("Error", "Unable to upload file!", "error");
        return;
      },
      function () {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          console.log("File available at", downloadURL);
          firebase
            .firestore()
            .collection("Products")
            .add({
              ...newProduct,
              image: downloadURL,
              created_at: new Date(),
            })
            .then((doc) => {
              setIsloading(false);
              swal("Success", "Product added successfully!", "success");
              window.location.reload()
            })
            .catch((err) => {
              console.log(err);
              setIsloading(false);
              swal("Error", "Something went wrong...!", "error");
            });
        });
      }
    );
  };

  return (
    <div className="text-white" style={{ backgroundColor: "#082032" }}>
      <div className="container p-4">
        {isLoading && (
          <div className="fixedCenter">
            <BeatLoader color={"#1ad1e0"} size={20} margin={10} />
          </div>
        )}
        <div
          className="jumbotron text-center"
          style={{ backgroundColor: "#1C0C5B" }}
        >
          <span className="display-4">Add New Product</span>
        </div>
        <form onSubmit={HandleFormSubmit}>
          <div className="form-group">
            <label>Product Name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter product name..."
              name="title"
              onChange={HandleFormChanges}
            ></input>
          </div>
          <div className="form-group">
            <label>Product Image:</label>
            <input
              type="file"
              className="form-control-file"
              onChange={onChangeResize}
            ></input>
          </div>
          {imagePerview && (
            <div className="text-center ">
              <img
                src={URL.createObjectURL(imagePerview)}
                alt="imagePerview"
                height="300px"
                width="300px"
                className="border m-2"
                style={{ objectFit: "contain" }}
              />
            </div>
          )}
          <div className="form-group">
            <label>Product Details:</label>
            <textarea
              className="form-control"
              placeholder="Enter product details..."
              rows="3"
              name="details"
              onChange={HandleFormChanges}
            ></textarea>
          </div>
          <div className="form-group">
            <label>Product MRP:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter product MRP..."
              name="MRP"
              onChange={HandleFormChanges}
            ></input>
          </div>
          <div className="form-group">
            <label>Product Selling Price:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter product selling price..."
              name="price"
              onChange={HandleFormChanges}
            ></input>
          </div>
          <div className="form-group">
            <label>Product type:</label>
            <select
              className="form-control"
              name="type"
              onChange={HandleFormChanges}
            >
              <option>Select</option>
              <option value="Gift">Gift</option>
              <option value="Cosmetic">Cosmetic</option>
              <option value="Garment">Garment</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="my-3 text-center">
            <button
              type="submit"
              className="btn btn-primary px-2 font-weight-bold m-2"
            >
              Add
            </button>
            <Link to="/admin">
              <button className="btn btn-danger px-2 font-weight-bold m-2">
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
