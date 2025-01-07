import PrimaryButton from "../../../shared/atoms/primary-button"
import SecondaryButton from "../../../shared/atoms/secondary-button"
import StarIcon from "../../../shared/icons/star-icon"

const Header = () => {
  return (
    <header className="relative bg-[url('/src/assets/images/header-bg.png')] bg-cover h-[95vh] after:content-[''] after:absolute after:w-1/2 after:h-1/2 after:top-0 after:right-0 after:bg-[url('/src/assets/images/pattern.png')] after:bg-cover after:opacity-50 after:mix-blend-luminosity  before:content-[''] before:absolute before:w-1/2 before:h-1/2 before:bottom-0 before:left-0 before:bg-[url('/src/assets/images/pattern.png')] before:bg-cover before:opacity-50 before:mix-blend-luminosity before:-scale-x-100">
      <div className="relative w-full h-full">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center max-w-2xl">
            <h1 className='text-3xl font-bold mb-7'> 
              <span>Revolutionize Your Hiring Process with </span>
              <span className="inline-flex items-star">
                <span className="gradient-text">Recruito AI</span>
                <span className="m-3"><StarIcon gradientColor /></span>
              </span>
            </h1>
            <p className="md:mx-20 mx-10 mb-7">Your fully automated hiring assistant that sources, screens, and interviews candidates effortlessly</p>
            <div className="flex items-center justify-center gap-4">
              <SecondaryButton text="Start Your Free Trial" action={() => null}/>
              <PrimaryButton text="request a demo" hasIcon action={() => null}/>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-1/4 bg-gradient-to-b from-transparent to-white"></div>
      </div>
    </header>
  )
}

export default Header
