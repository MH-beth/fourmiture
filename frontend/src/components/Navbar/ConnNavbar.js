import React from 'react'
import "./Navbarc.css";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import Button from "@material-ui/core/Button"
import SMenu from "./SMenu";
import { useCookies } from 'react-cookie';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import {CLIENT} from "../../constants";

const ConnNavbar = () => {
    const [cookies , setCookies] = useCookies(['user']);
    const profile = `${CLIENT}/username/${cookies.link}`;
  return (
    <div>
        <header>
            <nav>
                <label className="logo"><LocalGroceryStoreIcon  />  Fourmiture</label>
                <ul className='pasi'>
                    <li><a className='active' href='/'>Home</a></li>
                    <li><a href='/addPost'>Faire Une Annonce</a></li>
                    <li><a href = {profile}>Profile</a></li>
                    <li className = "acc"><SMenu/></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default ConnNavbar