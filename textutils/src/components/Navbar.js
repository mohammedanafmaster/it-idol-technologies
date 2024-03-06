import React from 'react'
import PropTypes from 'prop-types'

function Navbar(content) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${content.mode} bg-${content.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{content.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{content.about}</a>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form> */}
                    <div className={`form-check form-switch text-${content.mode == 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" type="checkbox" role="switch" onClick={content.toggleMode} id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

// Prop types
Navbar.propTypes = {
    title: PropTypes.string.isRequired,  // It is used to mark it as required
    about: PropTypes.string
}

// Default props
Navbar.defaultProps = {
    title: 'Set title here',
    about: 'Set about text here'
}

export default Navbar