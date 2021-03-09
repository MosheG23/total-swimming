import React from 'react'
import { Button } from 'react-bootstrap'

import styles from "../styles.module.css"

const Splash = () => {
    return (
        <div className={styles.hero}>
            <h3>ברוכים הבאים לבית הספר לשחייה של יותם</h3>
            <Button variant="outline-light mt-2">הצטרפו אלינו!</Button>{' '}
        </div>
    )
}

export default Splash
