import React from 'react'
import "./Login.module.css"

export const Login = () => {
    return (
        <div className="container">
        <h1>Hello</h1>
        <form className="form">
          <input className="form-input" type="text" placeholder="Username" />
          <input className="form-input" type="password" placeholder="Password" />
          <button className="form-button" type="submit">Login</button>
        </form>
      </div>
    )
}
