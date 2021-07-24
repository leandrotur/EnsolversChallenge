import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import ensolverslogo from '../../EnsolversLogo.png'

//frontend/todo-app/src/components/todo/HeaderComponent.jsx

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        //console.log(isUserLoggedIn);

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="shoe-container">
                        <a href="https://ensolvers.com/">
                          <img src={ensolverslogo} alt="some value" className="imageLink"  />
                        </a>
                </div>

                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/ensolversChallenge">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent