import React from 'react'
import { Spalsh, MoreInfo, WhoAreWe, WhatWeOffer } from './Sections'

import styles from './Sections/styles.module.css'
import { Container, Row, Col } from 'react-bootstrap'

const StartPage = () => {
    return (
        <div>
            <Spalsh />
            <MoreInfo />
            <Container className={styles.moreinfo}>
                <Row className="justify-content-center">
                    <Col xs="12" md lg xl="6">
                        <WhoAreWe />
                    </Col>
                    <Col xs="12" md lg xl="6">
                        <WhatWeOffer />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default StartPage
