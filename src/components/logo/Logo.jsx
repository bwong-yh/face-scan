import Tilt from "react-parallax-tilt";
import brainLogo from "./brain.png";

const Logo = () => {
  return (
    <Tilt
      className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-[1px] border-black"
      style={{
        background:
          "linear-gradient(315deg, rgba(0, 159, 198, 1) 25%, rgba(78, 185, 131, 1) 75%)",
      }}
    >
      <div className="flex items-center justify-center">
        <div>
          <img className="block h-14 w-14" src={brainLogo} alt="brain logo" />
        </div>
      </div>
    </Tilt>
  );
};

export default Logo;
