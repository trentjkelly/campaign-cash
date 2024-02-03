import Image from "next/image";
import Organization from "./organization";
import Politician from "./politician";

export default function Home() {
    return (
        <main>
            <div className="flex flex-col h-screen font-sans font-bold text-white">
                <Politician></Politician>

                <Organization></Organization>
                <Organization></Organization>
                <Organization></Organization>
                <Organization></Organization>
                <Organization></Organization>
                <Organization></Organization>
            </div>
        </main>
    );
}