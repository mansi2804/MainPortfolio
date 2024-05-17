import React from 'react'
import styles from "./technologies.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faHtml5,
    faCss3,
    faJs,
    faJava,
    faReact,
    faNode,
    faSass,
    faPython,
    faAngular,
    faAws,
 } from '@fortawesome/free-brands-svg-icons'


const Technologies = () => {
    const techIcons = [
        {
            icon:faHtml5,
            name:"HTML5"
        },{
            icon:faCss3,
            name:"CSS3"
        },{
            icon:faJs,
            name:"Javascript"
        },{
            icon:faReact,
            name:"ReactJS"
        },{
            icon:faAngular,
            name:"Angular"
        },{
            icon:faJava,
            name:"Java"
        },{
            icon:faNode,
            name:"NodeJS"
        },{
            icon:faSass,
            name:"SASS"
        },{
            icon:faPython,
            name:"Python"
        },{
            icon:faAws,
            name:"AWS"
        }
    ]
  return (
    <section className={`p-5 md:p-16 lg:p-20 `+ styles.technologies}>
        
        {techIcons.map((item,index)=>{
            return(
                <div className={styles.technologies_icon} key={index}>
                    <FontAwesomeIcon icon={item.icon}  />
                    <p>{item.name}</p>
                </div>
            )
        })}
    </section>
  )
}

export default Technologies