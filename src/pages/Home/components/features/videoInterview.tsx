import Person4 from '../../../../assets/images/person4.png'
import CircularProgressBarLarge from '../../../../shared/atoms/circleProgresLarge'

const VideoInterview = () => {
  return (
   <div className="relative">
      <div className='rounded-20 overflow-hidden md:w-10/12'>
        <img src={Person4} alt="person" className='max-h-80	w-full object-cover' />
      </div>
      <div className="md:absolute mt-4 md:mt-0 border border-regret-gray/20 rounded-10 right-0 top-1/2 md:-translate-y-1/2 bg-white shadow-lg shadow-medium-gray/20 p-5 text-center">
        <p className='font-medium text-sm'>Interviews Score</p>
        <div className='mx-auto inline-block mt-2'>
          <CircularProgressBarLarge percentage={55} />
        </div>
      </div>
   </div>
  )
}

export default VideoInterview