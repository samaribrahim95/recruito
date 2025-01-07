import { useState } from "react"
import ArrowIcon from "../../assets/images/arrow.svg"
import { Tab } from "../../data/types"

type Props = {
  tabs: Tab[]
}

const CollpaseTabs = (props:Props) => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="bg-white rounded-10 border border-regent-gray/20">
      {
        props.tabs.map((tab, index) => 
          <div className='border-b last:border-b-0 border-regent-gray/20 px-6 pt-6' key={index}>
            <button 
              className="text-lg font-bold text-dark-gray w-full flex items-center justify-between pb-6"
              onClick={() => setOpenIndex(index == openIndex ? -1 : index)}>
                <span>{tab.title}</span>
                <span><img src={ArrowIcon} alt="Arrow" /></span>
            </button>
            <div className={`overflow-hidden transition-all ease-out ${index == openIndex? 'max-h-[9999px] mb-6' : 'max-h-0'} `}>
              {tab.child}
            </div>
          </div>
        )
      }
    </div>
  )
}

export default CollpaseTabs