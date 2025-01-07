import FileIcon from "../../../../shared/icons/file"

type Props = {
  color: string,
  level: number
}

const SingleResume = (props: Props) => {
  return (
    <div className="flex gap-4 rounded-10 bg-white border border-regent-gray/20 shadow-lg shadow-medium-gray/20 mb-5 last:mb-0 p-2.5 mx-auto" style={{ width: `calc(100% - (${props.level} * 10%))` }}>
      <div className="rounded-10 border border-regent-gray/20 w-16 h-16 flex items-center justify-center">
        <FileIcon color={props.color} />
      </div>
      <div>
        <span className="block w-64 h-5 rounded-20 bg-light-gray/30 mb-2"></span>
        <span className="block w-28 h-3 rounded-20 bg-light-gray/30 mb-2"></span>
        <span className="block w-28 h-3 rounded-20 bg-light-gray/30"></span>
      </div>
    </div>
  )
}

export default SingleResume 