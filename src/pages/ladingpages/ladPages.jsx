import React from 'react'
import {Link} from 'react-router-dom'

const LadPages = () => {
    return (
        <div>
            <h1>Landing Pages</h1>
            <Link className="btn btn-outline-primary" to="/login">Login</Link>
        </div>
    )
}

export default LadPages