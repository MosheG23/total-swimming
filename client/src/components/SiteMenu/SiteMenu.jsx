import React from 'react'

import { Navbar } from 'react-bootstrap'
import { FaSwimmingPool } from 'react-icons/fa'

const SiteMenu = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
          <Navbar.Brand>
            <FaSwimmingPool className="ml-3" />
            Total Swimming
          </Navbar.Brand>
        </Navbar>
    )
}

export default SiteMenu