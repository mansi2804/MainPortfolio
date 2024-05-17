import React, { useState, useEffect } from 'react';
import styles from "./sticky_header.module.scss";

import useScrollToView from '../../utils/hooks/useScrollToView';

import HomeIcon from '@mui/icons-material/Home';
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import ContactsIcon from '@mui/icons-material/Contacts';

const StickyElement = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToHome = useScrollToView('introduction')
    const scrollToExperience = useScrollToView('experience')
    const scrollToProjects = useScrollToView('projects')
    const scrollToContacts = useScrollToView('contact')

    useEffect(() => {
        const handleScroll = () => {
            const firstFoldHeight = window.innerHeight;
            const currentScroll = window.scrollY;
            console.log('scrolled');
            if (currentScroll >= firstFoldHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`${styles.sticky_header} hidden sm:block`}>
            <div className={isVisible ? ' text-[white] visible fixed top-[25%] right-0 ' : ' text-[white] invisible fixed top-0 right-0 '}>
                <ul className={` px-2 py-2 bg-secondaryColor rounded-lg`}>
                    <li className={` `}>
                        <button ref={scrollToHome} className={`text-[white] py-1 hover:text-primaryColor hover:border-b-2 border-primaryColor`}>
                            <HomeIcon style={{fontSize:'2rem'}} />
                        </button>
                    </li>
                    <li className={` py-1`}>
                        <button ref={scrollToExperience} className={`text-[white] py-1 hover:text-primaryColor hover:border-b-2 border-primaryColor`}>
                            <ViewTimelineIcon style={{fontSize:'2rem'}}/>
                        </button>
                    </li>
                    <li className={` py-1`}>
                        <button ref={scrollToProjects} className={`text-[white] py-1 hover:text-primaryColor hover:border-b-2 border-primaryColor`}>
                            <WorkHistoryIcon style={{fontSize:'2rem'}}/>
                        </button>
                    </li>
                    <li className={` py-1`}>
                        <button ref={scrollToContacts} className={`text-[white] py-1 hover:text-primaryColor hover:border-b-2 border-primaryColor`}>
                            <ContactsIcon style={{fontSize:'2rem'}}/>
                        </button>
                    </li>
                </ul>
            </div>
        </header>

    );
};

export default StickyElement;
