import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import swal from "sweetalert";
import firebase from "firebase";
import BeatLoader from "react-spinners/BeatLoader";

const ShopDetails = () => {
  const [formDetails, setFormDetails] = useState({
    storeName: "",
    tagLine: "",
    mobileNumber: "",
    whatsappNumber: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  const ref = firebase.firestore().collection("storeDetails").doc("id");

  useEffect(() => {
    ref
      .get()
      .then((doc) => {
        setFormDetails({ ...doc.data() });
      })
      .then(() => setIsLoading(false));
  }, [ref]);

  const handleFormChange = (e) => {
    formDetails[e.target.name] = e.target.value;
    setFormDetails(formDetails);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { storeName, tagLine, mobileNumber, whatsappNumber } = formDetails;
    if (!storeName || !tagLine || !mobileNumber || !whatsappNumber) {
      swal("Error", "Enter all details!", "error");
      return;
    }
    setIsLoading(true);
    try {
      await ref.set({
        ...formDetails,
        createdAt: Date.now(),
      });
      setIsLoading(false);
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container py-3">
      {isLoading && (
        <div className="fixedCenter">
          <BeatLoader color={"#1ad1e0"} size={20} margin={10} />
        </div>
      )}
      <div className="jumbotron text-center display-4">Edit Store Details</div>
      <div className="mx-auto" style={{ maxWidth: 500 }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group my-5">
            <TextField
              required
              className="form-control"
              label="Enter Store Name"
              name="storeName"
              value={formDetails.storeName}
              onChange={handleFormChange}
            />
          </div>
          <div className="form-group my-5">
            <TextField
              required
              className="form-control"
              label="Enter Tag Line"
              name="tagLine"
              value={formDetails.tagLine}
              onChange={handleFormChange}
            />
          </div>
          <div className="form-group my-5">
            <TextField
              required
              className="form-control"
              label="Enter Mobile Number"
              name="mobileNumber"
              value={formDetails.mobileNumber}
              onChange={handleFormChange}
              type="number"
            />
          </div>
          <div className="form-group my-5">
            <TextField
              required
              className="form-control"
              label="Enter WhatsApp Number"
              name="whatsappNumber"
              value={formDetails.whatsappNumber}
              onChange={handleFormChange}
              type="number"
            />
          </div>
          <div className="text-right">
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShopDetails;
