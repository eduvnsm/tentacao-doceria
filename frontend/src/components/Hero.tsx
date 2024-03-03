import hero from '../assets/images/hero.jpg'

const Hero = () => {
  return (
    <div className="bg-gradient-to-b min-h-[600px] from-red-500 ">
        <img src={hero} className="w-full max-h-[600px] object-cover" alt="" />
    </div>
  )
}

export default Hero;
