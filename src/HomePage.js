// import React, { useState, useEffect } from 'react';
// import './HomePage.css'; // Ensure you have this CSS file
// import logoimage from './logopics/High Regulation/Work 1 black.jpg';

// const HomePage = () => {
//     const [activeFAQ, setActiveFAQ] = useState(null);
//     const [currentSlide, setCurrentSlide] = useState(0);

//     const toggleFAQ = (index) => {
//         setActiveFAQ(activeFAQ === index ? null : index);
//     };

//     const videos = [
//         "https://www.youtube.com/embed/d8gqXgLzSDk?si=v9Y1p7H9TEAOjYXC",
//         "https://www.youtube.com/embed/VwSFpOGAwKg?si=GmEegiiwDJAJqBv1",
//         "https://www.youtube.com/embed/your_video_id_3"
//         // Add more video URLs as needed
//     ];

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentSlide((prevSlide) => (prevSlide + 1) % videos.length);
//         }, 5000); // Change slide every 5 seconds
//         return () => clearInterval(interval);
//     }, [videos.length]);

//     return (
//         <div>
//             {/* Top Navigation Bar */}
//             <div className="top-bar">
//                 <div className="contact-info">
//                     <span>📞 +92 328 5399335</span>
//                     <span>✉️ pa@abdulbasitpawar.com</span>
//                     <span>🕒 Time Zone: PST</span>
//                 </div>
//             </div>

//             {/* Main Navigation Bar */}
//             <nav className="navbar">
//             <img className='logo' src={logoimage} alt="" />
//                 <ul className="nav-links">
//                     <li><a href="#contact-info">Home</a></li>
//                     <li className="dropdown">
//                         <button className="dropbtn">More</button>
//                         <div className="dropdown-content">
//                             <a href="#faqs">FAQs</a>
//                             <a href="#content-section">Mission & Vision</a>
//                         </div>
//                     </li>
//                     <li><a href="https://wa.me/message/CASFE6CD3FVQI1">Free Trial</a></li>
//                 </ul>
//             </nav>

//             {/* Content Section (Slider + Mission & Vision) */}
//             <section id="content-section" className="content-section">
//                 <div className="slider-container">
//                     <div 
//                         className="slider" 
//                         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//                     >
//                         {videos.map((video, index) => (
//                             <iframe
//                                 key={index}
//                                 className="video-frame"
//                                 src={video}
//                                 title={`YouTube video ${index + 1}`}
//                                 frameBorder="0"
//                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                                 allowFullScreen
//                             ></iframe>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="mission-vision">
//                     <h2>My Mission</h2>
//                     <p>My mission is to provide a 
//                         transformative educational experience that 
//                         fosters intellectual curiosity, critical 
//                         thinking, and innovation. I am committed 
//                         to equipping students with the 
//                         knowledge, skills, and ethical foundations 
//                         necessary to excel in their chosen 
//                         fields and to contribute positively to society.
//                     </p>
//                     <h2>My Vision</h2>
//                     <p>My vision is to be a leading 
//                         academic institution recognized for excellence 
//                         in education, research, and community 
//                         engagement. I aspire to create a dynamic 
//                         learning environment that embraces diversity, 
//                         promotes inclusivity, and drives social progress.
//                     </p>
//                 </div>
//             </section>

//             {/* Home Section */}
//             <section id="qualification">
//                 <h1>Qualification</h1>
//                 <p>BSc (Hons)</p>
//                 <p>Department of Mathematics: Emerging Regional Center of Excellence</p>
//                 <p>Syed Babar Ali School of Science & Engineering</p>
//                 <p>Lahore University of Management Sciences</p>
//             </section>
//             <section id="research">
//                 <h1>Research Experience</h1>
//                 <h3>Title: An Empirical Analysis of Amazon Product Sales; A Comprehensive Study on the Applicability of Zipf’s Law</h3>
//                 <p>Supervised by: Dr. Sultan Sial, Associate Professor</p>
//                 <p>For more details visit <a href='https://sbasse.lums.edu.pk/applying-math-in-real-world'>Applying Math in Real World</a></p>
//                 <h3>Title: Verification of study regarding "Impact of school closures and reopening on Covid-19 caseload in 6 cities of Pakistan" by reproducing it</h3>
//                 <p>Goal: To check validity of results</p>
//                 <p>Supervised by: Dr. Sultan Sial, Associate Professor</p>
//                 <p>Original Study Link: <a href='https://journals.plos.org/globalpublichealth/article?id=10.1371/journal.pgph.0000648'>Global Public Health</a></p>
//             </section>

