import React from 'react'
import Collapse from '@material-ui/core/Collapse';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const RegisterRec = () => {
    const [open , setOpen] = React.useState(true);
    return (
        <div>
        <Collapse in={open}>
        <Alert
            severity="warning"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Vous n'êtes pas connecter ! Veuillez vous <a href = "/login">Connecter</a> ou vous <a href = "/register">inscrire</a>
        </Alert>
      </Collapse>
        </div>
    )
}

export default RegisterRec
