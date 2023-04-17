import React from "react";

//css
import "./Table.css";

// MUI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";



const makeStyles = (status)=>{
  if(status==='Approved'){
    return{
    background:'rgb(145,254,159)',
    color:'green',
    padding:'3px',
    borderRadius:'2px'
    }
  }
  else if(status==='Pending'){
    return{
    background:'#ffadad8f',
    color:'red',
    padding:'3px',
    borderRadius:'2px'


    }
  }
}


function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Nima Mohammadi", 15960240, "20 July 2022", "Approved"),
  createData("Dwayne Johnson", 32545345, "21 July 2022", "Pending"),
  createData("Vin Diesel", 54656764, "24 July 2022", "Approved"),
  createData("Tom Cruise", 89875126, "31 July 2022", "Pending"),
  createData("Johnny Depp", 35365765, "31 July 2022", "Approved"),
];

const BasicTable = () => {
  return (
    <div className="Table">
      <h2>Recent Orders</h2>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0 13px 20px 0 #00000029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="left">Tracking ID</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.trackingId}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyles(row.status)}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BasicTable;
