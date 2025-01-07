import Dashboard from '../../../assets/images/dashboard.png'
import Customers from '../../../assets/images/customers.png'
import Product from '../../../assets/images/product.png'
import PlayIcon from '../../../shared/atoms/play-icon'

const PreviewVideo = () => {
  return (
    <div className="mt-[-10vh] mb-24 overflow-hidden">
      <div className="container mx-auto bg-white relative rounded-30">
        <div className="relative bg-light-gray/30 rounded-30 pt-5 px-6">
          <p className="text-sm text-center font-medium mb-5">See how we create an autonomous <a href="/" className="underline">ai agent</a> </p>
          <div className="relative">
            <img src={Dashboard} className="grayscale w-full h-[70vh] max-h-[650px] object-cover object-top" alt='dashboard' title='dashboard' />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <PlayIcon />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 bg-gradient-to-b from-transparent to-white w-full h-1/2"></div>
        </div>
        <span className='absolute md:block hidden w-56 rounded-20 shadow-lg -right-28 bottom-1/2 shadow-medium-gray/30 '><img src={Customers} alt="Customers" /></span>
        <span className='absolute md:block hidden w-56 rounded-20 shadow-lg -left-28 top-1/2 shadow-medium-gray/30 '><img src={Product} alt="Product" /></span>
      </div>
    </div>
  )
}

export default PreviewVideo