import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className=" h-screen flex flex-row items-center">
        <div className="basis-1/4 ml-32 ">
          <Image
            src="/Joe_Biden_presidential_portrait.jpg" // Replace with your image path
            width={300} // Replace with your desired width
            height={450} // Replace with your desired height
            alt="Joe Biden"
          />
        </div>
        <div className="basis-3/4 text-9xl ml-40">
            <h2>Joe Biden</h2>
        </div>
      </div>
    </main>
  );
}
