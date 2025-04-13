import React from 'react'
import '../index.css'

const Courses = () => {
  return (
    <div className='courses' id='courses'>
    <h1 className='heading'>Courses we Offer</h1>
     <div className='grid-container container'>

        <div className="box-container" style={{gridArea: "box-1"}}>
          <div className="box">
            <div className="box-front">
              <h1>Python Full Stack: React & Flask Unleashed</h1>
            </div>
            <div class="box-back font-increase">
               <p>Dive into full-stack development with Python, mastering front-end interfaces with React and back-end systems with Flask. This course equips students with the skills to build robust, end-to-end web applications, blending Python’s versatility with modern web technologies.</p>
            </div>
          </div>
        </div>


        <div className="box-container" style={{gridArea: "box-2"}}>
          <div className="box">
            <div className="box-front">
              <h1>Full-Stack Essentials: A Web Development (MERN) Bootcamp</h1>
            </div>
            <div class="box-back font-increase">
               <p>Master the essentials of full-stack web development using the MERN stack (MongoDB, Express.js, React, Node.js). This intensive bootcamp equips students with the skills to build and deploy dynamic, full-featured web applications, preparing them for versatile roles in the tech industry.</p>
            </div>
          </div>
        </div>

        <div className="box-container" style={{gridArea: "box-3"}}>
          <div className="box">
            <div className="box-front">
              <h1>Front-End Web Developer Course with React and Generative AI</h1>
            </div>
            <div class="box-back font-increase">
               <p>Build modern, interactive web applications using React and enhance them with Generative AI capabilities. This course blends front-end development expertise with cutting-edge AI integration, equipping students with skills for in-demand tech roles in today’s digital economy.</p>
            </div>
          </div>
        </div>

        <div className="box-container" style={{gridArea: "box-4"}}>
          <div className="box">
            <div className="box-front">
              <h1>Backend Blitz: Node.js, Express & MongoDB</h1>
            </div>
            <div class="box-back">
               <p>Master backend development with Node.js, Express.js, and MongoDB, building secure, scalable server-side applications and APIs. This course equips students with advanced backend skills, including authentication and error handling, preparing them for critical roles in web development.</p>
            </div>
          </div>
        </div>

        <div className="box-container" style={{gridArea: "box-5"}}>
          <div className="box">
            <div className="box-front">
              <h1>Zero to Web Hero with React</h1>
            </div>
            <div class="box-back">
               <p>Launch your web development journey with this beginner-friendly course, covering everything from the essentials of HTML, CSS, and JavaScript to the basics of React. Designed for newcomers, this program builds a strong foundation, enabling students to create interactive web applications from scratch.</p>
            </div>
          </div>
        </div>
    </div>
  </div>
   
  )
}

export default Courses