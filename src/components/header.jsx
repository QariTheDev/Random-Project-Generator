import React from 'react'
import Navbar from './navbar'
import Logo from '../components/logo'

export default function header() {
  return (
      <>
    <header className="bg-slate-500 sticky top-0 z-[20] mx-auto flex w-full items-center border-b-2">
        <Logo />
        <h1 className='mx-4 flex shrink-0 text-xl font-bold'>Random Project Generator</h1>
        <Navbar />
    </header>
      </>
    )
}
