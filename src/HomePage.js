// // // import React, { useState } from 'react';
// // // import './HomePage.css'; // Make sure to create and style this CSS file

// // // const HomePage = () => {
// // //     const [activeFAQ, setActiveFAQ] = useState(null);

// // //     const toggleFAQ = (index) => {
// // //         setActiveFAQ(activeFAQ === index ? null : index);
// // //     };

// // //     return (
// // //         <div>
// // //             {/* Navigation Bar */}
// // //             <nav className="navbar">
// // //                 <div className="logo">MyAppLogo</div>
// // //                 <ul className="nav-links">
// // //                     <li><a href="#home">Home</a></li>
// // //                     <li className="dropdown">
// // //                         <button className="dropbtn">More</button>
// // //                         <div className="dropdown-content">
// // //                             <a href="#faqs">FAQs</a>
// // //                             <a href="#slider">Slider</a>
// // //                         </div>
// // //                     </li>
// // //                 </ul>
// // //             </nav>

// // //             {/* Home Section */}
// // //             <section id="home">
// // //                 <h1>Welcome to My App</h1>
// // //                 <p>This is the homepage of our awesome React app!</p>
// // //             </section>

// // //             {/* FAQs Section */}
// // //             <section id="faqs">
// // //                 <h2>Frequently Asked Questions</h2>
// // //                 <div className="faq-item">
// // //                     <div className="faq-question" onClick={() => toggleFAQ(0)}>
// // //                         <span>What is MyApp?</span>
// // //                         <span>{activeFAQ === 0 ? '-' : '+'}</span>
// // //                     </div>
// // //                     {activeFAQ === 0 && (
// // //                         <div className="faq-answer">
// // //                             <p>MyApp is a platform that allows users to...</p>
// // //                         </div>
// // //                     )}
// // //                 </div>
// // //                 <div className="faq-item">
// // //                     <div className="faq-question" onClick={() => toggleFAQ(1)}>
// // //                         <span>How do I get started?</span>
// // //                         <span>{activeFAQ === 1 ? '-' : '+'}</span>
// // //                     </div>
// // //                     {activeFAQ === 1 && (
// // //                         <div className="faq-answer">
// // //                             <p>To get started, you need to...</p>
// // //                         </div>
// // //                     )}
// // //                 </div>
// // //                 {/* Add more FAQs as needed */}
// // //             </section>

// // //             {/* Slider Section */}
// // //             <section id="slider">
// // //                 <h2>Video Slider</h2>
// // //                 <div className="slider-container">
// // //                     <iframe
// // //                         className="video-frame"
// // //                         src="https://www.youtube.com/embed/your_video_id_1"
// // //                         title="YouTube video 1"
// // //                         frameBorder="0"
// // //                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// // //                         allowFullScreen
// // //                     ></iframe>
// // //                     <iframe
// // //                         className="video-frame"
// // //                         src="https://www.youtube.com/embed/your_video_id_2"
// // //                         title="YouTube video 2"
// // //                         frameBorder="0"
// // //                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// // //                         allowFullScreen
// // //                     ></iframe>
// // //                     {/* Add more videos as needed */}
// // //                 </div>
// // //             </section>
// // //         </div>
// // //     );
// // // };

// // // export default HomePage;

// // import React, { useState } from 'react';
// // import './HomePage.css'; // Ensure you have this CSS file

// // const HomePage = () => {
// //     const [activeFAQ, setActiveFAQ] = useState(null);

// //     const toggleFAQ = (index) => {
// //         setActiveFAQ(activeFAQ === index ? null : index);
// //     };

// //     return (
// //         <div>
// //             {/* Top Navigation Bar */}
// //             <div className="top-bar">
// //                 <div className="contact-info">
// //                     <span>📞 +1 (123) 456-7890</span>
// //                     <span>✉️ contact@myapp.com</span>
// //                     <span>🕒 Time Zone: PST</span>
// //                 </div>
// //             </div>

