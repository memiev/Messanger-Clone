import React from 'react';
import styles from './Navigation.module.css';



const Navigation = () =>{
    return(
    <nav className={styles.navigation}>
        <ul className={styles.navMenu}>
            <li className={styles.navItem}><a href="#">Rooms</a></li>
            <li className={styles.navItem}><a href="#">Features</a></li>
            <li className={styles.navItem}><a href="#">Privecy &amp; Safety</a></li>
            <li className={styles.navItem}><a href="#">For Developers</a></li>
        </ul>
    </nav>
    );
};


export default Navigation;