import React from 'react'
import marianStudents from '../assets/marian_students.jpeg'
import LPUStudents from '../assets/LPU_students.jpeg'
import LPUBanner from '../assets/LPU_Bannner.jpeg'
import marianTeaching from '../assets/marian.jpeg'
import LPUTeaching from '../assets/LPU.jpeg'
import '../index.css'

const Gallery = () => {
  return (
    <>
    <div className="container gallery">
        <h1 className='heading'>Gallery</h1>
    <div className="gallery-container container">
            <img src={marianStudents}className='image-5' alt=""/>
            <img src={LPUStudents}   className='image-2' alt="" />
            <img src={LPUBanner}     className='image-1' alt="" />
            <img src={marianTeaching}className='image-4' alt="" />
            <img src={LPUTeaching}   className='image-3' alt="" />
    </div>
    </div>
    
    </>
  )
}

export default Gallery