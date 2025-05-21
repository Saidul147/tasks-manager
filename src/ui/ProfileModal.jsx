import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

export default function ProfileModal({isOpen,setIsOpen,profile}) {

 

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50 w-full">
      <div className="fixed inset-0 flex w-screen  items-center bg-gray-100/50 shadow-md justify-center p-4">
        <DialogPanel className="max-w-full w-[40%] space-y-4 border bg-gray-300  p-4">
          <DialogTitle>{profile?.title}</DialogTitle>
          <div>{profile?.assign}</div>
            <div>{profile?.description}</div>
          {/* ... */}
          <button className=' w-full flex ml-auto justify-end' onClick={() => setIsOpen(false)}> <span className='px-2 py-1 bg-red-400 text-white '>Close</span> </button>
        </DialogPanel>
      </div>
    </Dialog>
  )
}