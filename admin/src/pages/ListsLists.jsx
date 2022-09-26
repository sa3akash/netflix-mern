import React, { useContext, useEffect, useState } from 'react';
import "./style/Lists.css";
import { DataGrid } from '@mui/x-data-grid';
import {Edit, Delete, Dangerous} from "@mui/icons-material";
import { Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import { ListsContext } from '../context/ListContext';
import { deleteListsById, getAllLists } from '../context/api/ListApiCall';

const Lists = () => {
  const [id, setId] = useState(null)
  const [open, setOpen] = React.useState(false);

  const {lists, dispatch} = useContext(ListsContext)


  useEffect(()=>{
    getAllLists(dispatch)
  },[dispatch])


  const handleAlert = (id) =>{
    setOpen(true);
    setId(id)
  }
  const handleDelete = () =>{
    deleteListsById(id, dispatch)
    setOpen(false);
  }
  
    const columns = [
        { field: '_id', headerName: 'ID', width: 250 },
        { field: 'title', headerName: 'Title', width: 250},
        { field: 'type', headerName: 'Type', width: 150},
        { field: 'genre', headerName: 'Genre', width: 150},
        { field: 'action', headerName: 'Action', width: 150,
        renderCell: (params)=>{
          return(
              <div className='buttonContainer'>
                  <Link to={'/list/'+ params.row._id} state={{listId:params.row._id, list: params.row}}>
                  <button title='Edit' className='buttonEdit'><Edit/></button>
                  </Link>
                  <button title='Delete' className='buttonDelete'
                    onClick={()=>handleAlert(params.row._id)}>
                    <Delete/>
                  </button>
              </div>
          )
        }
        },
      ];


  return (
    <div className='movieList'>
        <div className="movieHeaderContainer">
        <h3>Lists</h3>
        <Link to="/list/create">
          <button>Add List</button>
        </Link>
        </div>
        <div style={{ height: 550, width: '100%' }}>
            <DataGrid
                rows={lists}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[8]}
                checkboxSelection
                disableSelectionOnClick
                getRowId={r=>r._id}
            />
            <Dialog
            open={open}
            onClose={()=>setOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description" >
              <div className='alertContainer'>
                <div className='dangarusAlert'>
                  <div><Dangerous/> Be careful! </div>
                  <span>You can delete this Movie?</span>
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

export default Lists;
