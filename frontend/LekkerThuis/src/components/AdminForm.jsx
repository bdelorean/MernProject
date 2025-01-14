import { useState } from "react";
import { useDishesContext } from "../hooks/useDishesContext";

const AdminForm = () => {
  // Declare state for title, description, price, and image-related fields.
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Use dispatch from the DishesContext to update global state when a new dish is created.
  const { dispatch } = useDishesContext();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
  };

  const uploadImage = async () => {
    setIsLoading(true);
    try {
      // Verify image file type before uploading.
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
        setIsLoading(false);
        return imgData.url.toString(); // Return the URL of the uploaded image.
      } else {
        throw new Error(
          "Invalid image type. Only JPG, JPEG, and PNG are allowed."
        );
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      setIsLoading(false);
      throw error; // Propagate the error to handleSubmit.
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Upload the image and get the image URL.
      const imageUrl = await uploadImage();

      // Create a new dish object to send to the server.
      const dish = { title, description, price, image: imageUrl };

      const response = await fetch("http://localhost:4000/api/menu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dish),
      });

      const json = await response.json();

      if (!response.ok) {
        throw new Error("Failed to add dish");
      }

      if (response.ok) {
        dispatch({ type: "CREATE_DISH", payload: json });
        setTitle("");
        setDescription("");
        setPrice("");
        setImage("");
        setPreviewImage(null);
      }
    } catch (error) {
      console.error("Error adding dish:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold mb-6 text-gray-700">Admin Form</h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Title input field */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter title"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Description input field */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter description"
            rows="3"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        {/* Price */}
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Enter price"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 appearance-none"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        {/* Image Upload */}
        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Photo
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Preview Image */}
        <div>
          {previewImage && (
            <img
              src={previewImage}
              alt="Uploaded preview"
              className="mt-4 w-full max-h-64 object-cover rounded-md"
            />
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-4"
        >
          {isLoading ? "Uploading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AdminForm;
