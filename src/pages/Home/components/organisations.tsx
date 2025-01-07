import { organisationsData } from "../../../data/organizations"

const Organisations = () => {
  return (
    <div className="container mx-auto px-4 mb-24">
      <p className="text-sm font-medium text-center mb-12">Trusted by the world leading organisations</p>
      <div className="relative">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
          {
            organisationsData.map((org, index) => 
              <div key={index} className='text-center'>
                <a href={org.link} className='inline-block px-5 py-3'>
                  <img src={org.logo} alt={org.title} title={org.title} className='max-h-10' />
                </a>
              </div>
            )
          }
        </div>
        <div className="absolute top-0 left-0 w-1/5 h-full bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/5 h-full bg-gradient-to-l from-white to-transparent"></div>
      </div>
    </div>
  )
}

export default Organisations