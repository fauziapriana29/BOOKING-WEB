import React from 'react'
import './register.css'
import {Link} from 'react-router-dom'

const Register = () => {
    return (
        <div className="main-cont-register">
            <div className="card-cont-register">
                <div className="container">
                    <h2 className="title-register">Register</h2>
                    <div className="input-cont">
                        <form>
                            <input type="text" name="name" id="name" className="form" placeholder="Username"/>
                            <input type="email" name="email" id="email" className="form" placeholder='email' />
                            <br/>
                            <input type="password" name="password" id="password" className="form form2" placeholder="password" />
                            <br/>
                        </form>
                    </div>
                    <div className="button-cont">
                        <button className="btn btn-success btn-block">REGISTER</button>
                        <br/>
                            <Link className="back" to="/login">back</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register