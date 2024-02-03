export default function Politician() {
    return (
        <div className="relative bg-gray-400 h-64 my-10 mx-20 flex flex-row rounded-xl">
            <div className="flex basis-1/3 relative">
                <img src="/Joe_Biden_presidential_portrait.jpg" alt="Joe Biden" style={{ width: "100%", height: "auto" }} />
            </div>
            <div className="basis-2/3 h-full text-center"><p>Joe Biden</p></div>
        </div>)
}