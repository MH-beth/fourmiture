import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Reports from '../services/Reports';
import { useCookies } from 'react-cookie';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein, statue) {
  return { name, calories, fat, carbs, protein, statue };
}


export default function ReportHistory() {
  const classes = useStyles();
  const rows = [];
  const [reports , setReports] = React.useState([]);
  const [statue , setStatue] = React.useState("");
  const [cookies , setCookies] = useCookies(['user']);
  React.useEffect(() => {
      Reports.seeAllReports(cookies.username , setReports , setStatue);
  } , [cookies])
  console.log(reports);
  reports.map(report => rows.push(createData(report.link , report.username , report.reason , report.reported_id , report.creation, report.statue)));
  if(reports !==undefined && reports.length !== 0){
    return (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id du Signalement</TableCell>
                <TableCell align="right">Votre Nom D'utilisateur</TableCell>
                <TableCell align="right">Raison</TableCell>
                <TableCell align="right">Id Reporté</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align = "right">Statue</TableCell>
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
                  <TableCell align = "right">{row.statue}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
  }else{
      return(
          <div>
            <p>{statue}</p>
            <Button variant ="contained" color = "primary" onClick = {() => window.location.href = "/"}>Retournez au marché</Button>
          </div>
      );
  }
}