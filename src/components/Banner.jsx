import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

const Banner = ({ isOpen, isGuideOpen, setIsOpen, setIsGuideOpen }) => {
  const navigate = useNavigate();
  
  const handleDiscordClick = () => {
    // window.open("https://discord.gg/eHtPDz7JJA")
    window.open("https://discord.gg/fdpRa8nj32")
  };

  const navIntoDetail = () => {
    console.log('navigating.. to main page')
    setIsOpen(false);
    setIsGuideOpen(false);
    navigate('/main')
  };

  return (
    // <p> Hello i'm banner and i'm going to be a video! </p>
    <div className="w-full flex h-3/5 relative">
      <video className="w-full h-full opacity-90 object-cover object-center z-5" loop muted autoPlay alt="banner_vid">
        <source src="/videos/HELLDIVERS2_battle_sample_banner.mp4" type="video/mp4"/>
      </video>
      <div className="flex absolute bottom-0 left-1/2 z-10 transform -translate-x-1/2 space-x-10 bg-black">
        <button className="w-40 h-12 bg-violet-500 border-solid border-2 md:opacity-60 md:hover:opacity-100 text-white rounded font-jersey text-4xl" onClick={handleDiscordClick}>
          <FontAwesomeIcon icon={faDiscord} className="mr-3 w-8 h-8" />
          Dive in
        </button>
        <button className="w-40 h-12 bg-amber-300 border-solid border-2 md:opacity-60 md:hover:opacity-100 rounded font-jersey text-4xl" onClick={navIntoDetail}>
          To Main
        </button>
      </div>
    </div>

  )
}
export default Banner