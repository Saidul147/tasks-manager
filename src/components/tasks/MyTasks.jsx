import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../redux/feature/userSlice';

const MyTasks = () => {
  const item = {
    id: 1,
    status: 'pending',
    title: 'Remove Button',
    description:
      'We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.',
    date: '2023-08-28',
    assignedTo: 'Mir Hussain',
    priority: 'high',
  };

  const user = useSelector((state) => state.userStore)

  const dispatch = useDispatch()

  return (
    <div>
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        <div
          key={item.id}
          className="bg-secondary/10 rounded-md p-3 flex justify-between"
        >
          <h1>{item.title}</h1>
          <div className="flex gap-3">
            <button className="grid place-content-center" title="Details">
              <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
            </button>
            <button onClick={()=> dispatch(add("karim"))}  className="grid place-content-center" title="Done">
              <CheckIcon className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTasks;
