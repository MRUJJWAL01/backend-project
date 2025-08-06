import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../component/Home'
import Upload from '../component/Upload'

const routes = () => {
    
  return (
    <div>
        <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/upload' element={<Upload />} />
        </Routes>
        

    </div>
  )
}

export default routes