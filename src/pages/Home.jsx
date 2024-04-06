import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

import HomeBackground from "../assets/images/sajek";

export const Home = () => {
  return (
    <div className="bg-[url('../assets/images/rectangle1.png')]">
        <img src={HomeBackground} alt="" />
        {/* NavBar conponent */}
        <Navbar />
        {/* hero component */}
        <Hero />
    </div>
  )
}
