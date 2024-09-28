import React, {useState} from 'react'
import logo from './assets/Logo.png'
import webDev from './assets/web-dev.png'
import webDesign from './assets/web-design.png'
import webContent from './assets/web-content.png'
import portfolioImg1 from './assets/portfolio-1.png'
import portfolioImg2 from './assets/portfolio-2.png'
import portfolioImg3 from './assets/portfolio-3.png'
import portfolioImg4 from './assets/portfolio-4.png'
import TechStack1 from './assets/tech-stack-portfolio-1.png'
import TechStack2 from './assets/tech-stack-portfolio-2.png'
import person from './assets/person.png'
const App = () => {
  const phoneNumber = '+919444963725';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsOpen(!isOpen)
  };

  const handleClick = () => {
    alert(`Calling ${phoneNumber}`);
  };
  
  return (
    <>
      <header className="hero">
      <nav className="navbar">
          <div className="container">
            <div className="logo">
              <img src={logo}alt="" />
            </div>

            <ul className={`nav-links ${isMenuOpen ? 'active' : ''} `}>
              <li className="nav-link"><a className='hover-underline-animation' href="#">Home</a></li>
              <li className="nav-link"><a className='hover-underline-animation' href="#services">Services</a></li>
              <li className="nav-link"><a className='hover-underline-animation' href="#portfolio">Porfolio</a></li>
              <li className="nav-link"><a className='hover-underline-animation' href="">Why Choose Us</a></li>
            </ul>

          {isOpen ?<div className="hamburger" onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>: <div class="cross" onClick={toggleMenu}></div> }
            
          </div>
        </nav>

        <div className="container">
          <div className="hero-text">
            <h1>Transforming <br></br>Web Ideas into<br></br> Reality</h1>
            <p>We offer expert web development, design, and content<br></br> creation, building seamless, visually engaging websites that <br></br> elevate your online presence and drive meaningful results.</p>
            <div className="cta">
              <a className="button" href={`tel:${phoneNumber}`} onClick={handleClick}>Let's Talk</a>
              <a className="button"  href='#' >Get a Quote</a>
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
                    <h2 className='service-heading'>WEB DEVELOPMENT</h2>
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
                <article className="service">
                  <img src={webContent} alt="" />
                  <div className="service-content">
                    <h2 className='service-heading'>WEB CONTENT CREATION</h2>
                    <p>Delivering compelling, SEO-optimized content that engages audiences and drives business growth.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio" id='portfolio'>
          <div className="container">
            <h1 className="heading">OUR RECENT PROJECTS</h1>
            <div className="portfolio-grid">
              <div className="portfolio-card">
                <img className='portfolio-image' src={portfolioImg2} alt="" />
                <div className="portfolio-card-content">
                  <h1>CSI CATHEDRAL KOLLAM</h1>
                  <img src={TechStack1} alt="" />
                  <div className="block"><a href="https://csicathedralkollam.com" target='_blank'>Live Site <i class="fa-solid fa-arrow-up-right-from-square"></i></a></div>
                </div>
              </div>
              <div className="portfolio-card">
                <img  className='portfolio-image' src={portfolioImg3} alt="" />
                <div className="portfolio-card-content">
                  <h1>MIDTOWN RESTAURANT</h1>
                  <img className='techStack2' src={TechStack2} alt="" />
                  <div className="block"><a href="#">Check Design <i class="fa-solid fa-arrow-up-right-from-square"></i></a></div>
                </div>
              </div>
              <div className="portfolio-card">
                <img className='portfolio-image' src={portfolioImg1} alt="" />
                <div className="portfolio-card-content">
                  <h1>NINESTARS</h1>
                  <img src={TechStack1} alt="" />
                  <div className="block"><a href="https://ninestars-portfolio.onrender.com">Live Site <i class="fa-solid fa-arrow-up-right-from-square"></i></a></div>
                </div>
              </div>
              <div className="portfolio-card">
                <img className='portfolio-image' src={portfolioImg4} alt="" />
                <div className="portfolio-card-content">
                  <h1>GENIUS GEMS ACADEMY</h1>
                  <img src={TechStack1} alt="" />
                  <div className="block"><a href="https://genius-gems-academy.pages.dev">Live Site <i class="fa-solid fa-arrow-up-right-from-square"></i></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

      <div className="background-2">
        <div className="about-us">
          
        </div>
      </div>

      <div className="container">
        <div className="contact-us">
          <div className="contact-details">
            <h1>HAVE A PROJECT IN MIND?</h1>
            <p>We'd love to hear about your digital project. Please get in touch with one of our Project Consultants.</p>
            <p className='contacts'>zoeversetech@gmail.com <span>|</span> +91 9444963725</p>

            <div className="socials">
             <i class="fa-brands fa-square-instagram"></i>
             <i class="fa-brands fa-square-whatsapp"></i>
             <i class="fa-solid fa-square-envelope"></i>
            </div>
          </div>

          <form action="https://formsubmit.co/zoeversetech@gmail.com" className="contact-form" method='POST'>
            <h1>Get a Call Back Now !</h1>
            <p>Kickstart your website or mobile app project with our expert team!</p>

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