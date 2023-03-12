import ParticlesBg from "particles-bg";
import { useState } from "react";
import FaceRecognition from "./components/faceRecognition/FaceRecognition";
import ImageForm from "./components/imageForm/ImageForm";
import Logo from "./components/logo/Logo";
import Nav from "./components/nav/Nav";

function App() {
  const [imageUrl, setImageUrl] = useState("");
  const [imageData, setImageData] = useState([]);

  const changeImage = (imageUrl, imageData) => {
    setImageUrl(imageUrl);
    setImageData(imageData);
  };

  return (
    <>
      <ParticlesBg type="cobweb" color="#7F8487" bg={true} />

      <div className="App flex flex-col ">
        <Nav />

        <main className="mx-auto w-10/12 max-w-screen-2xl pb-3">
          <Logo />
          <ImageForm imageUrl={imageUrl} changeImage={changeImage} />
          <FaceRecognition imageUrl={imageUrl} imageData={imageData} />
        </main>
      </div>
    </>
  );
}

export default App;
