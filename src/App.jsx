import ParticlesBg from "particles-bg";
import ImageForm from "./components/imageForm/ImageForm";
import Logo from "./components/logo/Logo";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <>
      <ParticlesBg type="cobweb" bg={true} />
      <div className="App">
        <Nav />

        <main className="mx-auto h-full w-10/12 max-w-screen-2xl">
          <Logo />
          <ImageForm />
        </main>
      </div>
      )
    </>
  );
}

export default App;
