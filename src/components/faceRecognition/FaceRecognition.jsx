import { useEffect, useState } from "react";

const FaceRecognition = ({ imageUrl, imageData }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    setImage(imageUrl);
  }, [imageUrl]);

  console.log(imageData);

  return (
    <div className="mt-10 flex justify-center">
      {imageUrl && <img src={image} alt="image" />}
    </div>
  );
};

export default FaceRecognition;
