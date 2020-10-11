import React from 'react' 
import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
    return (
        <div className="main-cont-login">
            <div className="card-cont-login">
                <div className="container">
                    <h2 className="title-login">Login</h2>
                    <div className="input-cont">
                        <form>
                            <input type="email" name="email" id="email" className="form-control" placeholder='email' />
                            <br/>
                            <input type="password" name="password" id="password" className="form-control form2" placeholder="password" />
                            <br/>
                        </form>
                    </div>
                    <div className="button-cont">
                        <button className="btn btn-success btn-block">LOGIN</button>
                        <br/>
                        <Link className="back" to="/">back</Link> &nbsp; &nbsp;
                        <Link className="toRegister fas fa-user-plus fa-2x" to="/register"></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login