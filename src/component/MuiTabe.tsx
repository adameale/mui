import React from 'react'
import {TableContainer,Table,
TableHead,TableRow,
TableCell,
Paper,
TableBody}  from '@mui/material'
const MuiTabe = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight:'300px'}}>
      <Table aria-label='simple table' stickyHeader >
        <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>First name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell align='center'>Email</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {tableData.map((row)=>(
                    <TableRow 
                    key={row.id}
                    sx={{'&:last-child td,&:last-child td':{border:0}}} 
                    >
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.first_name}</TableCell>
                    <TableCell>{row.last_name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                </TableRow>

               ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MuiTabe

const tableData= [{
    "id": 1,
    "first_name": "Olympia",
    "last_name": "Danilovitch",
    "email": "odanilovitch0@nih.gov",
    "gender": "Female",
    "ip_address": "204.96.205.186"
  }, {
    "id": 2,
    "first_name": "Fergus",
    "last_name": "Utterson",
    "email": "futterson1@huffingtonpost.com",
    "gender": "Male",
    "ip_address": "183.248.80.49"
  }, {
    "id": 3,
    "first_name": "Caleb",
    "last_name": "Matous",
    "email": "cmatous2@digg.com",
    "gender": "Male",
    "ip_address": "222.205.182.107"
  }, {
    "id": 4,
    "first_name": "Kermy",
    "last_name": "Berfoot",
    "email": "kberfoot3@bluehost.com",
    "gender": "Male",
    "ip_address": "136.82.189.51"
  }, {
    "id": 5,
    "first_name": "Dannye",
    "last_name": "Thain",
    "email": "dthain4@delicious.com",
    "gender": "Female",
    "ip_address": "132.38.245.234"
  }, {
    "id": 6,
    "first_name": "Ina",
    "last_name": "Humbatch",
    "email": "ihumbatch5@vistaprint.com",
    "gender": "Polygender",
    "ip_address": "59.159.215.70"
  }, {
    "id": 7,
    "first_name": "Renault",
    "last_name": "Sheraton",
    "email": "rsheraton6@so-net.ne.jp",
    "gender": "Male",
    "ip_address": "253.176.143.17"
  }, {
    "id": 8,
    "first_name": "Kaitlin",
    "last_name": "Lacotte",
    "email": "klacotte7@archive.org",
    "gender": "Female",
    "ip_address": "63.120.89.91"
  }, {
    "id": 9,
    "first_name": "Stevie",
    "last_name": "Sessions",
    "email": "ssessions8@amazon.com",
    "gender": "Male",
    "ip_address": "49.110.124.64"
  }, {
    "id": 10,
    "first_name": "Nicol",
    "last_name": "Olyfant",
    "email": "nolyfant9@weather.com",
    "gender": "Male",
    "ip_address": "207.86.233.88"
  }]
  