//             {/* FAQs Section */}
//             <section id="faqs">
//                 <h2>Frequently Asked Questions</h2>
//                 <div className="faq-item">
//                     <div className="faq-question" onClick={() => toggleFAQ(0)}>
//                         <span>Do I need to pay the fees in advance?</span>
//                         <span>{activeFAQ === 0 ? '-' : '+'}</span>
//                     </div>
//                     {activeFAQ === 0 && (
//                         <div className="faq-answer">
//                             <p>Yes, you need to pay the monthly tuition fee after Free Trial/Demo session.</p>
//                         </div>
//                     )}
//                 </div>
//                 <div className="faq-item">
//                     <div className="faq-question" onClick={() => toggleFAQ(1)}>
//                         <span>Is there any registeration fees?</span>
//                         <span>{activeFAQ === 1 ? '-' : '+'}</span>
//                     </div>
//                     {activeFAQ === 1 && (
//                         <div className="faq-answer">
//                             <p>Yes, a registeration fees of Rs 5000 or USD 50 also applies unless stated otherwise.</p>
//                         </div>
//                     )}
//                 </div>
//                 <div className="faq-item">
//                     <div className="faq-question" onClick={() => toggleFAQ(2)}>
//                         <span>Will my scores improve after taking classes?</span>
//                         <span>{activeFAQ === 2 ? '-' : '+'}</span>
//                     </div>
//                     {activeFAQ === 2 && (
//                         <div className="faq-answer">
//                             <p>Most of my students improved their scores. However, the extent of improvement highly depends on attendance in classes and practice outside the class timings.</p>
//                         </div>
//                     )}
//                 </div>
//                 <div className="faq-item">
//                     <div className="faq-question" onClick={() => toggleFAQ(3)}>
//                         <span>What is the free trial?</span>
//                         <span>{activeFAQ === 3 ? '-' : '+'}</span>
//                     </div>
//                     {activeFAQ === 3 && (
//                         <div className="faq-answer">
//                             <p>It is a Trial/Demo session of your chosen topic for a duration of 30 minutes.</p>
//                         </div>
//                     )}
//                 </div>
//                 {/* Add more FAQs as needed */}
//             </section>

//         </div>
//     );
// };

// export default HomePage;


// import React, { useState, useEffect } from 'react';
// import './HomePage.css'; // Ensure you have this CSS file
// import logoimage from './logopics/High Regulation/Work 1 black.jpg';

// const HomePage = () => {
//     const [activeFAQ, setActiveFAQ] = useState(null);
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [isPaused, setIsPaused] = useState(false);

//     const toggleFAQ = (index) => {
//         setActiveFAQ(activeFAQ === index ? null : index);
//     };

//     const videos = [
//         "https://www.youtube.com/embed/d8gqXgLzSDk?si=v9Y1p7H9TEAOjYXC",
//         "https://www.youtube.com/embed/VwSFpOGAwKg?si=GmEegiiwDJAJqBv1",
//         "https://www.youtube.com/embed/your_video_id_3"
//         // Add more video URLs as needed
//     ];

//     useEffect(() => {
//         if (!isPaused) {
//             const interval = setInterval(() => {
//                 setCurrentSlide((prevSlide) => (prevSlide + 1) % videos.length);
//             }, 5000); // Change slide every 5 seconds
//             return () => clearInterval(interval);
//         }
//     }, [isPaused, videos.length]);

//     const handleVideoClick = () => {
//         setIsPaused(true); // Pause the slider when a video is clicked
//     };

