import { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);

  const toggleButton = () => {
    setIsClicked(!isClicked);
  }

  return (
    <>
      <nav className='flex w-full justify-end mx-20'>
        <div className='hidden w-full space-x-12 md:flex md:justify-end'>
            <Link to="/" className="text-white hover:text-slate-950 transition-colors">Home</Link>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleButton}><TiThMenu /></button>
        </div>
      </nav>
    </>
  )
}
