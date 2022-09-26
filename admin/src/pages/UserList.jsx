import React, { useState } from 'react';
import "./style/UserList.css";
import { DataGrid } from '@mui/x-data-grid';
import {Edit, Delete, Dangerous} from "@mui/icons-material";
import { Link } from 'react-router-dom';
import {UserRows} from "../dummeyData";
import Dialog from '@mui/material/Dialog';

const UserList = () => {
  const [data, setData] = useState(UserRows)
  const [id, setId] = useState(null)
  const [open, setOpen] = React.useState(false);

  const handleAlert = (id) =>{
    setOpen(true);
    setId(id)
  }
  const handleDelete = () =>{
    setData(data.filter(item=>item.id!==id))
    setOpen(false);
  }
  
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'username', headerName: 'UserName', width: 230,
        renderCell: (params)=>{
            return(
                <div className='userContainer'>
                    <img src={params.row.avater} alt="avater" />
                    <span>{params.row.username}</span>
                </div>
            )
        }
      },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'status', headerName: 'Status', width: 90, },
        { field: 'transactions', headerName: 'Transactions', width: 160},
        { field: 'action', headerName: 'Action', width: 150,
        renderCell: (params)=>{
          return(
              <div className='buttonContainer'>
                  <Link to={'/users/'+ params.row.id}>
                  <button title='Edit' className='buttonEdit'><Edit/></button>
                  </Link>
                  <button title='Delete' className='buttonDelete'
                    onClick={()=>handleAlert(params.row.id)}>
                    <Delete/>
                  </button>
              </div>
          )
        }
        },
      ];


  return (
    <div className='userList'>
        <div className="userHeaderContainer">
        <h3>Users</h3>
        <Link to="/users/create">
          <button>Add User</button>
        </Link>
        </div>
        <div style={{ height: 550, width: '100%' }}>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[8]}
                checkboxSelection
                disableSelectionOnClick
            />
            <Dialog
            open={open}
            onClose={()=>setOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description" >
              <div className='alertContainer'>
                <div className='dangarusAlert'>
                  <div><Dangerous/> Be careful! </div>
                  <span>You can delete this User?</span>
                </div>
                <div className="buttonAlert">
                  <button onClick={()=>setOpen(false)}>No</button>
                  <button onClick={handleDelete} >Yes</button>
                </div>
              </div>
            </Dialog>
        </div>
    </div>
  )
}

export default UserList;
