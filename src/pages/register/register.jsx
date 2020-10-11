import React, {useState} from 'react'
import './register.css'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

import firebase from '../../config/firebase'

const Register = () => {
    const { register, handleSubmit, errors } = useForm();

    const registerClick = (value, e) => {
        console.log(value)
        const email = value.email
        const password = value.password
        firebase.auth().createUserWithEmailAndPassword(email, password).then((respone) => {
            alert('Berhasil Register')
        }).catch((error) => {
            alert(error.message)
          })

        e.target.reset()
    }

    return (
        <div className="main-cont-register">
            <div className="card-cont-register">
                <div className="container">
                    <h2 className="title-register">Register</h2>
                    <div className="input-cont">
                        <form onSubmit={handleSubmit(registerClick)}>
                            <input type="text" name="userName" id="name" className="form" placeholder="Username" ref={register({ required: true })} />
                            {errors.userName && <span className="required-message">This field is required</span>}
                            <input type="email" name="email" id="email" className="form" placeholder='email' ref={register({ required: true })} />
                            {errors.email && <span className="required-message">This field is required</span>}
                            <br/>
                            <input type="password" name="password" id="password" className="form form2" placeholder="password"  ref={register({ required: true })}/>
                            {errors.password && <span className="required-message">This field is required</span>}
                            <br/>
                             <button className="btn btn-success btn-block" type="submit">REGISTER</button>
                        </form>
                    </div>
                    <div className="button-cont">
                        <br/>
                        <Link className="back fas fa-sign-in-alt fa-2x" to="/login"></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register