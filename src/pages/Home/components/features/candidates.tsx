import { candinates } from "../../../../data/candinate"
import SingleCandinate from "./singleCandidate"

const Candidates = () => {
  return (
    <div className="sm:flex items-basline justify-center mt-10">
      {
        candinates.map((candinate, index) => <SingleCandinate candinateInfo={candinate} key={index} center={index == Math.floor(candinates.length / 2)} />)
      }
    </div>
  )
}

export default Candidates