import React from 'react'
import marianStudents from '../assets/marian_students.jpeg'
import marianStudents2 from '../assets/marian_students2.jpeg'
import marianTeaching from '../assets/marian.jpeg'
import marianCollege from '../assets/marian_college.jpeg'
import LPUStudents from '../assets/LPU_students.jpeg'
import LPUBanner from '../assets/LPU_Bannner.jpeg'
import LPUTeaching from '../assets/LPU.jpeg'
import LPUCollege from '../assets/LPU_college.jpeg'
import '../index.css'

const Gallery = () => {
  return (
    <>
    <div className="container gallery">
      <h1 className='heading'>Gallery</h1>
    <div className="lpu container">
      <h1 className='sub-heading'>Full Stack Web Development Course conducted in Lovely Professional University , Punjab </h1>
      <div className="gallery-container container">
          {/* <img src={marianStudents}className='img-2' alt=""/> */}
          <img src={LPUBanner}     className='img-1' alt="" />
          <img src={LPUStudents}   className='img-2' alt="" />
          <img src={LPUTeaching}   className='img-3' alt="" />
          <img src={LPUCollege}    className='img-4' alt="" />
      </div>
    </div>

    <div className="marian container">
      <h1 className='sub-heading'>Full Stack Web Development Course conducted in Marian College , Kuttikanam , Kerala </h1>
      <div className="gallery-container container">
          <img src={marianStudents}className='img-2' alt=""/>
          <img src={marianTeaching}     className='img-3' alt="" />
          <img src={marianCollege}   className='img-1' alt="" />
          <img src={marianStudents2}   className='img-4' alt="" />
          {/* <img src={LPUCollege}    className='img-4' alt="" /> */}
      </div>
    </div>
    </div>
    
    </>
  )
}

export default Gallery