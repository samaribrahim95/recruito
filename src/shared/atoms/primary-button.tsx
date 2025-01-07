import StarIcon from "../icons/star-icon"

type Props = {
  text: string,
  action: () => void,
  hasIcon?: boolean
}

const PrimaryButton = (props: Props) => {
  return (
    <button onClick={props.action} className="relative text-sm text-white font-medium inline-flex items-center gap-2 bg-gradient-to-r from-java to-royal-blue rounded-30 px-7 py-2.5 capitalize after:content-[''] after:w-full after:h-full after:rounded-30 after:border after:border-white after:opacity-50 after:absolute after:top-0 after:left-0 shadow-xs shadow-java/20">
      {props.hasIcon && <StarIcon smallSize />}
      {props.text}
    </button>
  )
}

export default PrimaryButton