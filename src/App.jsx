import React from 'react'

import webDev from './assets/web-dev.png'
import webDesign from './assets/web-design.png'
import webContent from './assets/web-content.png'
import portfolioImg1 from './assets/portfolio-1.png'
import portfolioImg2 from './assets/portfolio-2.png'
import portfolioImg3 from './assets/portfolio-3.png'
import portfolioImg4 from './assets/portfolio-4.png'
import TechStack1 from './assets/tech-stack-portfolio-1.png'
import TechStack2 from './assets/tech-stack-portfolio-2.png'
import ProcessCarousel from './components/ProcessCarousel'
import Navbar from './components/Navbar'
import visionImage from './assets/vision.jpg'
import Courses from './components/Courses'
import Gallery from './components/Gallery'

const App = () => {
  const phoneNumber = '+919444963725';
  const whattsapNumber = '9444963725';
  const recipient = "zoeversetech@gmail.com";
  const mailtoUrl = `mailto:${recipient}`;
  const message = encodeURIComponent("Hello! I'd like to inquire...");

  const whatsappUrl = `https://wa.me/${whattsapNumber}?text=${message}`;

  const handleClick = () => {
    alert(`Calling ${phoneNumber}`);
  };
  
  return (
    <>
      <header className="hero">

      <Navbar />
        <div className="container">
          <div className="hero-text">
            <h1>YOUR <br></br>Web Training and<br></br> Solutions Partner</h1>
            <p>From expert web development and design to educational training<br></br> for colleges and corporates — we deliver  seamless  websites <br></br> and empower teams  with future-ready digital skills</p>
            <div className="cta">
              <a className="button" href={`tel:${phoneNumber}`} onClick={handleClick}>Let's Talk</a>
              <a className="button"  href='#contactUs' >Get a Quote</a>
            </div>
          </div>
        </div>
      </header>

      <div className="background">
        <div className="services" id='services'>
          <div className="container">
            <div className="two-col">
              <h1 className='heading'>Our<br></br> Services</h1>
              <div className="service-cards">
                <article className="service">
                  <img src={webDev} alt="" />
                  <div className="service-content">
                    <h2 className='service-heading'>WEB DEVELOPMENT COURSES</h2>
                    <p>Build cutting-edge, scalable websites with our dynamic courses. Transform your skills and create high-impact websites now!</p>
                  </div>
                </article>
                <article className="service">
                  <img src={webContent} alt="" />
                  <div className="service-content">
                    <h2 className='service-heading'>WEBSITE CREATION</h2>
                    <p>Building robust, scalable websites tailored to your needs with the latest technologies for optimal performance.</p>
                  </div>
                </article>
                <article className="service">
                  <img src={webDesign} alt="" />
                  <div className="service-content">
                    <h2 className='service-heading'>WEB DESIGN</h2>
                    <p>Crafting visually stunning, user-friendly designs that enhance user experience and brand identity.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      <Courses/>
        <div className="portfolio" id='portfolio'>
          <div className="container">
            <h1 className="heading">OUR PORTFOLIO<br></br> PROJECTS</h1>
            <div className="portfolio-grid">
            <div className="portfolio-card span-2">
                <img className='portfolio-image' src={portfolioImg4} alt="" />
                <div className="portfolio-card-content">
                  <h1>GENIUS GEMS ACADEMY</h1>
                  <img src={TechStack1} alt="" />
                  <div className="block"><a target='_blank' href="https://genius-gems-academy.pages.dev">Live Site <i class="fa-solid fa-arrow-up-right-from-square"></i></a></div>
                </div>
              </div>
              <div className="portfolio-card ">
                <img className='portfolio-image' src={portfolioImg2} alt="" />
                <div className="portfolio-card-content">
                  <h1>CSI CATHEDRAL KOLLAM</h1>
                  <img src={TechStack1} alt="" />
                  <div className="block"><a href="https://csicathedralkollam.com" target='_blank'>Live Site <i class="fa-solid fa-arrow-up-right-from-square"></i></a></div>
                </div>
              </div>
              <div className="portfolio-card">
                <img className='portfolio-image' src={portfolioImg1} alt="" />
                <div className="portfolio-card-content">
                  <h1>NINESTARS</h1>
                  <img src={TechStack1} alt="" />
                  <div className="block"><a target='_blank' href="https://ninestars-portfolio.onrender.com">Live Site <i class="fa-solid fa-arrow-up-right-from-square"></i></a></div>
                </div>
              </div>
              
            </div>
          </div>
        </div>


      </div>


        <div className="background-2">
          {/* <div className="container process" id='process'>
            <h1 className='heading process-heading'>FROM CONCEPT TO COMPLETION</h1>
          <ProcessCarousel />
          </div>
          <div className="about-us">
            <div className="container">
              <h1 className="heading">ABOUT US</h1>
              <div className="about-us-grid">
                <div className="about-us-image">
                   <img src={visionImage} alt="" />
                </div>
                <div className="about-us-text">
                  <div><p>ZoeVerse  is dedicated to bringing your digital ideas to life with a focus on customer satisfaction and quality. Rooted in the essence of "Zoe"—a restored and flourishing life—our work mirrors the transformation that comes from renewal. </p></div>


                  <div><p>We infuse each project with the essence of transformation, creating websites that not only meet your needs but also elevate your brand to new heights. Our team collaborates closely with you to understand your vision, delivering dynamic, high-performing solutions that stand the test of time.</p> </div>
                  
                  <div>
                    <p>From initial concept to ongoing support, we ensure your website evolves with your business. At ZoeVerse, we don’t just build websites—we create lasting, impactful experiences that grow with you.</p>
                    </div>  
                </div>
              </div>
            </div>
          </div> */}

          <Gallery/>
        </div>

      <div className="container">
        <div className="contact-us" id='contactUs'>
          <div className="contact-details">
            <h1>WISH TO PARTNER WITH US?</h1>
            <p>We'd love to hear about your digital project. Please get in touch with our team for more information.</p>
            <p className='contacts'>zoeversetech@gmail.com <span>|</span> +91 9444963725</p>

            <div className="socials">
             {/* <a ><i class="fa-brands fa-square-instagram"></i></a> */}
             <a href={whatsappUrl} target='_blank' rel="noopener noreferrer"><i class="fa-brands fa-square-whatsapp"></i></a>
             <a href={mailtoUrl} target='_blank' rel="noopener noreferrer"><i class="fa-solid fa-square-envelope"></i></a>
            </div>
          </div>

          <form action="https://formsubmit.co/zoeversetech@gmail.com" className="contact-form" method='POST'>
            <h1>Get a Call Back Now!</h1>
            <p>Kickstart your web development journey with our expert team!</p>

            <div className='label-group'>
              <label htmlFor="">Your Name<span>*</span> :</label>
              <input type="text" name='name' required placeholder='🙎🏻‍♂️      |     Enter your name here' />
            </div>
            <div className='label-group'>
              <label htmlFor="">Your Email<span>*</span> :</label>
              <input type="email" name='email' required  placeholder='✉️     |     Enter your email here' />
            </div>
            <div className='label-group'>
              <label htmlFor="">Your Number<span>*</span> :</label>
              <input type="text" name='number' required placeholder='📞     |     Enter your number here' />
            </div>
            <div className='label-group'>
              <label htmlFor="">Tell us about your project:</label>
              <textarea name="details" id="" placeholder="🖋️     |     What's your project about?" rows={10}>

              </textarea>
            </div>

            <button type="submit" className='button'>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App