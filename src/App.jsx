import { useState } from 'react'
import { LayoutDashboard, Map, Bell, Waypoints, Users, Tag, Package, CreditCard, Settings, LogOut } from 'lucide-react';
import Sidebar from './components/sidebar.jsx';
import Header from './components/header.jsx';
import Main from './components/main.jsx';

function App() {

  return (
    <div className='font-inter flex h-screen'>
      <Sidebar />
      <div className='flex flex-col w-full'>
        <Header />
        <Main />
      </div>
    </div>
  )
}

export default App