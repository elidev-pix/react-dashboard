import { useState } from 'react'
import { LayoutDashboard, Map, Bell, Waypoints, Users, Tag, Package, CreditCard, Settings, LogOut, PanelLeftClose, PanelLeftOpen } from 'lucide-react';


function Sidebar() {
    const [expanded, setExpanded] = useState(true)

    return (
        <aside className={`${expanded ? 'w-2xs' : 'w-16'} max-h-screen flex flex-col items-center text-md border-r-2 border-gray-100 transition-all duration-300`}>
        <div className='p-6'>
            <img 
                src={expanded ? "Logo.svg" : "Logo-miniature.png"} 
                alt="logo-Movia"
                className={expanded ? '' : 'mx-auto'}
            />
        </div>
        <div className='flex flex-col gap-2'>
            <div className='flex flex-col  gap-2'>
                {expanded && <span className='flex items-start font-bold text-sm text-black mb-2'>Monitoring</span>}
                <div className='flex gap-2 hover:bg-[#b53c3c]/10 text-[#b53c3c]hover: rounded-md px-6 py-4 cursor-pointer hover:border-l-2 hover:border-[#b53c3c]'>
                    <LayoutDashboard size={24} /> {expanded && 'Tableau de bord'}
                </div>
                <div className='flex gap-2 hover:bg-[#b53c3c]/10 hover:text-[#b53c3c] hover:rounded-md px-6 py-4 cursor-pointer hover:border-l-2 hover:border-[#b53c3c]'>
                    <Map size={24} /> {expanded && 'Suivi GPS'}
                </div>
                <div className='flex gap-2 hover:bg-[#b53c3c]/10 hover:text-[#b53c3c] hover:rounded-md px-6 py-4 cursor-pointer hover:border-l-2 hover:border-[#b53c3c]'>
                    <Bell size={24} /> {expanded && 'Notifications'} {expanded && <span className="bg-[#b53c3c] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">1</span>}
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                {expanded && <span className='flex items-start font-bold text-sm text-black mb-2'>Gestion</span>}
                <div className='flex gap-2 hover:bg-[#b53c3c]/10 text-[#b53c3c]hover: rounded-md px-6 py-4 cursor-pointer hover:border-l-2 hover:border-[#b53c3c]'>
                    <Waypoints size={24} /> {expanded && 'Gestion des trajets'}
                </div>
                <div className='flex gap-2 hover:bg-[#b53c3c]/10 hover:text-[#b53c3c] hover:rounded-md px-6 py-4 cursor-pointer hover:border-l-2 hover:border-[#b53c3c]'>
                    <Users size={24} /> {expanded && 'Gestion des chauffeurs'}
                </div>
                <div className='flex gap-2 hover:bg-[#b53c3c]/10 hover:text-[#b53c3c] hover:rounded-md px-6 py-4 cursor-pointer hover:border-l-2 hover:border-[#b53c3c]'>
                    <Tag size={24} /> {expanded && 'Gestion des billets'}
                </div>
                <div className='flex gap-2 hover:bg-[#b53c3c]/10 hover:text-[#b53c3c] hover:rounded-md px-6 py-4 cursor-pointer hover:border-l-2 hover:border-[#b53c3c]'>
                    <Package size={24} /> {expanded && 'Gestion des colis'}
                </div>
                <div className='flex gap-2 hover:bg-[#b53c3c]/10 hover:text-[#b53c3c] hover:rounded-md px-6 py-4 cursor-pointer hover:border-l-2 hover:border-[#b53c3c]'>
                    <CreditCard size={24} /> {expanded && 'Gestion des paiements'}
                </div>
            </div>
            <div className='flex flex-col items-start gap-2'>
                {expanded && <span className='flex items-start font-bold text-sm text-black mb-2'>Système</span>}
                <div className='flex gap-2 hover:bg-[#b53c3c]/10 text-[#b53c3c]hover: rounded-md px-6 py-4 cursor-pointer hover:border-l-2 hover:border-[#b53c3c]'>
                    <Settings size={24} /> {expanded && 'Paramètres'}
                </div>
                <div className='flex gap-2 hover:bg-[#b53c3c]/10 hover:text-[#b53c3c] hover:rounded-md px-6 py-4 cursor-pointer hover:border-l-2 hover:border-[#b53c3c]'>
                    <LogOut size={24} /> {expanded && 'Déconnexion'}
                </div>
            </div>
            <button onClick={() => setExpanded(!expanded)} className={`mt-auto ${expanded ? 'self-end' : 'self-center'} cursor-pointer p-4 rounded-md hover:bg-[#b53c3c]/10`}>
                {expanded ? <PanelLeftClose size={24} /> : <PanelLeftOpen size={24} />}
            </button>
        </div>
        </aside>
  )
}

export default Sidebar