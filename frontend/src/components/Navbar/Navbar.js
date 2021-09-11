import React from 'react'
import "./Navbar.css";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import Button from "@material-ui/core/Button"
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import HomeIcon from '@material-ui/icons/Home';

const Navbar = () => {
  return (
    <div>
        <header>
            <nav>
                <label className="logo"><LocalGroceryStoreIcon  />Fourmitures</label>
                <ul className='pasi'>
                    <li><a className='active' href='/'><HomeIcon/> Home</a></li>
                    <li><a href='/register'>Register</a></li>
                    <li><a href='/login'>Login</a></li>
                </ul>
            </nav>
        </header>
        <div className = "phone">
          <h1>Menu de Navigation</h1>
          <Button variant="contained" color="primary" href = "/"  >Home</Button>
          <Button variant="contained" color="primary"href = "/register">Register</Button>
          <Button variant="contained" color="primary" href = "/Login" >Login</Button>
        </div>
    </div>
  )
}

export default Navbar