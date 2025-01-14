import { useState } from "react";

const UploadImage = () => {
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
  };

  const uploadImage = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      //let imageURL;

      // if the user select an image AND the image type is one of that
      if (
        image &&
        (image.type === "image/jpg" ||
          image.type === "image/jpeg" ||
          image.type === "image/png")
      ) {
        const newImage = new FormData();

        newImage.append("file", image);
        newImage.append("cloud_name", "dh4adz0rr");
        newImage.append("upload_preset", "Bdelorean");

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dh4adz0rr/image/upload",
          {
            method: "POST",
            body: newImage,
          }
        );

        const imgData = await response.json();
        console.log(imgData);

        imageURL = imgData.url.toString();
        setPreviewImage(null);
        alert(imgData.url);
      } else {
        // Handle invalid image type error
        alert(
          "Error: Invalid image type. Only JPG, JPEG, and PNG are allowed."
        );
      }
    } catch (error) {
      alert(`Error uploading image: ${error.message}`);
      setIsLoading(false);
    }
  };

  return <div></div>;
};

export default UploadImage;
