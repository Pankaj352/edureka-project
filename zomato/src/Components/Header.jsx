import React from 'react'
import '../Styles/Header.css'
const  Header=()=> {
    return (
        <div className="header">
                <div className="s-logo">
                    <span>e!</span>
                </div>
                <div className="btn-group login-block">
                    <span className="login">LogIn</span>
                    <span className="signUp">Create an account</span>
                </div>
        </div>
    )
}

export default Header;