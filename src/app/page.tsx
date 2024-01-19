import Image from "next/image";
import ButtonAppBar from "./nav/page";
//import LinearColor from "./loading/page";
import Overview from "./overview/page";

export default function Home() {
  return (
    <div className="bg-black-russian-800 h-screen text-black-russian-100">
      <ButtonAppBar />
      {/*<LinearColor />*/}
      <Overview />
    </div>
  );
}