// //             {/* Main Navigation Bar */}
// //             <nav className="navbar">
// //                 <div className="logo">MyAppLogo</div>
// //                 <ul className="nav-links">
// //                     <li><a href="#navbar">Home</a></li>
// //                     <li className="dropdown">
// //                         <button className="dropbtn">More</button>
// //                         <div className="dropdown-content">
// //                             <a href="#faqs">FAQs</a>
// //                             <a href="#slider">Slider</a>
// //                         </div>
// //                     </li>
// //                 </ul>
// //             </nav>

// //             {/* Home Section */}
// //             <section id="home">
// //                 <h1>Welcome to My App</h1>
// //                 <p>This is the homepage of our awesome React app!</p>
// //             </section>

// //             {/* FAQs Section */}
// //             <section id="faqs">
// //                 <h2>Frequently Asked Questions</h2>
// //                 <div className="faq-item">
// //                     <div className="faq-question" onClick={() => toggleFAQ(0)}>
// //                         <span>What is MyApp?</span>
// //                         <span>{activeFAQ === 0 ? '-' : '+'}</span>
// //                     </div>
// //                     {activeFAQ === 0 && (
// //                         <div className="faq-answer">
// //                             <p>MyApp is a platform that allows users to...</p>
// //                         </div>
// //                     )}
// //                 </div>
// //                 <div className="faq-item">
// //                     <div className="faq-question" onClick={() => toggleFAQ(1)}>
// //                         <span>How do I get started?</span>
// //                         <span>{activeFAQ === 1 ? '-' : '+'}</span>
// //                     </div>
// //                     {activeFAQ === 1 && (
// //                         <div className="faq-answer">
// //                             <p>To get started, you need to...</p>
// //                         </div>
// //                     )}
// //                 </div>
// //                 {/* Add more FAQs as needed */}
// //             </section>

// //             {/* Slider Section */}
// //             <section id="slider">
// //                 <h2>Video Slider</h2>
// //                 <div className="slider-container">
// //                     <iframe
// //                         className="video-frame"
// //                         src="https://www.youtube.com/embed/your_video_id_1"
// //                         title="YouTube video 1"
// //                         frameBorder="0"
// //                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// //                         allowFullScreen
// //                     ></iframe>
// //                     <iframe
// //                         className="video-frame"
// //                         src="https://www.youtube.com/embed/your_video_id_2"
// //                         title="YouTube video 2"
// //                         frameBorder="0"
// //                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// //                         allowFullScreen
// //                     ></iframe>
// //                     {/* Add more videos as needed */}
// //                 </div>
// //             </section>
// //         </div>
// //     );
// // };

// // export default HomePage;


// import React, { useState } from 'react';
// import './HomePage.css'; // Ensure you have this CSS file

// const HomePage = () => {
//     const [activeFAQ, setActiveFAQ] = useState(null);

//     const toggleFAQ = (index) => {
//         setActiveFAQ(activeFAQ === index ? null : index);
//     };

//     return (
//         <div>
//             {/* Top Navigation Bar */}
//             <div className="top-bar">
//                 <div className="contact-info">
//                     <span>📞 +1 (123) 456-7890</span>
//                     <span>✉️ contact@myapp.com</span>
//                     <span>🕒 Time Zone: PST</span>
//                 </div>
//             </div>

//             {/* Main Navigation Bar */}
//             <nav className="navbar">
//                 <div className="logo">MyAppLogo</div>
//                 <ul className="nav-links">
//                     <li><a href="#home">Home</a></li>
//                     <li className="dropdown">
//                         <button className="dropbtn">More</button>
//                         <div className="dropdown-content">
//                             <a href="#faqs">FAQs</a>
//                             <a href="#content-section">Mission & Vision</a>
//                         </div>
//                     </li>
//                 </ul>
//             </nav>

//             {/* Home Section */}
//             <section id="home">
//                 <h1>Welcome to My App</h1>
//                 <p>This is the homepage of our awesome React app!</p>
//             </section>

