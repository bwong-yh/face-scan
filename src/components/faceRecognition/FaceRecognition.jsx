import { useEffect, useState } from "react";
import calculateFaceLocation from "../../utils/calculateFaceLocation";

const FaceRecognition = ({ imageUrl, imageData }) => {
  const [image, setImage] = useState("");
  const [box, setBox] = useState({});

  useEffect(() => {
    setImage(imageUrl);

    if (imageData.length > 0) {
      setBox(calculateFaceLocation(imageData));
    }
  }, [imageUrl]);

  console.log(box);

  return (
    <div className="mx-auto mt-10 flex justify-center">
      <div className="relative w-fit">
        {imageUrl && (
          <>
            <img
              className="block h-auto w-[500px]"
              id="inputImage"
              src={image}
              alt="image"
            />
            <div
              className="absolute flex cursor-pointer flex-wrap justify-center"
              style={{
                boxShadow: "0 0 0 3px #149df2 inset",
                top: box.topRow,
                right: box.rightCol,
                bottom: box.bottomRow,
                left: box.leftCol,
              }}
            ></div>
          </>
        )}
      </div>
    </div>
  );
};

export default FaceRecognition;
