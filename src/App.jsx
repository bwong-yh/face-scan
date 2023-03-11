import Logo from "./components/logo/Logo";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />

      <main className="mx-auto h-full w-10/12 max-w-screen-2xl">
        <Logo />
      </main>
    </div>
  );
}

export default App;