//     return (
//         <div>
//             {/* Top Navigation Bar */}
//             <div className="top-bar">
//                 <div className="contact-info">
//                     <span>📞 +92 328 5399335</span>
//                     <span>✉️ pa@abdulbasitpawar.com</span>
//                     <span>🕒 Time Zone: PST</span>
//                 </div>
//             </div>

//             {/* Main Navigation Bar */}
//             <nav className="navbar">
//                 <img className='logo' src={logoimage} alt="Logo" />
//                 <ul className="nav-links">
//                     <li><a href="#top">Home</a></li>
//                     <li className="dropdown">
//                         <button className="dropbtn">More</button>
//                         <div className="dropdown-content">
//                             <a href="#faqs">FAQs</a>
//                             <a href="#content-section">Mission & Vision</a>
//                         </div>
//                     </li>
//                     <li className="dropdown">
//                         <button className="dropbtn">More</button>
//                         <div className="dropdown-content">
//                             <a href="#faqs">FAQs</a>
//                             <a href="#content-section">Mission & Vision</a>
//                         </div>
//                     </li>
//                     <li><a href="https://wa.me/message/CASFE6CD3FVQI1">Free Trial</a></li>
//                 </ul>
//             </nav>

//             {/* Content Section (Slider + Mission & Vision) */}
//             <section id="content-section" className="content-section">
//                 <div className="slider-container">
//                     <div 
//                         className="slider" 
//                         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//                     >
//                         {videos.map((video, index) => (
//                             <iframe
//                                 key={index}
//                                 className="video-frame"
//                                 src={video}
//                                 title={`YouTube video ${index + 1}`}
//                                 frameBorder="0"
//                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                                 allowFullScreen
//                                 onClick={handleVideoClick}
//                             ></iframe>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="mission-vision">
//                     <h2>My Mission</h2>
//                     <p>My mission is to provide a 
//                         transformative educational experience that 
//                         fosters intellectual curiosity, critical 
//                         thinking, and innovation. I am committed 
//                         to equipping students with the 
//                         knowledge, skills, and ethical foundations 
//                         necessary to excel in their chosen 
//                         fields and to contribute positively to society.
//                     </p>
//                     <h2>My Vision</h2>
//                     <p>My vision is to be a leading 
//                         academic institution recognized for excellence 
//                         in education, research, and community 
//                         engagement. I aspire to create a dynamic 
//                         learning environment that embraces diversity, 
//                         promotes inclusivity, and drives social progress.
//                     </p>
//                 </div>
//             </section>

//             {/* Home Section */}
//             <section id="qualification" className='qualification'>
//                 <h1>Qualification</h1>
//                 <p>BSc (Hons)</p>
//                 <p>Department of Mathematics: Emerging Regional Center of Excellence</p>
//                 <p>Syed Babar Ali School of Science & Engineering</p>
//                 <p>Lahore University of Management Sciences</p>
//             </section>
//             <section id="research" className='research'>
//                 <h1>Research Experience</h1>
//                 <h3>Title: An Empirical Analysis of Amazon Product Sales; A Comprehensive Study on the Applicability of Zipf’s Law</h3>
//                 <p>Supervised by: Dr. Sultan Sial, Associate Professor</p>
//                 <p>For more details visit <a href='https://sbasse.lums.edu.pk/applying-math-in-real-world'>Applying Math in Real World</a></p>
//                 <h3>Title: Verification of study regarding "Impact of school closures and reopening on Covid-19 caseload in 6 cities of Pakistan" by reproducing it</h3>
//                 <p>Goal: To check validity of results</p>
//                 <p>Supervised by: Dr. Sultan Sial, Associate Professor</p>
//                 <p>Original Study Link: <a href='https://journals.plos.org/globalpublichealth/article?id=10.1371/journal.pgph.0000648'>Global Public Health</a></p>
//             </section>

