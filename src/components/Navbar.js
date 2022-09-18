import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    const onChange = (e) => {
        props.setSearch(e.target.value)
    }
    return (
        <>
            <div className='mb-5'>
                <nav className=" navbar  fixed-top navbar-dark navbar-expand-lg bg-dark py-2 px-">
                    <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <Link to="/"><button className="btn btn-outline-success mx-2 mt-1"  >Home</button></Link>
                                <Link to="/watchlist"><button className="btn btn-outline-success mx-2 my-1" type="submit">Watchlist</button></Link>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle active" href='/fi' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Filter
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/action">Action</Link></li>
                                        <li><Link className="dropdown-item" to="/adventure">Adventure</Link></li>
                                        <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                                        <li><Link className="dropdown-item" to="/comedy">Comedy</Link></li>
                                        <li><Link className="dropdown-item" to="/drama">Drama</Link></li>
                                        <li><Link className="dropdown-item" to="/avant">Avant Garde</Link></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <Link to='/search'> <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={props.search} onChange={onChange} /></Link>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

