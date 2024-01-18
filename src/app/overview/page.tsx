import Image from "next/image";

export default function Overview() {
  return (
    <div>
      <div className="flex justify-center mx-auto mt-4">
        <Image
          src={require("../assets/side_pic.jpg")}
          width={400}
          height={300}
          alt="Profile Picture"
          className="border-8 border-double border-gray-700 rounded-3xl"
        />
        <div className="ml-4 mt-2">
          <div className="  border-b-2 border-black">
            <p>Overview</p>
          </div>
          <p>
            I am a junior at the University of Delaware. <br />I am studying
            Computer Science. I am an aspiring software engineer.
          </p>
        </div>
      </div>
    </div>
  );
}
