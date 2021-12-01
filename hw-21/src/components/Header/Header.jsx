import React from "react";
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.png"
import headerStyles from "./Header.module.css"

function Header() {
  return (
    <div className={headerStyles.navigation}>
      <Link className={ headerStyles.logo }to='/'><img src={logo} alt=""/></Link>
      <ul className={ headerStyles.list }>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/starwars'>Cards</Link></li>
        <li><Link to='/gallery'>Photo</Link></li>
        <li><Link to='/contacts'>Contacts</Link></li>
      </ul>
    </div>
    
  )
}

export default Header;