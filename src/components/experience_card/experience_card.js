import React from 'react';
import styles from "./experience_card.module.scss"

import { motion } from "framer-motion";

const ExperienceCard = ({ experience, index }) => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 0.8,
                delay: index + 1 !== 1 ? (index + 1) / 10 : 0,
                type: "spring",
                stiffness: 80,
                damping: 15
            }}
            className={` text-left `+styles.experience_card}>
            <h4 className={` text-[1.2rem] lg:text-[1.4rem]`}>
                {experience.heading}
            </h4>
            <section>
                <h5 className={`pb-2 text-[0.8rem] md:text-[1rem]`}>{experience.location}</h5>
                <div className={`xl:mt-5 flex xl:flex-row flex-col-reverse gap-5 ` + styles.experience_card__description}>
                    <ul className={`flex-[1] rounded-2xl text-left lg:text-justify list-disc ` + styles.experience_card_list}>
                        {experience.summary.map((item, index) => {
                            return (
                                <li key={index}>{item}</li>
                            )
                        })}
                    </ul>
                </div>
            </section>
        </motion.section>
    )
}

export default ExperienceCard