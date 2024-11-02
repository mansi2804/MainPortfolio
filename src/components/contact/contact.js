import React, { useRef, useState, useEffect } from 'react'
import styles from "./contact.module.scss"
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

import FileDownloadIcon from '@mui/icons-material/FileDownload';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import MyPhoto from "../../assets/My_profile.png"
import Resume from "../../assets/MANSI_PATIL_Resume.pdf"
const Contact = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(false);
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [open]);


    const form = useRef();

    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        let temp_errors = errors;
        delete temp_errors[name];
        setErrors(temp_errors)
        console.log(temp_errors)
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (formData.user_name.trim() === '') {
            newErrors.user_name = 'Name is required';
        }
        if (formData.message.trim() === '') {
            newErrors.message = 'Message is required';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.user_email.trim()) {
            newErrors.user_email = 'Email is required';
        } else if (!emailRegex.test(formData.user_email)) {
            newErrors.user_email = 'Invalid email address';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Returns true if no errors
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if(validateForm()){
            emailjs.sendForm('service_8v17lfo', 'template_1lkwoiy', form.current, 'SuwlDd4xMtmwZq1rH')
            .then((result) => {
                setOpen(true);
                setFormData(
                    {
                        user_name: '',
                        user_email: '',
                        message: ''   
                    }
                )
            }, (error) => {
                console.log(error.text);
            });
        }
    };
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 0.8,
                delay: 1 / 10,
                type: "spring",
                stiffness: 80,
                damping: 15
            }}
            className={styles.contact}
            id="contact"
        >
            <div className={`xl:mt-12 flex lg:flex-row  flex-col-reverse gap-10 overflow-hidden justify-around p-10 lg:p-16`}>
                <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={() => setOpen(false)}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                    <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
                        Email sent successfully!
                    </Alert>
                </Snackbar>
                <div className={`flex-[0.4] bg-black-100 p-0 lg:p-8 rounded-2xl ` + styles.contact_body + ` ` + styles.contact_body_right} style={{ transform: 'translateX(0%) translateY(0px) translateZ(0px)' }}>
                    <div className={styles.profile_card}>
                        <div className={styles.profile_card__image}>
                            <img src={MyPhoto} alt=""></img>
                        </div>
                        <div className={` mt-5 mb-5 justify-between lg:justify-evenly ` + styles.profile_card__connect}>
                            <div>
                                <h4>
                                    Mansi Patil
                                </h4>
 
                                <h4>
                                    patil.mansi.narendra@gmail.com
                                </h4>
                            </div>
                            <div>
                                <h4>
                                    Connect with me.
                                </h4>
                                <ul>
                                    <li>
                                        <a href="https://www.linkedin.com/in/mansi-patil28/" rel="noreferrer" target="_blank"><LinkedInIcon /></a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/mansi2804" rel="noreferrer" target="_blank"><GitHubIcon /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`text-center w-[100%]`}>
                            <a className={`icon_link inline-block`} href={Resume} rel="noreferrer" target="_blank"> Download my resume from here <FileDownloadIcon /></a>
                            <span className='block'>Liked what you see?</span>
                            <a className={`icon_link inline-block`} href="https://github.com/mansi2804" rel="noreferrer" target="_blank">  Check out the code here: <InsertLinkIcon /></a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact;
