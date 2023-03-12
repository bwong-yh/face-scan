import ParticlesBg from "particles-bg";
import { Route, Routes } from "react-router-dom";
import Logo from "./components/logo/Logo";
import Nav from "./components/nav/Nav";
import Home from "./pages/Home";
import Signin from "./pages/Signin";

function App() {
  return (
    <>
      <ParticlesBg type="cobweb" color="#7F8487" bg={true} />

      <div className="App flex flex-col ">
        <Nav />

        <main className="mx-auto w-10/12 max-w-screen-2xl pb-3">
          <Logo />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
