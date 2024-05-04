import React from 'react'
import { ImSpinner2 } from 'react-icons/im'

const LoadingModal = () => {
    return (
        <div className='z-50 bg-black/50 fixed inset-0 w-full h-screen grid place-content-center'>
            <ImSpinner2 size={35} className='animate-spin' color='white' />
        </div>
    )
}

export default LoadingModal
