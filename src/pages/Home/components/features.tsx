import SecondaryButton from "../../../shared/atoms/secondary-button"
import { features } from "../../../data/features"
import Squares from '../../../assets/images/squares.png'

const Features = () => {
  return (
    <div className="mb-24">
      <div className="container mx-auto px-4 text-center">
        <SecondaryButton text="Features" customClasses="text-science-blue font-medium" action={() => null} />
        <h2 className="text-2xl font-bold max-w-3xl my-12 mx-auto">Streamline your recruitment with our advanced features</h2>
      </div>
      {
        features.map((feature, index) => 
          <div className="relative">
            <div className="container mx-auto px-4">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-3 justify-between after:content-[''] after:absolute after:top-1/4 after:w-1/3 lg:after:w-1/4 after:h-80 after:bg-[url('/src/assets/images/pattern.png')] after:bg-cover after:opacity-50 after:mix-blend-luminosity after:z-[-1] ${index % 2 == 0 ? 'after:right-0': 'after:left-0 after:-scale-x-100'}`}key={index}>
                <div className={`flex items-center py-10 ${index % 2 == 0 ? 'lg:order-0 mr-10 md:mr-24': 'lg:order-1 ml-10 md:ml-24'}`}>
                  <div>
                    <h3 className="text-2xl font-bold mb-7">{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
                <div className="relative bg-white p-12 overflow-hidden border border-regent-gray/20 rounded-20 py-10 min-h-[424px] flex items-center justify-center">
                  <div className={`absolute max-w-60 -top-20 ${index % 2 == 0 ? '-right-6': '-left-6'} z-[-1]`}> 
                    <img src={Squares} alt="Squares" />
                  </div>
                  <div className="w-full">
                    <feature.child />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Features