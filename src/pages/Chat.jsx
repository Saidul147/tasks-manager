import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask } from "../redux/feature/taskSlice";
import { useState } from "react";
import Modal from "../ui/Modal";

const Chat = () => {

  const {task} = useSelector((state) => state.taskStore)  
  // here i will call state.store a jei name a taskSlicer k store korchi, and .initialState er moddhe jei name a value dechi.

  const dispatch = useDispatch()

  let [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      {/* <h1 onClick={() => dispatch(addTask(5))}>push</h1>
      <h1 onClick={() => dispatch(removeTask(5))}>pop</h1> */}
      
      <h2>chat</h2>
      <button onClick={() => setIsOpen(!isOpen)}>modal</button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Chat;
