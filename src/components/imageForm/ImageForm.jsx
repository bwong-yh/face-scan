const ImageForm = () => {
  return (
    <div className="mt-6 flex flex-col items-center justify-center">
      <p className="text-3xl">Face Scan will scan your face. Give it a try!</p>

      <div
        className="mt-3 flex w-full max-w-2xl p-6 drop-shadow-lg"
        style={{
          backgroundColor: "#343a40",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%239C92AC' fill-opacity='0.25' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <div className="flex h-8 w-full">
          <input className="w-4/5 p-3 opacity-80 outline-none" type="text" />
          <button className="flex-1 bg-cyan-800 text-white">Detect</button>
        </div>
      </div>
    </div>
  );
};

export default ImageForm;
