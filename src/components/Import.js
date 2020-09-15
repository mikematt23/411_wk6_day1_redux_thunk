import React from 'react'
import {Button, Table, TableHead, TableBody, TableRow, TableCell, Container} from "@material-ui/core"
import { MoreVert } from '@material-ui/icons'
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const Import = (props) => {
    // fill out this component
  
    console.log(props)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

     const handleClose = () => {
       setAnchorEl(null);
     };
    return (
        <Container>
            <Button variant = "contained" color = "primary" onClick ={props.importMakes}>
                Import
            </Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.makes.map((make,idx)=>{
                        return (
                            <TableRow key = {make.MAkeId}>
                                <TableCell>{make.MakeId}</TableCell>
                                <TableCell>{make.MakeName}</TableCell>
                                <TableCell>
                                    <IconButton onClick ={handleClick}>
                                        <MoreVert/>
                                    </IconButton>
                                    <Menu
                                         id="fade-menu"
                                         anchorEl={anchorEl}
                                         keepMounted
                                         open={Boolean(anchorEl)}
                                     >
                                      <MenuItem onClick ={handleClose}><Button >Delete</Button></MenuItem>
                                    </Menu>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Import