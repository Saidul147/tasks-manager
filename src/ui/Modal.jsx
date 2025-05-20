import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../redux/feature/taskSlice'

export default function Modal({ isOpen, setIsOpen }) {
  //   let [isOpen, setIsOpen] = useState(false)

  const { register, reset, handleSubmit } = useForm()

  const dispatch = useDispatch()
  

  const onSubmitForm = (data) => {
    dispatch(addTask(data))
    setIsOpen(false)
    handleCancel()
  }
  const handleCancel = () => {
    reset()
  }

  return (
    <>
      {/* <button onClick={() => setIsOpen(true)}>Open dialog</button> */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="md:w-[40vw] h-[90vh]  rounded-lg shadow-md space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold">Fill up the Info</DialogTitle>
            {/* <Description>This will permanently deactivate your account</Description> */}
            <form onSubmit={handleSubmit(onSubmitForm)} className='flex flex-col min-h-0 h-full justify-between'>
              <div className='space-y-4 flex-1 overflow-y-auto min-h-0'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="title">Title</label>
                  <input type="text" id="title" {...register("title")} className='rounded-md' />
                </div>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="description">Description</label>
                  <input type="text" id="description" {...register("description")} className='rounded-md' />
                </div>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="deadline">Deadline</label>
                  <input type="date" id="deadline" {...register("deadline")} className='rounded-md' />
                </div>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="assign">Assign To</label>
                  <select id="assign" {...register("assign")} defaultValue="select" className='rounded-md'>
                    {/* <option value="" disabled defaultValue="Select">Selct</option> */}
                    <option  value="Mir Hussain">Mir Hussain</option>
                    <option value="Rahim">Rahim</option>
                    <option value="Karim">Karim</option>
                    <option value="Tarin">Tarin</option>
                  </select>
                </div>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="priority">Priority</label>
                  <select className='rounded-md' id="priority" {...register("priority")} >
                    <option value="Low">Low</option>
                    <option value="Low">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
              </div>
              <div className='flex gap-3 justify-end '>

              <button onClick={handleCancel} className='px-[10px] flex py-[6px] bg-red-500 border hover:bg-red-600 border-green-200 rounded-lg mt-3 text-white'  >cancel</button>
              <button className='px-[10px]  py-[6px] bg-green-500 hover:bg-green-600 border border-green-200 rounded-lg mt-3 text-white' type='submit'>submit</button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}