import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'


const Home = ({sidebar}) => {
  const [category ,setCategory]=useState(0);
  return (
    <>
      <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
          <Sidebar category={category} setCategory={setCategory} />
      </div>
      <div className={`container ${sidebar?"":"large-container"}`}>
            <Feed category={category} setCategory={setCategory} />
      </div>
    </>
  )
}

export default Home