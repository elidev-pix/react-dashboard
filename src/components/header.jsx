import { useState } from 'react'

function Header({ title, subtitle }) {
    return (
        <header className='flex h-20 items-center justify-between border-b-2 border-gray-100 px-6'>
            
            
            <div className='flex flex-col gap-1'>
                <h1 className='text-2xl font-semibold'>Tableau de bord</h1>
                <span className='text-sm text-gray-500'>Suivez les performances de votre compagnie en temps réel.</span>
            </div>


            <div className='flex items-center gap-3'>
                <div className='flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-md'>
                    <span className='text-sm font-medium'>Nestor Hiembo</span>
                </div>
                <img src="avatar.jpg" alt="avatar" className='w-10 h-10 rounded-full object-cover' />
            </div>

        </header>
    )
}

export default Header