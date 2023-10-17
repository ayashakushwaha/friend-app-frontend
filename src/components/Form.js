import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import "./Form.css";

const Form = () => {
  const [id, setId] = useState("");
  const [friendId, setFriendId] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Inside the handleSubmit function
    const formData = new FormData();
    formData.append("id", id);
    formData.append("friendId", friendId);
    formData.append("password", password);
    formData.append("photo", photo);

    axios.post("/submit", formData).then((response) => {
      console.log(response.data);
    });
    // Here, you can send the data to the backend API.
    window.location.href = "/thank-you";
  };

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      setPhoto(acceptedFiles[0]);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div className="form-container">
      {/* Apply the container class */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Friend's ID"
          value={friendId}
          onChange={(e) => setFriendId(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files[0])}
        />

        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {photo ? (
            <p>Selected File: {photo.name}</p>
          ) : (
            <p>Drag and drop a file here, or click to select a file</p>
          )}
        </div>

        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};

export default Form;
