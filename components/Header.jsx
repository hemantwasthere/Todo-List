import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import Modal from './Modal'

const Header = () => {
    
    const [openModal, setOpenModal] = useState(false)
    const { currentUser, googleUser } = useAuth()

    return (
        <>
            {openModal && <Modal setOpenModal={setOpenModal} />}
            <div className='sticky top-0 w-full left-0 bg-inherit flex items-center justify-between p-4 border-b border-solid border-white'>
                <h1 className='text-3xl select-none sm:text-6xl'>TODO LIST</h1>
                {
                    googleUser?.photoURL && <img onClick={() => setOpenModal(true)} className="fa-solid fa-user text-xl duration-300 rounded-full border-[1px] border-gray-500 w-[3.2rem] h-[3.2rem] hover:opacity-40 cursor-pointer sm:text-3xl" src={googleUser?.photoURL} alt="" />}
                {currentUser && !googleUser && <i onClick={() => setOpenModal(true)} className="fa-solid fa-user text-xl duration-300 hover:opacity-40 cursor-pointer sm:text-3xl"></i>}

            </div>
        </>
    )
}

export default Header