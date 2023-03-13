import { useState } from "react";
import FaceRecognition from "../components/faceRecognition/FaceRecognition";
import ImageForm from "../components/imageForm/ImageForm";

const Home = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [imageData, setImageData] = useState([]);

  const changeImage = (imageUrl, imageData) => {
    setImageUrl(imageUrl);
    setImageData(imageData);
  };

  return (
    <>
      <ImageForm imageUrl={imageUrl} changeImage={changeImage} />
      <FaceRecognition imageUrl={imageUrl} imageData={imageData} />
    </>
  );
};

export default Home;
