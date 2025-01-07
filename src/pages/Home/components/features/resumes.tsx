import SingleResume from "./singleResume";
import SearchIcon from "../../../../assets/images/search.png"

const Resumes = () => {
  const colors:string[] = ['rgb(var(--color-lima-green))' , 'rgb(var(--color-golden-orange))' , 'rgb(var(--color-regent-gray))'];

  return (
    colors.length > 0 && 
      <div>
        {colors.map((color, index) => <SingleResume color={color} level={index} key={index} /> )}
        <span className="absolute bottom-5 right-5 z-[-1]">
          <img src={SearchIcon} alt="search" />
        </span>
      </div>
    || <></>
  )
}

export default Resumes