//             {/* FAQs Section */}
//             <section id="faqs" className='faqs'>
//                 <h2>Frequently Asked Questions</h2>
//                 <div className="faq-item">
//                     <div className="faq-question" onClick={() => toggleFAQ(0)}>
//                         <span>Do I need to pay the fees in advance?</span>
//                         <span>{activeFAQ === 0 ? '-' : '+'}</span>
//                     </div>
//                     {activeFAQ === 0 && (
//                         <div className="faq-answer">
//                             <p>Yes, you need to pay the monthly tuition fee after Free Trial/Demo session.</p>
//                         </div>
//                     )}
//                 </div>
//                 <div className="faq-item">
//                     <div className="faq-question" onClick={() => toggleFAQ(1)}>
//                         <span>Is there any registeration fees?</span>
//                         <span>{activeFAQ === 1 ? '-' : '+'}</span>
//                     </div>
//                     {activeFAQ === 1 && (
//                         <div className="faq-answer">
//                             <p>Yes, a registeration fees of Rs 5000 or USD 50 also applies unless stated otherwise.</p>
//                         </div>
//                     )}
//                 </div>
//                 <div className="faq-item">
//                     <div className="faq-question" onClick={() => toggleFAQ(2)}>
//                         <span>Will my scores improve after taking classes?</span>
//                         <span>{activeFAQ === 2 ? '-' : '+'}</span>
//                     </div>
//                     {activeFAQ === 2 && (
//                         <div className="faq-answer">
//                             <p>Most of my students improved their scores. However, the extent of improvement highly depends on attendance in classes and practice outside the class timings.</p>
//                         </div>
//                     )}
//                 </div>
//                 <div className="faq-item">
//                     <div className="faq-question" onClick={() => toggleFAQ(3)}>
//                         <span>What is the free trial?</span>
//                         <span>{activeFAQ === 3 ? '-' : '+'}</span>
//                     </div>
//                     {activeFAQ === 3 && (
//                         <div className="faq-answer">
//                             <p>It is a Trial/Demo session of your chosen topic for a duration of 30 minutes.</p>
//                         </div>
//                     )}
//                 </div>
//                 {/* Add more FAQs as needed */}
//             </section>

//         </div>
//     );
// };

// export default HomePage;


import React, { useState, useEffect } from 'react';
import './HomePage.css'; // Ensure you have this CSS file
import logoimage from './logopics/High Regulation/Work 1 black.jpg';

