import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { removeTask, updateStatus } from '../../redux/feature/taskSlice';

const TaskCard = ({task}) => {



  const dispatch = useDispatch()

  let updateStatusText;
  if(task.status === "pending"){
    updateStatusText = "running"
  }else if(task.status ==="running"){
    updateStatusText = "done"
  }else if(task.status === "done"){
    updateStatusText = "archive"
  }

  return (
    <div className="bg-secondary/10 rounded-md p-5">
      <h1
        className={`text-lg font-semibold mb-3  ${
          task?.priority?.toLowerCase() === 'high' ? 'text-red-500' : ''
        } ${task?.priority?.toLowerCase() === 'medium' ? 'text-yellow-500' : ''} ${
          task?.priority?.toLowerCase() === 'low' ? 'text-green-500' : ''
        }`}
      >
        {task?.title}
      </h1>
      <p className="mb-3">{task?.description}</p>
      <p className="text-sm">Assigned to - {task?.assign}</p>
      <p className="text-sm">Date - {task?.deadline}</p>
      <div className="flex justify-between mt-3">
        <p>{task?.date}</p>
        <div className="flex gap-3">
          <button onClick={() => dispatch(removeTask(task?.id))} title="Delete">
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button
            onClick={() =>
              dispatch(updateStatus({id:task?.id , status:updateStatusText}))
            }
            title="In progress"
          >
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
