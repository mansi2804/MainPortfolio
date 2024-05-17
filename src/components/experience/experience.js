import React from 'react'
import styles from "./experience.module.scss"
import useMediaQuery from '@mui/material/useMediaQuery';

import GraduationIcon from "@material-ui/icons/School";
import WorkIcon from '@mui/icons-material/WorkOutline';

import {
    TimelineConnector,
    TimelineContent,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator,
    Timeline,
    timelineContentClasses
} from "@mui/lab";
import ExperienceCard from '../experience_card/experience_card';


const Experience = () => {
    const matches = useMediaQuery('(min-width:600px)');
    const experienceData = [
        {
            timeline:"2023 - 2025",
            type:"School",
            heading:"Masters in Computer Science",
            location:"Illinois Institute of Technology, Chicago",
            summary:[
                "In pursuit of a Master of Computer Science at the Illinois Institute of Technology, I have engaged in a comprehensive curriculum covering key areas of computer science.", 
                "From delving into big data technologies and the science of programming to exploring machine learning and computer networks, I've developed a robust understanding of essential concepts and methodologies.",
                "Additionally, coursework in information security and software project management has equipped me with practical skills vital for addressing contemporary challenges in the field.", 
                "With a solid academic performance, I am poised to apply my knowledge and skills to real-world scenarios, contributing meaningfully to the advancement of technology and innovation."
  
            ]
        },{
            timeline:"2023 - 2023",
            type:"Work",
            heading:"Software Developer Intern",
            location:"Kirabiz, Pune, India",
            summary:[
                "Crafted end-to-end solutions for 'Mentor-Mentee' and 'Hi-Power' projects with user-friendly interfaces, advanced filtering, and custom designs, leading to a 30% rise in user satisfaction and 20% fewer errors, bolstering client retention.",
                "Led and contributed to multiple projects, showcasing adaptability, proficiency across tasks, and a versatile skill set.",
                "Integrated with cross-functional teams to design, devise, test, and maintain various software applications, ensuring high performance, 100% security, and scalability while adhering to best practices and industry standards."
            ]
        },{
            timeline:"2020 - 2023",
            type:"School",
            heading:"Bachelor of Engineering in Computer Engineering",
            location:"Universal College of engineering, Mumbai, India",
            summary:[
                "During my Bachelor of Engineering in Computer Engineering at Universal College of Engineering, Mumbai, India, I immersed myself in a rigorous curriculum aimed at building a strong foundation in computer science.",
                "My coursework encompassed key subjects such as data structures, object-oriented programming with Java, database management systems, and the analysis of algorithms.",
                "Additionally, I delved into Python programming, software engineering principles, computer networks, and artificial intelligence.",
                "This comprehensive education equipped me with a solid understanding of core concepts and methodologies in computer engineering, preparing me for a successful career in the dynamic and ever-evolving field of technology."

            ]
        },{
            timeline:"2019 - 2019",
            type:"Work",
            heading:"Web Development Intern ",
            location:"Nibodh, Mumbai, India",
            summary:[
                "Initiated and designed a centralized college website, optimizing admissions and payment processes for a 40% increase in online admissions and a 60% improve in payment processing efficiency.",
                "Also Improved Accessibility and Efficiency Showcased strong problem-solving, analytical, project management, engagement, and teamwork skills, contributing to a 20% increase in project efficiency.", 
                "Acknowledged for efficient time coordination, adaptability, and rapid learning.",
                "Implemented SEO strategies, resulting in a 25% increase in organic traffic, and ensured responsive design for cross-browser compatibility, enhancing user experience. And Applied Responsive Design, Elevating Website Accessibility Across Various Platforms."
            ]
        },{
            timeline:"2017 - 2020",
            type:"School",
            heading:" Diploma in Computer Engineering",
            location:"Thakur Polytechnic, Mumbai, India",
            summary:[
                "Through my Diploma in Computer Engineering at Thakur Polytechnic, Mumbai, India, I have acquired a diverse skill set encompassing various facets of computer science.",
                "The coursework included hands-on training in web-based application development using PHP, mobile application development, and programming with Python.",
                "Additionally, I gained expertise in network and information security, advanced database management systems, and advanced Java programming.",
                "Moreover, I honed my skills in software engineering principles, Java programming, and GUI application development using VB.net. ",
                "This comprehensive education has equipped me with the necessary tools to excel in the dynamic field of computer engineering and to contribute effectively to technological innovation."
           
            ]
        }
    ]
    return (
        <section id="experience" className={`p-5 md:p-16 lg:p-20 rounded-2xl `+styles.experience}>
            <p className={` px-5 md:px-0 main_color`}>
                What I have done so far
            </p>
            <h2 className={` px-5 md:px-0  main_color`}>
                Education and Experience.
            </h2>
            <Timeline position={matches ? 'alternate' : 'left'}>
                {experienceData.map((item,index)=>{
                    return(
                        <TimelineItem key={index} className={styles.timeline_item}
                            sx={matches?{
                                    [`& .${timelineContentClasses.root}:before`]: {
                                      flex: 0.2,
                                    },
                            }:{}}
                        >
                            {matches ? <TimelineOppositeContent
                            color="text.secondary">
                                <h6>
                                    {item.timeline}
                                </h6>
                            </TimelineOppositeContent>:
                            <></>}
                            
                            <TimelineSeparator>
                                <span className={styles.experience_icon}>
                                    {item.type === "School" ? <GraduationIcon /> : <WorkIcon />}
                                </span>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <ExperienceCard experience={item} index={index}/>
                            </TimelineContent>
                        </TimelineItem>
                    )
                })}
            </Timeline>
        </section>
    )
}

export default Experience