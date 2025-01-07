type Props = {
  text: string,
  action: () => void,
  customClasses?: string
}

const SecondaryButton = (props: Props) => {
  return (
    <button className={`${props.customClasses ?? 'text-dark-gray font-bold'} text-sm px-7 py-2.5 border border-regent-gray/20 rounded-30 capitalize`}>
      {props.text}
    </button>
  )
}

export default SecondaryButton