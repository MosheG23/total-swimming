import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import styles from '../styles.module.css'

import { teamData } from './TeamData'


const WhoAreWe = () => {
    const teamCards = () => {
        return (
            teamData.map((item, index) => {
                return (
                    <Col key={index} xs="12" md="6">
                        <img src={item.image} className={styles.whoarewe__img} alt={index} />
                    </Col>
                )
            })
        )
    }
    return (
        <Container>
            <Row className="justify-content-center">
                <h4>מי אנחנו?</h4>
            </Row>
            <Row className="justify-content-center">
                {teamCards()}
            </Row>
        </Container>
    )
}

export default WhoAreWe
