import React from 'react'
import "./Login.css"

function Login() {
    return (
        <div className="login__container">
            <div className="login__left">
                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="fb-logo" />
                <h1 className="login__h1">Connect with friends and the world <br /> around you on Facebook.</h1>

            </div>
            <div className="login__right">
                <div className="login__form__container">


                    <form action="" className="login__form">
                        <input type="text" placeholder="Email or phone number" />
                        <input type="password" placeholder="Password"/>
                        <button className="login__btns log__in" type="submit">Log In</button>
                        <center>

                        <a className="forget__pw" href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0">Forget password?</a>
                        </center>
                        <br />
                        <hr />
                        
                        <center>
                        <button className="login__btns new__account" type="submit" >Create new account</button></center>
                    </form>
                </div>
                <center>
                <div className="create__page">
                    <a href="https://www.facebook.com/pages/create/?ref_type=registration_form">Create a Page <span></span></a> &nbsp;
                 for a celebrity, brand or business.
                </div>
                </center>

            </div>
                
            
               
        </div>
    )
}

export default Login
