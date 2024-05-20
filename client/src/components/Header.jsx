import '../components/styles/Header.css'
import {navItems} from "../constants/navItems.js";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Header = () => {
    return (
        <>
            <header className='header'>
                <div className='nav'>
                    <h1>
                        🍕
                    </h1>
                    <nav>
                        {navItems.map((navItem,index) =>{
                            return (
                                <Link key={index} to={'/'}>{navItem.name}</Link>
                            )
                        })}
                        <FontAwesomeIcon icon="fa-solid fa-angle-down"/>
                    </nav>
                </div>
                <div className='buttons'>
                    <button>Login</button>
                    <button>Sign Up</button>
                </div>
                <span>
                    <FontAwesomeIcon icon="fa-solid fa-bars" />
                </span>
            </header>
        </>
    )
}