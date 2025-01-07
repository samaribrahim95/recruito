import Person1 from '../../../../assets/images/person1.png'
import Person2 from '../../../../assets/images/person2.png'
import Person3 from '../../../../assets/images/person3.png'
import CircularProgressBar from '../../../../shared/atoms/circleProgress'

type List = {
  name: string,
  photo: string,
  rank: number
}

const ShortList = () => {
  const rotates: number[] = [1.43, -0.61, -1.65];
  const list: List[] = [
    {
      name: 'Alex Martin',
      photo: Person1,
      rank: 88
    },
    {
      name: 'Emma Rivera',
      photo: Person2,
      rank: 88
    },
    {
      name: 'Ryan Lee',
      photo: Person3,
      rank: 75
    }
  ]
  return (
    <div>
      {
        list.map((item, index) => 
          <div className='bg-white flex items-center gap-3 mb-10' style={{transform: `rotate(${rotates[index]}deg)`}} key={index}>
            <span>
              <img src={item.photo} alt={item.name} className='w-11 h-11 object-cover rounded-full' />
            </span>
            <div className='p-4 w-full flex justify-between border bordre-regent-gray/20 rounded-10 shadow-lg shadow-regent-gray/30'>
              <p className='text-lg font-medium text-regent-gray'>{item.name}</p>
              <div className='flex gap-3 items-center'>
                <span className='text-lg font-medium text-regent-gray line-through'>#{index+1}</span>
                <CircularProgressBar percentage={item.rank} />
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default ShortList