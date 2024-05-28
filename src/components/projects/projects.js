import React from 'react';
// import CreditCard from "../../assets/credit_card.png";
import Cards from '../cards/cards';

import styles from "./projects.module.scss"

const Projects = () => {

    const ProjectsData = [
        {
            heading: "Weather Forecasting",
            description: "Developed a Weather Forecasting application using React.js and Material-UI.The application allows users to search for weather forecasts by city name, providing detailed predictions for the next 5-6 days at 3-hour intervals. simplifies weather tracking and planning, providing users with precise weather insights for effective decision-making",
            technologies: ["ReactJS", "Javascript", "MaterialUI", "Html5","  CSS3"],
            repo: "https://github.com/mansi2804/Weather-Forecasting",
            link: "https://weather-forecasting-bymansi.vercel.app/",
        },
        {
            heading: "Indian Vendors",
            description: "In the pandemic the vendors were not able to sell their products so we had made a centralized website in which the admin can add the vendors through dashboard. Vendors can upload or delete the products from its dashboard.The user can make a comment on it, and if the user gives slang word then the system can detect it and the comment will not get updated, this is built by sentiment analysis Developed a login/signup page for authentication.",
            technologies: ["Angular12", "Javascript", "Firebase", "HTML5","CSS3","Bootstrap4"],
            repo: "https://github.com/mansi2804/Indian-Vendors",
        },
        {
            heading: "SONG/ARTIST RECOMMENDATION SYSTEM USING SPARK STREAMING",
            description: "The Song/Artist Recommendation System using Spark Streaming aims to enhance user experience on music streaming platforms by providing personalized recommendations in real time. By leveraging Apache Spark, PySpark, PySpark SQL, FindSpark, and MLlib, the system effectively ingests, processes, and analyzes user listening data to identify their preferences and generate tailored recommendations.Users will find new artists and songs that suit their musical interests due to the system's evaluation of their listening history and personal recommendations.",
            technologies: ["Apache Spark"," PySpark"," SQL", "MLLIB","Python","Big Data","PySpark","Data Visualization"],
            repo: "https://github.com/mansi2804/CSP554-BiGDATATECHNOLOGY_MANSIPATIL_FINALPROJECT",
        },
        {
            heading: "Portfolio",
            description: "A responsive and dynamic personal portfolio showcasing my skills, projects, and professional experience. This website highlights my expertise.It serves as a central hub where visitors can learn about my background, view my projects, and contact me for opportunities.Designed and developed the entire website layout, including responsive design for various devices.It's not only showcases my technical skills and projects but also reflects my creativity, problem-solving abilities, and attention to detail. It serves as a powerful tool for networking, job hunting, and building professional credibility in the web development and design community.",
            technologies: ["Javascript", "HTML5","CSS3","SCSS","UI/UX","Version Control"],
            repo: "https://github.com/mansi2804/Portfolio",
            link:"https://mansi-patil-portfolio.vercel.app/",
        },
        {
            heading: "eCommerce-Website",
            description: "I designed and developed a fully functional eCommerce website. The website provides a seamless shopping experience for customers, with features such as product listings, user accounts, shopping cart functionality, secure checkout, and order management. Key Features: Product Catalog, User Authentication, Shopping Cart and Responsive Design.The eCommerce website project demonstrates my ability to conceptualize, design, develop, and deploy scalable and functional web applications. It showcases my technical skills, problem-solving abilities, attention to detail, and understanding of eCommerce best practices",
            technologies: ["HTML5","CSS3","Javascript","UI/UX","Version control"],
            repo: "https://github.com/mansi2804/eCommerce-Website",
        }
        {
            heading: "To-do list",
            description: "A Todo List application crafted with React! This dynamic tool boasts a range of features designed to enhance productivity and organization. Users can effortlessly create, remove, and prioritize tasks, while also adding additional notes or descriptions for clarity. With a responsive design, it adapts seamlessly to any device, ensuring a consistent user experience. Leveraging the local storage API, the app restores previously added tasks upon revisiting and operates offline as a Progressive Web App (PWA), enabling users to stay on top of their tasks regardless of internet connectivity.",
            technologies: ["HTML5","CSS3","React.js","Progressive Web Applications","API","Javascript","UI/UX","Version control"],
            repo: "https://github.com/mansi2804/to-do-list",
        }
        {
            heading: "Sentiment Analysis",
            description: "Developed a web application for sentiment analysis, allowing users to analyze the sentiment of text input in real-time. Leveraging machine learning models, the tool accurately predicts whether the sentiment is positive or negative and provides visual representations for better understanding.Key Features: Sentiment Analysis: Utilizes machine learning models for accurate sentiment classification. Interactive Visualization: Presents sentiment analysis results through dynamic charts for easy interpretation. User-Friendly Interface: Designed with a clean and intuitive interface for seamless user experience.",
            technologies: ["HTML","CSS","React.js","Flask","python","Data Visualization","Machine Learning","Javascript","UI/UX","Version control"],
            repo: "https://github.com/mansi2804/Sentiment_Analysis-",
        }

    
    ]

    return (
        <section id="projects" className={styles.projects}>
            <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 justify-left overflow-hidden `}>
                <div className={`flex-[0.6] p-10 md:p-16 lg:p-20 rounded-2xl`}>
                    <p className={`main_color`}>
                        My Work
                    </p>
                    <h2 className={`main_color`}>
                        Projects
                    </h2>
                    <div className={`text-lg`}>
                        Following are some projects and Websites i worked on that showcases my skills I gained throughout my Education and Professional experience.
                        It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
                    </div>
                </div>
            </div>
            <div className={` p-10 md:p-16 lg:p-20 md:pt-0 lg:pt-0 pt-0 `+styles.projects_container}>
                {ProjectsData.map((project, index) => {
                    return (
                        <Cards data={project} index={index} key={index} />
                    )
                })
                }
            </div>
        </section>
    )
}

export default Projects;
