// import React from 'react';
// import '../Home/Home.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
// import Carousel from 'react-bootstrap/Carousel';
// import slide1 from '../Image/heroslider/banner-1.jpg';
// import slide2 from '../Image/heroslider/banner-2.jpg';
// import slide3 from '../Image/heroslider/banner-3.jpg';
// const Home = () => {
//   return (
//     <div>
//       <Header />
//       <div className="main-wrapper">
//         <div className='hero'>
//           <Carousel className='home-slider'>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src={slide1}
//                 alt="First slide"
//               />
//               <Carousel.Caption>
//                 <h2>Achieve financial goals</h2>
//                 <p>Achieve your financial goals faster with a diversified portfolio through strategic asset allocation.</p>
//                 <div className="carousel-view-more">
//                   <a href="#get-started" className="btn-view-more">
//                     View  More <i className="bi bi-chevron-right ms-4"></i>
//                   </a>
//                 </div>
//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src={slide2}
//                 alt="Second slide"
//               />

//               <Carousel.Caption>
//                 <h2>Achieve  goals</h2>
//                 <p>Achieve your goals faster with a diversified portfolio through strategic asset allocation.</p>
//                 <div className="carousel-view-more">
//                   <a href="#get-started" className="btn-view-more">
//                     View  More <i className="bi bi-chevron-right ms-4"></i>
//                   </a>
//                 </div>
//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src={slide3}
//                 alt="Third slide"
//               />

//               <Carousel.Caption>
//                 <h2> Wealth Management Company</h2>
//                 <p>Achieve your financial goals faster with a diversified portfolio through strategic asset allocation.</p>
//                 <div className="carousel-view-more">
//                   <a href="#get-started" className="btn-view-more">
//                     View  More <i className="bi bi-chevron-right ms-4"></i>
//                   </a>
//                 </div>
//               </Carousel.Caption>
//             </Carousel.Item>
//           </Carousel>
//         </div>
//         <section id="services" className="services section-bg py-5">
//           <div className="section-header text-center pt-3 pb-4">
//               <h2>Our Offerings</h2>
//               <p>We offer research expertise in equities to partner you in journey of wealth creation. </p>
//             </div>
//             <div className="container mb-5 mt-3">
//             <div className="row ">
//               <div className="col-lg-3 col-md-6 no-padding">
//               <div className=" mutual-item-area">
//                 <div className="service-item position-relative">
//                   <h3>Mutual Fund</h3>
//                   <p className='mb-0'>We offer research expertise in equities to partner you in journey of wealth creation. Our aim is to provide services that are built on a strong foundation of knowledge and expertise.</p>
//                 </div>
//                 <div className="learn-Btn-area"><a href="service-details.html" className="readmore">Learn more <i className="bi bi-arrow-right"></i></a></div>
//               </div>
//               </div>
//               <div className="col-lg-3 col-md-6 no-padding">
//               <div className=" advisory-item-area">
//                 <div className="service-item  position-relative">
//                   <h3>Advisory Services</h3>
//                   <p className='mb-0'>We offer research expertise in equities to partner you in journey of wealth creation. Our aim is to provide services that are built on a strong foundation of knowledge and expertise.</p>
//                 </div>
//                 <div className="learn-Btn-area"><a href="service-details.html" className="readmore">Learn more <i className="bi bi-arrow-right"></i></a></div>
//               </div>
//               </div>
//               <div className="col-lg-3 col-md-6 no-padding">
//               <div className=" events-item-area">
//                 <div className="service-item  position-relative">
//                   <h3>Events & Webinars</h3>
//                   <p className='mb-0'>We offer research expertise in equities to partner you in journey of wealth creation. Our aim is to provide services that are built on a strong foundation of knowledge and expertise.</p>
//                 </div>
//                 <div className="learn-Btn-area"><a href="service-details.html" className="readmore">Learn more <i className="bi bi-arrow-right"></i></a></div>
//               </div>
//               </div>
//               <div className="col-lg-3 col-md-6 no-padding">
//               <div className=" financial-item-area">
//                 <div className="service-item  position-relative">
//                   <h3>Financial Consultancy</h3>
//                   <p className='mb-0'>We offer research expertise in equities to partner you in journey of wealth creation. Our aim is to provide services that are built on a strong foundation of knowledge and expertise.</p>
//                 </div>
//                 <div className="learn-Btn-area"><a href="service-details.html" className="readmore">Learn more <i className="bi bi-arrow-right"></i></a></div>
//               </div>
//               </div>
//             </div>
//             </div>
//           </section>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import './Home.css'; // Import the CSS file
import {useState,useEffect} from 'react';

function Home() {
  
  // const [backgroundImage, setBackgroundImage] = useState(slide1); // Initial background image
  // useEffect(() => {
  //     const imageUrls = ['C:\Users\vishal.pawar_7477\Documents\wms_ii\src\LandingPage\Home\digital-money-transfer-technology-background_1017-17454.avif'];
  //     let currentIndex = 0;
  //     const changeBackgroundImage = () => {
  //         setBackgroundImage(imageUrls[currentIndex]);
  //         currentIndex = (currentIndex + 1) % imageUrls.length;
  //     };
  //     const intervalId = setInterval(changeBackgroundImage, 5000);
  //     return () => {
  //         clearInterval(intervalId);
  //     };
  // }, []);

    return (
        <div>
            {/* <header>
                <nav>
                    <div className="logo">FinancialHub</div>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header> */}
            <Header/>
            <section id="hero"
            //  style={{backgroundImage: `url(${backgroundImage})`}}
             >
                <div className="hero-content">
                    <h1>Your Financial Future Starts Here</h1>
                    <p>Invest, trade, and manage your finances with ease.</p>
                    <a href="#signup" className="cta-button">Sign Up</a>
                </div>
            </section>
            
            <section id="features">
                <div className="section-content">
                    <h2>Key Features</h2>
                    <ul>
                        <li>Real-time Market Data</li>
                        <li>Secure Transactions</li>
                        <li>Portfolio Management</li>
                        <li>Personalized Insights</li>
                    </ul>
                </div>
            </section>

            <section id="hero1"
            //  style={{backgroundImage: `url(${backgroundImage})`}}
             >
                <div className="hero-content">
                    <h1>Your Wealth, Our Expertise</h1>
                    <p>Together, we create financial success.</p>
                    <a href="#signup" className="cta-button">Create Free Account</a>
                </div>
            </section>

            {/* <section id="about">
                <div className="section-content">
                    <h2>About Us</h2>
                    <p>At FinancialHub, we provide you with the tools and resources you need to take control of your financial journey. Whether you're a seasoned investor or just starting, we have you covered.</p>
                </div>
            </section> */}

            {/* <section id="contact">
                <div className="section-content">
                    <h2>Contact Us</h2>
                    <p>If you have any questions or need assistance, feel free to contact our support team.</p>
                    <a href="mailto:support@financialhub.com" className="cta-button">Email Us</a>
                </div>
            </section> */}

            {/* <footer>
                <p>&copy; 2023 FinancialHub. All rights reserved.</p>
            </footer> */}
            <Footer/>
        </div>
    );
}

export default Home;
