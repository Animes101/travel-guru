import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

// import backgorund from '../assets/images/Rectangle 1.png'
// import logoNav from '../assets/images/logo.png'



export const Home = () => {
  return (
    <div  style={{backgroundImage: "url('../assets/images/Rectangle 1.png')"}} className="bg-[url('../assets/images/Rectangle 1.png')]">
        {/* NavBar conponent */}
        <Navbar />
        {/* hero component */}
        <Hero />
    </div>
  )
}
