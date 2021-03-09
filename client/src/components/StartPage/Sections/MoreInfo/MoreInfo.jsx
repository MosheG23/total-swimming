import React from 'react'

import { CardGroup, Card } from 'react-bootstrap'
import styles from '../styles.module.css'

import CountUp from 'react-countup'

import { moreInfoData } from './MoreInfoData'

const MoreInfo = () => {
    const mapMoreInfoData = () => {
        return (
            moreInfoData.map((item, index) => {
                return (
                    <Card key={index} className={styles.moreinfo__card}>
                        <Card.Body>
                            <span className={styles.moreinfo__icon}>{item.icon}</span>
                            <hr className={styles.moreinfo__hr} />
                            <span className={styles.moreinfo__number}>
                                {item.suffix ? <CountUp end={item.number} duration={4} /> : <>{item.number}</> } {item.suffix}
                            </span>
                            <br />
                            {item.title}
                        </Card.Body>
                    </Card>
                )
            })
        )
    }
    return (
        <CardGroup className={styles.moreinfo__numbers}>
            {mapMoreInfoData()}
        </CardGroup>
    )
}

export default MoreInfo
