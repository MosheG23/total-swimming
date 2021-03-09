import React from 'react'

import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>Author: Moshe Gotam, Assgard Challenge</p>
            <p><a href="mailto:mgotam@gmail.com">mgotam@gmail.com</a></p>
        </footer>
    )
}

export default Footer
