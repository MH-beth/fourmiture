import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Posts from '../services/Posts';
import { useCookies } from 'react-cookie';
import { Button } from '@material-ui/core';
import No from "./No";
import SettingsIcon from '@material-ui/icons/Settings';
import { CLIENT } from '../constants';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein, statue, date) {
  return { name, calories, fat, carbs, protein, statue, date};
}



export default function BasicTable() {
  const classes = useStyles();
  const [statue, setStatue] = React.useState("");
  const [posts , setPosts] = React.useState([]);
  const [cookies , setCookies] = useCookies(['user'])
  React.useEffect(() => {
    Posts.userPosts(cookies.username , setPosts , setStatue);
  }, [cookies])

  const rows = [];
  posts.map(post => rows.push(createData(post.link , post.title , post.school , post.class , post.price , post.statue, post.creation)))
  if(posts !== undefined && statue.length === 0 ){
    console.log(rows);
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Identifiant de l'annonce</TableCell>
              <TableCell align="right">Titre</TableCell>
              <TableCell align="right">Ecole</TableCell>
              <TableCell align="right">Classe</TableCell>
              <TableCell align="right">Prix</TableCell>
              <TableCell align="right">Statue</TableCell>
              <TableCell align = "right">Date</TableCell> 
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="right">{row.statue}</TableCell>
                <TableCell align = "right">{row.date}</TableCell>
                <TableCell align = "right"><Button onClick = {() => window.location.href = `${CLIENT}/params/${row.name}`} variant = "contained" color = "primary"><SettingsIcon/></Button></TableCell>
              </TableRow>
            ))}
            {(rows.length == 0) ? <No/> : null}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}