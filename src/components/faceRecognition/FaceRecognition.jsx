import { useEffect, useState } from "react";
import calculateFaceLocation from "../../utils/calculateFaceLocation";

const FaceRecognition = ({ imageUrl, imageData }) => {
  const [image, setImage] = useState("");
  const [faceBoxes, setFaceBoxes] = useState([]);

  useEffect(() => {
    if (imageUrl) {
      setImage(imageUrl);
    }
  }, [imageUrl]);

  const handleLoadedImage = () => {
    setFaceBoxes(calculateFaceLocation(imageData));
  };

  return (
    <div className="relative mx-auto mt-10 min-h-fit w-[500px]">
      {imageUrl && (
        <>
          <img
            id="inputImage"
            className="h-full w-full"
            src={image}
            alt="image"
            onLoad={handleLoadedImage}
          />
          {faceBoxes.length > 0 &&
            faceBoxes.map((box, index) => {
              return (
                <div
                  key={index}
                  className="absolute flex cursor-pointer justify-center"
                  style={{
                    boxShadow: "0 0 0 3px #149df2 inset",
                    top: box.topRow,
                    bottom: box.bottomRow,
                    left: box.leftCol,
                    right: box.rightCol,
                  }}
                ></div>
              );
            })}
        </>
      )}
    </div>
  );
};

export default FaceRecognition;
