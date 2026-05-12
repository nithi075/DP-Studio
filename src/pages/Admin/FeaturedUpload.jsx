import React, { useState } from "react";
import api from "../../services/api";

export default function FeaturedUpload() {
  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] =
    useState("");
  const [images, setImages] = useState(
    []
  );

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(
      e.target.files
    );

    setImages((prevImages) => {
      // Old + New images
      let updatedImages = [
        ...prevImages,
        ...selectedFiles
      ];

      // Keep only latest 8 images
      if (updatedImages.length > 8) {
        updatedImages =
          updatedImages.slice(
            updatedImages.length - 8
          );
      }

      return updatedImages;
    });
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) =>
      prevImages.filter(
        (_, i) => i !== index
      )
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", title);
    formData.append(
      "videoUrl",
      videoUrl
    );

    images.forEach((image) => {
      formData.append(
        "images",
        image
      );
    });

    try {
      const res = await api.post(
        "/featured/add",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data"
          }
        }
      );

      console.log(res.data);

      alert(
        "Featured uploaded successfully"
      );

      setTitle("");
      setVideoUrl("");
      setImages([]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f8f5ef"
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "10px",
          width: "400px"
        }}
      >
        <h2>Featured Upload</h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px"
          }}
        />

        <input
          type="text"
          placeholder="Video URL"
          value={videoUrl}
          onChange={(e) =>
            setVideoUrl(
              e.target.value
            )
          }
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px"
          }}
        />

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={
            handleImageChange
          }
          style={{
            marginBottom: "20px"
          }}
        />

        <p>
          Selected Images:
          {images.length}/8
        </p>

        {/* Image Preview */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "20px"
          }}
        >
          {images.map(
            (img, index) => (
              <div
                key={index}
                style={{
                  position:
                    "relative"
                }}
              >
                <img
                  src={URL.createObjectURL(
                    img
                  )}
                  alt=""
                  width="80"
                  height="80"
                  style={{
                    objectFit:
                      "cover",
                    borderRadius:
                      "5px"
                  }}
                />

                <button
                  type="button"
                  onClick={() =>
                    handleRemoveImage(
                      index
                    )
                  }
                  style={{
                    position:
                      "absolute",
                    top: "-5px",
                    right: "-5px",
                    background:
                      "red",
                    color: "white",
                    border:
                      "none",
                    borderRadius:
                      "50%",
                    width: "20px",
                    height: "20px",
                    cursor:
                      "pointer"
                  }}
                >
                  ×
                </button>
              </div>
            )
          )}
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "black",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          Upload Featured
        </button>
      </form>
    </div>
  );
}