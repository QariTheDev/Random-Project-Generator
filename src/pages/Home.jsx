import React from 'react'
import { beginnerProjects, intermediateProjects, advancedProjects, advancedProjectHints, beginnerProjectHints, intermediateProjectHints } from '../data/data'
import { useState } from 'react'
import { FaArrowDown } from "react-icons/fa";

let temp;

export default function Home() {

  const [project, setProject] = useState('');
  const [index, setIndex] = useState(0);
  const [hint, setHint] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [num, setNum] = useState(0);

  const beginnerToggle = () => {
    setIndex(Math.floor(Math.random() * beginnerProjects.length));
    setProject(beginnerProjects[index]);
    setHint('Hint');
    setShowHint(false);
    setNum(1);
    temp = index;

    console.log(temp);
  }

  const intermediateToggle = () => {
    setIndex(Math.floor(Math.random() * intermediateProjects.length));
    setProject(intermediateProjects[index]);
    setHint('Hint');
    setShowHint(false);
    setNum(2);
    temp = index;

    console.log(temp);
  }

  const advanceToggle = () => {
    setIndex(Math.floor(Math.random() * advancedProjects.length));
    setProject(advancedProjects[index]);
    setHint('Hint');
    setShowHint(false);
    setNum(3);
    temp = index;

    console.log(temp);
  }

  const toggleHint = () => {
    if (num === 1) {
      setHint(beginnerProjectHints[temp]);
    } else if(num === 2) {
      setHint(intermediateProjectHints[temp]);
    } else if(num === 3) {
      setHint(advancedProjectHints[temp]);
    }

    console.log(temp);
    setShowHint(!showHint);
  }

  return (
    <>
    <div className='flex justify-center items-center min-h-screen flex-col relative'>
      <h2 className='text-4xl text-slate-200 absolute top-1/4'>{project}</h2>
      <button onClick={toggleHint} className='text-xs underline absolute text-slate-100' style={{ top: 'calc(33%)' }}>{hint}</button>
      
      <h2 className='text-3xl text-slate-300 font-bold my-4 hover:text-gray-300 transition ease-in-out duration-300'>Choose Your Difficulty</h2>
      <div className='space-x-5 flex'>
        <button onClick={beginnerToggle} className='text-center focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 transition ease-in-out duration-300'>Beginner</button>
        <button onClick={intermediateToggle} className='text-center focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 transition ease-in-out duration-300'>Intermediate</button>
        <button onClick={advanceToggle} className='text-center focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 transition ease-in-out duration-300'>Advanced</button>
      </div>
    </div>
    </>
  )
}