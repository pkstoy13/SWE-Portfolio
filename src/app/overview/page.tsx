import Image from "next/image";

export default function Overview() {
  return (
    <div className="flex justify-around">
      <Image
        src="/assets/placeholder.png"
        width={300}
        height={300}
        alt="placeholder"
      />
      <p>Hello I am Phil</p>
    </div>
  );
}
