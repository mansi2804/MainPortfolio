import React from 'react'
import styles from "./cards.module.scss";
import { motion } from "framer-motion";
const Cards = ({ data, index }) => {
    return (
        <motion.div
            className={styles.card}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 0.8,
                delay: index + 1 !== 1 ? (index + 1) / 10 : 0,
                type: "spring",
                stiffness: 80,
                damping: 15
            }}
        >
            <div className={styles.card_header}>
                <h4>
                    {data.heading}
                </h4>
            </div>
            <div className={styles.card__content}>
                <div className={styles.card__description}>
                    {data.description}
                    {/* Using dataset from Kaggle, performed various data preparation techniques and Feature Engineering techniques. */}
                    {/* In addition performed Feature Engineering techniques like Random Feature Elimination and Boruta Algorithm, to capture all the important features within the dataset. */}
                </div>
                <div className={styles.card__footer}>
                    <ul className={styles.card__skills}>
                        {data.technologies.map((skill, index) => {
                            return (
                                <li key={index}>{skill}</li>
                            )
                        })}
                    </ul>
                    {/* <p>Link: <a href=''>Credit Card Fraud Detection</a></p> */}
                    {data.repo &&
                        <a
                            href={data.repo}
                            target="_blank"
                            className={`tags tags__repo`}
                            rel="noreferrer"
                        >
                            Repository
                        </a>
                    }
                    {data.link &&
                        <a
                            href={data.link}
                            target="_blank"
                            className={`tags tags__site`}
                            rel="noreferrer"
                        >
                            Website
                        </a>
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default Cards