const HomePage = () => {
    const [activeFAQ, setActiveFAQ] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const toggleFAQ = (index) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };

    const videos = [
        "https://www.youtube.com/embed/d8gqXgLzSDk?si=v9Y1p7H9TEAOjYXC",
        "https://www.youtube.com/embed/VwSFpOGAwKg?si=GmEegiiwDJAJqBv1",
        "https://www.youtube.com/embed/your_video_id_3"
        // Add more video URLs as needed
    ];

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setCurrentSlide((prevSlide) => (prevSlide + 1) % videos.length);
            }, 5000); // Change slide every 5 seconds
            return () => clearInterval(interval);
        }
    }, [isPaused, videos.length]);

    const handleVideoClick = () => {
        setIsPaused(true); // Pause the slider when a video is clicked
    };

    return (
        <div>
            {/* Top Navigation Bar */}
            <div className="top-bar">
                <div className="contact-info">
                    <span>📞 +92 328 5399335</span>
                    <span>✉️ pa@abdulbasitpawar.com</span>
                    <span>🕒 Time Zone: PST</span>
                </div>
            </div>

            {/* Main Navigation Bar */}
            <nav className="navbar">
                <img className='logo' src={logoimage} alt="Logo" />
                <ul className="nav-links">
                    <li><a href="#top">Home</a></li>
                    <li className="dropdown">
                        <button className="dropbtn">More</button>
                        <div className="dropdown-content">
                            <a href="#faqs">FAQs</a>
                            <a href="#content-section">Mission & Vision</a>
                        </div>
                    </li>
                    <li className="dropdown">
                        <button className="dropbtn">More</button>
                        <div className="dropdown-content">
                            <a href="#faqs">FAQs</a>
                            <a href="#content-section">Mission & Vision</a>
                        </div>
                    </li>
                    <li><a href="https://wa.me/message/CASFE6CD3FVQI1">Free Trial</a></li>
                </ul>
            </nav>

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
                                onClick={handleVideoClick}
                            ></iframe>
                        ))}
                    </div>
                </div>
                <div className="mission-vision">
                    <h2>My Mission</h2>
                    <p>My mission is to provide a 
                        transformative educational experience that 
                        fosters intellectual curiosity, critical 
                        thinking, and innovation. I am committed 
                        to equipping students with the 
                        knowledge, skills, and ethical foundations 
                        necessary to excel in their chosen 
                        fields and to contribute positively to society.
                    </p>
                    <h2>My Vision</h2>
                    <p>My vision is to be a leading 
                        academic institution recognized for excellence 
                        in education, research, and community 
                        engagement. I aspire to create a dynamic 
                        learning environment that embraces diversity, 
                        promotes inclusivity, and drives social progress.
                    </p>
                </div>
            </section>

            {/* Qualifications Section */}
            <section id="qualification" className='qualification'>
                <h1>Qualification</h1>
                <p>BSc (Hons)</p>
                <p>Department of Mathematics: Emerging Regional Center of Excellence</p>
                <p>Syed Babar Ali School of Science & Engineering</p>
                <p>Lahore University of Management Sciences</p>
            </section>

            {/* Research Experience Section */}
            <section id="research" className='research'>
                <h1>Research Experience</h1>
                <h3>Title: An Empirical Analysis of Amazon Product Sales; A Comprehensive Study on the Applicability of Zipf’s Law</h3>
                <p>Supervised by: Dr. Sultan Sial, Associate Professor</p>
                <p>For more details visit <a href='https://sbasse.lums.edu.pk/applying-math-in-real-world'>Applying Math in Real World</a></p>
                <h3>Title: Verification of study regarding "Impact of school closures and reopening on Covid-19 caseload in 6 cities of Pakistan" by reproducing it</h3>
                <p>Goal: To check validity of results</p>
                <p>Supervised by: Dr. Sultan Sial, Associate Professor</p>
                <p>Original Study Link: <a href='https://journals.plos.org/globalpublichealth/article?id=10.1371/journal.pgph.0000648'>Global Public Health</a></p>
            </section>

            {/* FAQs Section */}
            <section id="faqs" className='faqs'>
                <h2>Frequently Asked Questions</h2>
                <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFAQ(0)}>
                        <span>Do I need to pay the fees in advance?</span>
                        <span>{activeFAQ === 0 ? '-' : '+'}</span>
                    </div>
                    {activeFAQ === 0 && (
                        <div className="faq-answer">
                            <p>Yes, you need to pay the monthly tuition fee after Free Trial/Demo session.</p>
                        </div>
                    )}
                </div>
                <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFAQ(1)}>
                        <span>Is there any registration fees?</span>
                        <span>{activeFAQ === 1 ? '-' : '+'}</span>
                    </div>
                    {activeFAQ === 1 && (
                        <div className="faq-answer">
                            <p>Yes, a registration fee of Rs 5000 or USD 50 also applies unless stated otherwise.</p>
                        </div>
                    )}
                </div>
                <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFAQ(2)}>
                        <span>Will my scores improve after taking classes?</span>
                        <span>{activeFAQ === 2 ? '-' : '+'}</span>
                    </div>
                    {activeFAQ === 2 && (
                        <div className="faq-answer">
                            <p>Most of my students improved their scores. However, the extent of improvement highly depends on attendance in classes and practice outside the class timings.</p>
                        </div>
                    )}
                </div>
                <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFAQ(3)}>
                        <span>What is the free trial?</span>
                        <span>{activeFAQ === 3 ? '-' : '+'}</span>
                    </div>
                    {activeFAQ === 3 && (
                        <div className="faq-answer">
                            <p>It is a Trial/Demo session of your chosen topic for a duration of 30 minutes.</p>
                        </div>
                    )}
                </div>
                {/* Add more FAQs as needed */}
            </section>
        </div>
    );
};

export default HomePage;
