import Image from "next/image";

function Nav() {
  return (
    <main className="mx-4 flex min-h-screen justify-end">
      <p className="mr-4">Hello</p>
      <p>Interests</p>
    </main>
  );
}

export default function Home() {
  return (
    <div>
      <Nav />;
    </div>
  );
}
