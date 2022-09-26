import React, { useContext, useEffect, useState } from 'react';
import "./style/MovieList.css";
import { DataGrid } from '@mui/x-data-grid';
import {Edit, Delete, Dangerous} from "@mui/icons-material";
import { Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import { MovieContext } from '../context/MovieContext';
import { deleteMoviesCallById, getMoviesCall } from '../context/api/ApiCalls';

const UserList = () => {
  const [id, setId] = useState(null)
  const [open, setOpen] = React.useState(false);

  const {movies, dispatch} = useContext(MovieContext)

  

  useEffect(()=>{
    getMoviesCall(dispatch)
  },[dispatch])


  const handleAlert = (id) =>{
    setOpen(true);
    setId(id)
  }
  const handleDelete = () =>{
    deleteMoviesCallById(id, dispatch)
    setOpen(false);
  }
  
    const columns = [
        { field: '_id', headerName: 'ID', width: 80 },
        { field: 'name', headerName: 'Movie Name', width: 250,
        renderCell: (params)=>{
            return(
                <div className='userContainer'>
                    <img src={params.row.image} alt="avater" />
                    <span>{params.row.name}</span>
                </div>
            )
        }
      },
        { field: 'genre', headerName: 'Genre', width: 120},
        { field: 'year', headerName: 'Year', width: 150},
        { field: 'ageLimit', headerName: 'Age Limit', width: 80},
        { field: 'isSeries', headerName: 'isSeries', width: 80},
        { field: 'action', headerName: 'Action', width: 150,
        renderCell: (params)=>{
          return(
              <div className='buttonContainer'>
                  <Link to={'/movie/'+ params.row._id} state={{movieId:params.row._id, movie: params.row}}>
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
        <h3>Movies</h3>
        <Link to="/movie/create">
          <button>Add Movie</button>
        </Link>
        </div>
        <div style={{ height: 550, width: '100%' }}>
            <DataGrid
                rows={movies}
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

export default UserList;
