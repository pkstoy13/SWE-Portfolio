import Image from "next/image";
import { ButtonAppBar } from "./nav/page";
import { LinearColor } from "./loading/page";
import { Overview } from "./overview/page";

export default function Home() {
  return (
    <div>
      <ButtonAppBar />
      <LinearColor />
      <Overview />
    </div>
  );
}
