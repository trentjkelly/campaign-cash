import Image from "next/image";
import Company from "./company"

export default function Home() {
  return (
    <main>
      <div className="h-screen flex flex-col">
        <div className="h-72 m-5 flex items-center justify-center bg-red-400 rounded-xl">
          <Image
            src="/Joe_Biden_presidential_portrait.jpg" // Replace with your image path
            width={300} // Replace with your desired width
            height={450} // Replace with your desired height
            alt="Joe Biden"
          />
        </div>
        </div>
        <Company></Company>
        <Company></Company>
        <Company></Company>
        <Company></Company>
        <Company></Company>
        <Company></Company>


      </div>
    </main>
  );
}
