import Image from "next/image";
import Box from "@mui/material/Box";

export default function Overview() {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:items-start items-center mt-4">
      <Image
        src={require("../assets/side_pic.jpg")}
        width={600}
        height={300}
        alt="Profile Picture"
        className=""
      />
      <div className="ml-4 mt-2">
        <div className=" animate-pulse border-b-2 border-black-russian-200">
          <p className="text-4xl">Overview</p>
        </div>
        <p>
          I am a junior at the University of Delaware. <br />I am studying
          Computer Science. I am an aspiring software engineer.
        </p>
      </div>
    </div>
  );
}
