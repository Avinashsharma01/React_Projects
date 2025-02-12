/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useContext } from "react";
import MyContext from "../Context/MyContext";
import axios from "axios";

const AllImages = () => {
    const { AfterUpload, setAfterUpload } = useContext(MyContext);
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null); // For the popup
    const [imageID, setImageID] = useState();
    // console.log("AfterUpload", AfterUpload);
    console.log(selectedImage);
    console.log(imageID);
    useEffect(() => {
        // fetch("http://localhost:5000/list-images")
        fetch("https://fileupload-ylu9.onrender.com/list-images")
            .then((res) => res.json())
            .then((data) => {
                setImages(data.imageUrls);
                setAfterUpload(false);
            })
            .catch((err) => console.error("Error fetching images:", err));
    }, [AfterUpload]);

    const handleImageClick = (image) => {
        setSelectedImage(image); // Set the clicked image as the selected image
        setImageID(image.id);
    };

    const closePopup = () => {
        setSelectedImage(null); // Close the popup
    };

    // delete functionality
    useEffect(() => {
        if (imageID) {
            axios
                // .delete(`http://localhost:5000/delete-image/${imageID}`)
                .delete(`https://fileupload-ylu9.onrender.com/${imageID}`)
                .then((response) => {
                    console.log("Image deleted successfully:", response.data);
                    setImages(images.filter((img) => img.id !== imageID)); // Remove deleted image from the state
                })
                .catch((error) => {
                    console.error("Error deleting image:", error);
                });
        }
    }, [imageID]);

    // download functionality
    const handleDownload = (url) => {
        const link = document.createElement("a");
        link.href = url;
        link.download = url.split("/").pop(); // Extract file name from the URL
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="mt-10 w-[95vw] h-auto flex justify-center items-center flex-col">
            <hr className="w-full mb-5" />
            <h1 className="head bg-cyan-700 w-3/5 text-white px-5 py-2 text-center">
                All Images
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-5 border mt-10 w-full h-auto gap-5">
                {images &&
                    images.map((image, index) => (
                        <div
                            key={index}
                            className="border flex justify-center items-center"
                        >
                            <img
                                src={image.url}
                                alt=""
                                className="w-40 cursor-pointer"
                                onClick={() => handleImageClick(image)}
                            />
                        </div>
                    ))}
            </div>

            {/* Popup Image */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                    onClick={closePopup}
                >
                    <div
                        className="bg-white p-5 rounded shadow-lg flex flex-col items-center"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the popup
                    >
                        <img
                            src={selectedImage.url}
                            alt=""
                            className="max-w-full max-h-[90vh] w-auto h-auto"
                        />

                        <div className="btns flex gap-5">
                            <button
                                onClick={closePopup}
                                className="mt-5 bg-red-500 text-white px-4 py-2 rounded"
                            >
                                Close
                            </button>
                            <button
                                onClick={() => setImageID(selectedImage.id)}
                                className="mt-5 bg-red-700 text-white px-4 py-2 rounded"
                            >
                                Delete
                            </button>
                            <button
                                onClick={() =>
                                    handleDownload(selectedImage.url)
                                }
                                className="mt-5 bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllImages;
