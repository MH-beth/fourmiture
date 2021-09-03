import React, { useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { storage } from "../firebase"
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const UploadImage = ({ setPicture, title }) => {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [statue, setStatue] = useState("");
  function CircularProgressWithLabel(props) {
    return (
      <Box position="relative" display="inline-flex">
        <CircularProgress variant="determinate" {...props} />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="caption"
            component="div"
            color="textSecondary"
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
    );
  }

  CircularProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired
  };

  const handleSubmit = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => setPicture(url));
      }
    );
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    } else {
      console.error("Picture is not set ! ");
    }
  };
  console.log(image);

  return (
    <div>
      <p>{title}</p>
      <input type="file" onChange={handleChange} />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          if (image !== null) {
            handleSubmit();
          } else {
            setStatue("Picture should Be set !");
          }
        }}
      >
        Definir comme Photo
      </Button>
      <div>
        <CircularProgressWithLabel value={progress} />
      </div>
      <p>{statue}</p>
    </div>
  );
};

export default UploadImage;
