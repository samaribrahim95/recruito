import GabrunBg from '../../../assets/images/gabrun-bg.png'
import { benefits } from '../../../data/benefits'
import SecondaryButton from '../../../shared/atoms/secondary-button'

const Benefits = () => {
  return (
    <div className="relative bg-dark-gray py-14 text-center overflow-hidden">
      <div className="container mx-auto px-4">
        <SecondaryButton customClasses='text-java font-medium' text='Benefits' action={() => null} />
        <h3 className='text-white text-2xl font-bold max-w-3xl mx-auto my-12'>Unlock the advantages of using Recruito AI for your hiring needs.</h3>
        <div className="relative bg-dark-gray grid grid-cols-1 md:grid-cols-3 gap-4 z-10">
          {
            benefits.map((benefit, index) => 
              <div className='bg-white/[0.04] border border-regent-gray/20 rounded-10 gap-3 p-6' key={index}>
                <div className="rounded-10 border border-regent-gray/20 w-16 h-16 flex items-center justify-center mx-auto mb-5">
                  <img src={benefit.icon} alt={benefit.title} />
                </div>
                <h4 className='text-white font-medium text-xl mb-3'>{benefit.title}</h4>
                <p className='text-regent-gray'>{benefit.description}</p>
              </div>
            )
          }
        </div>
      </div>
      <div className="absolute top-[5%] left-0 opacity-30 z-0"><img src={GabrunBg} alt="bg" /></div>
      <div className="absolute top-[5%] right-0 opacity-30 -scale-x-100 z-0"><img src={GabrunBg} alt="bg" /></div>
    </div>
  )
}

export default Benefits