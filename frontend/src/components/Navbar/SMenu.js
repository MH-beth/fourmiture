import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Auth from "../../services/Auth"
import { Avatar } from '@material-ui/core';
import { useCookies } from 'react-cookie';

const options = [
    "Paramètre",
    "Historique d'Annonces",
    "Déconnection"
];

const ITEM_HEIGHT = 48;

export default function SMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [cookies , setCookies] = useCookies(['user'])
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Avatar
      src = {cookies.picture}
      alt = "error"
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </Avatar>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={() => {
              handleClose(); 
            if(option === "Paramètre") { window.location.href="/dashboard/options"}
            if(option === "Déconnection"){Auth.logout()}
            if(option === "Historique d'Annonces"){window.location.href="/postsHistory"}
          }}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}