import { tasks } from "../../../../data/tasks";

const Tasks = () => {
  return (
    <div className="border border-regent-gray/20 rounded-20 p-5 shadow-lg shadow-medium-gray/20">
      {
        tasks.map((task, index) => 
          <div key={index} className="flex items-center mb-3">
            <div className={`min-w-7 max-w-7 h-7 rounded-[8px] text-center leading-7 ${task.done ? 'bg-lima-green' : 'border border-regent-gray'}`}>
              {
                task.done && <span className="w-2 h-4 inline-block border-b-2 border-r-2 border-white rotate-45"></span>
              }
            </div>
            <div className="w-full border border-regent-gray/20 rounded-10 py-4 px-3 ms-4">
              <p className={`text-lg font-medium ${task.done ? 'text-regent-gray line-through' : 'text-dark-gray'}`}>{index+1} {task.text}</p>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Tasks;