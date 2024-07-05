import Banner from "../components/Banner"
import Description from "../components/Description"
import Clips from "../components/Clips"
import Gameprevs from "../components/Gameprevs"
import Partners from "../components/Partners"
import Partners2 from "../components/Partners2"

const Titlepage = ({ isOpen, isGuideOpen, setIsOpen, setIsGuideOpen }) => {
  return (
    <div className ="w-screen h-screen overflow-y-scroll no-scrollbar bg-black">
      <Banner isOpen={isOpen} isGuideOpen={isGuideOpen} setIsOpen={setIsOpen} setIsGuideOpen={setIsGuideOpen}></Banner>
      <Description></Description>
      <Gameprevs></Gameprevs>
      <Clips></Clips>
      <div className="block md:hidden">
        <Partners />
      </div>
      <div className="hidden md:block">
        <Partners2 />
      </div>
      <div className="md:hidden flex mt-20 flex-col items-center text-white font-jersey">
        <p className="text-3xl"> FAQ </p>
        <div className="flex flex-col mt-5">
          <ul className="space-y-2">
            <li>
              <p className="text-2xl w-full border-2 border-cyan-300 p-2"> How can i get my server?  </p>
            </li>
            <li>
              <p className="text-2xl w-full border-2 border-cyan-300 p-2"> How to manage my server? </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Titlepage