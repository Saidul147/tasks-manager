import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../redux/feature/userSlice';
import { setFilteredUser, updateStatus } from '../../redux/feature/taskSlice';
import { useEffect } from 'react';

const MyTasks = () => {
 

  const user = useSelector((state) => state.userStore)
  const {task,filteredUser} = useSelector((state) => state.taskStore)

console.log(filteredUser)
console.log(task)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setFilteredUser(user?.name))
  },[user,task])

  return (
    <div>
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {filteredUser?.map((items) => (
        <div
          key={items.id}
          className="bg-secondary/10 rounded-md p-3 flex justify-between"
        >
          <h1>{items.title}</h1>
          <div className="flex gap-3">
            <button className="grid place-content-center" title="Details">
              <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
            </button>
            <button onClick={()=> dispatch(updateStatus({id:items?.id,status:"done"}))}  className="grid place-content-center" title="Done">
              <CheckIcon className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
