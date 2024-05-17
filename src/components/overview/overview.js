import React from 'react';
import Technologies from '../technologies/technologies';
import styles from "./overview.module.scss"

const Overview = () => {
    return (
        <section id="overview" className={` p-5 md:p-16 lg:p-20 ` +styles.overview}>
            <div className={` flex xl:flex-row flex-col-reverse gap-10 justify-left overflow-hidden `}>
                <div className={`flex-[0.6] p-5 rounded-2xl`}>
                    <p className={`main_color`}>
                        Introduction
                    </p>
                    <h2 className={`main_color`}>
                         Summary
                    </h2>
                    <div className={`text-lg`}>
                    As a software developer, I specialize in designing and creating software solutions to meet specific user needs.
                    My expertise includes coding, debugging, and testing applications to ensure they function smoothly.
                    I am skilled in various programming languages and frameworks, and 
                    I am committed to continuous learning to stay updated with the latest technologies and best practices in software development
                    </div>
                </div>
            </div>
            <Technologies />
        </section>
    )
}

export default Overview;