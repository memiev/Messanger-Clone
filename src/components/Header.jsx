import React from 'react';
import Navigation from './Navigation'
import styles from './Header.module.css';

const Header = () =>{
    return(
    <header className={styles.header} >
        <img className={styles.logo} src="/images/header-logo-image.png" alt="Header Logo " />
        <Navigation/>
    </header>
    );
};

export default Header;