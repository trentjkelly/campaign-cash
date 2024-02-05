export default function Politician() {
    return (
        <div className="relative bg-gray-400 h-64 my-10 mx-20 flex flex-row rounded-xl">
            <div className="flex flex-row basis-1/3 relative content-center justify-center">
                <img src="/Joe_Biden_presidential_portrait.jpg" alt="Joe Biden" style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "100%" }} className="rounded-xl" />
            </div>
            <div className="flex flex-col basis-2/3 h-full text-center items-center justify-center">
                <h1 className="text-7xl">Joe Biden</h1>
                <p>Running for: U.S. President</p>
            </div>
        </div>)
}