//             {/* FAQs Section */}
//             <section id="faqs">
//                 <h2>Frequently Asked Questions</h2>
//                 <div className="faq-item">
//                     <div className="faq-question" onClick={() => toggleFAQ(0)}>
//                         <span>What is MyApp?</span>
//                         <span>{activeFAQ === 0 ? '-' : '+'}</span>
//                     </div>
//                     {activeFAQ === 0 && (
//                         <div className="faq-answer">
//                             <p>MyApp is a platform that allows users to...</p>
//                         </div>
//                     )}
//                 </div>
//                 <div className="faq-item">
//                     <div className="faq-question" onClick={() => toggleFAQ(1)}>
//                         <span>How do I get started?</span>
//                         <span>{activeFAQ === 1 ? '-' : '+'}</span>
//                     </div>
//                     {activeFAQ === 1 && (
//                         <div className="faq-answer">
//                             <p>To get started, you need to...</p>
//                         </div>
//                     )}
//                 </div>
//                 {/* Add more FAQs as needed */}
//             </section>

//             {/* Content Section (Slider + Mission & Vision) */}
//             <section id="content-section" className="content-section">
//                 <div className="slider-container">
//                     <iframe
//                         className="video-frame"
//                         src="https://www.youtube.com/embed/your_video_id_1"
//                         title="YouTube video 1"
//                         frameBorder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                         allowFullScreen
//                     ></iframe>
//                     <iframe
//                         className="video-frame"
//                         src="https://www.youtube.com/embed/your_video_id_2"
//                         title="YouTube video 2"
//                         frameBorder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                         allowFullScreen
//                     ></iframe>
//                     {/* Add more videos as needed */}
//                 </div>
//                 <div className="mission-vision">
//                     <h2>Our Mission</h2>
//                     <p>Our mission is to...</p>
//                     <h2>Our Vision</h2>
//                     <p>Our vision is to...</p>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default HomePage;


import React, { useState, useEffect } from 'react';
import './HomePage.css'; // Ensure you have this CSS file

const HomePage = () => {
    const [activeFAQ, setActiveFAQ] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const toggleFAQ = (index) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };

    const videos = [
        "https://www.youtube.com/embed/your_video_id_1",
        "https://www.youtube.com/embed/your_video_id_2",
        "https://www.youtube.com/embed/your_video_id_3"
        // Add more video URLs as needed
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % videos.length);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, [videos.length]);

    return (
        <div>
            {/* Top Navigation Bar */}
            <div className="top-bar">
                <div className="contact-info">
                    <span>📞 +1 (123) 456-7890</span>
                    <span>✉️ contact@myapp.com</span>
                    <span>🕒 Time Zone: PST</span>
                </div>
            </div>

            {/* Main Navigation Bar */}
            <nav className="navbar">
                <div className="logo">MyAppLogo</div>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li className="dropdown">
                        <button className="dropbtn">More</button>
                        <div className="dropdown-content">
                            <a href="#faqs">FAQs</a>
                            <a href="#content-section">Mission & Vision</a>
                        </div>
                    </li>
                </ul>
            </nav>

            {/* Home Section */}
            <section id="home">
                <h1>Welcome to My App</h1>
                <p>This is the homepage of our awesome React app!</p>
            </section>

            {/* FAQs Section */}
            <section id="faqs">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFAQ(0)}>
                        <span>What is MyApp?</span>
                        <span>{activeFAQ === 0 ? '-' : '+'}</span>
                    </div>
                    {activeFAQ === 0 && (
                        <div className="faq-answer">
                            <p>MyApp is a platform that allows users to...</p>
                        </div>
                    )}
                </div>
                <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFAQ(1)}>
                        <span>How do I get started?</span>
                        <span>{activeFAQ === 1 ? '-' : '+'}</span>
                    </div>
                    {activeFAQ === 1 && (
                        <div className="faq-answer">
                            <p>To get started, you need to...</p>
                        </div>
                    )}
                </div>
                {/* Add more FAQs as needed */}
            </section>

            {/* Content Section (Slider + Mission & Vision) */}
            <section id="content-section" className="content-section">
                <div className="slider-container">
                    <div 
                        className="slider" 
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {videos.map((video, index) => (
                            <iframe
                                key={index}
                                className="video-frame"
                                src={video}
                                title={`YouTube video ${index + 1}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ))}
                    </div>
                </div>
                <div className="mission-vision">
                    <h2>Our Mission</h2>
                    <p>Our mission is to...</p>
                    <h2>Our Vision</h2>
                    <p>Our vision is to...</p>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
