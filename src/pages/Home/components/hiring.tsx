import SearchPeopleIcon from '../../../assets/images/searchPeople.svg'
import PrimaryButton from '../../../shared/atoms/primary-button'

const Hiring = () => {
  return (
    <div className="relative after:content-[''] md:after:block after:hidden after:absolute after:w-1/2 after:max-w-96 after:h-full after:top-0 after:right-0 after:bg-[url('/src/assets/images/smallpattern.png')] after:bg-cover before:content-[''] md:before:block before:hidden before:absolute before:w-1/2 before:max-w-96 before:h-full before:bottom-0 before:left-0 before:bg-[url('/src/assets/images/smallpattern.png')] before:bg-cover before:-scale-x-100">
      <div className='container mx-auto px-4 mb-32 mt-8 text-center'>
        <div className="w-[72px] h-[72px] leading-[72px] text-center rounded-full bg-gradient-to-br from-royal-blue to-java mx-auto shadow-[1px_2px_9px_0] shadow-black/30">
          <img src={SearchPeopleIcon} className='inline-block' alt="search people" />
        
        </div>
        <h2 className="text-2xl font-bold max-w-3xl my-12 mx-auto">Ready to enhance your hiring process ?</h2>
        <PrimaryButton text='request a demo' hasIcon action={() => null} />
      </div>
    </div>
  )
}

export default Hiring