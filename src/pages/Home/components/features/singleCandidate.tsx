import { Candinate } from "../../../../data/types"
import VerifiedIcon from '../../../../assets/images/verified-check.svg'

type Props = {
  candinateInfo : Candinate,
  center?: boolean
}

const SingleCandinate = (props: Props) => {
  return (
    <div className={`relative w-72 bg-white rounded-20 px-4 py-5 text-center border border-regent-gray/20 shadow-lg shadow-medium-gray/20 mb-10 mx-auto sm:mb-0 sm:ml-4 sm:-mr-36 sm:last:mr-0 ${props.center ? 'sm:z-10 sm:-top-12' : ''}`}>
      {props.candinateInfo.verified && <span className="absolute top-3 left-3"><img src={VerifiedIcon} /></span>}
      <img src={props.candinateInfo.photo} className="w-20 h-20 rounded-full object-cover mx-auto mb-3" />
      <p className="font-medium mb-3">{props.candinateInfo.name}</p>
      <p className="text-sm mb-3">{props.candinateInfo.position}</p>
      <div className="border-t pt-3 flex flex-wrap items-center justify-center gap-2">
        {
          props.candinateInfo.skills.map((skill, index) => <p className="text-center text-sm rounded-30 bg-medium-gray/5 py-1.5 px-3" key={index}>{skill}</p>)
        }
      </div>
    </div>
  )
}

export default SingleCandinate