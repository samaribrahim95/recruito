import Play from '../../assets/images/playicon.svg'

const PlayIcon = () => {
  return (
    <div className='rounded-full bg-medium-gray/50 backdrop-blur-sm w-16 h-16 leading-[64px] text-center after:content-[""] after:absolute after:-top-2 after:-left-2 after:w-20 after:h-20 after:bg-royal-blue/5 after:backdrop-blur-lg after:rounded-full after:z-[-1]'>
      <img src={Play} className='inline-block' alt='Play' title='Play'/>
    </div>
  )
}

export default PlayIcon;