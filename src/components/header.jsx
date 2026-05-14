import { useState } from 'react'

function Header() {
    return (
        <div className='flex max-h-screen h-20 items-center justify-between border-b-2 border-gray-100 text-sm'>
            <div className='flex flex-col px-6 py-4 gap-1'>
                <h1 className='text-2xl '>Tableau de bord</h1>
                <span>Suivez les performances de votre compagnie en temps réel.</span>
            </div>
            <div className='flex absolute right-1 mr-10'>
                <div className='flex gap-2 items-center p-2 bg-gray-100 rounded-md'>
                    <span className='text-sm font-medium'>Nestor Hiembo</span>
                </div>   
                <div>
                    <img src="avatar.jpg" alt="avatar" className='w-10 h-10 rounded-md ml-4' />
                </div>
            </div>
        </div>
        
    )
}

export default Header