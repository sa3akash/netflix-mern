import React, { useContext } from 'react';
import { useState } from 'react';
import "./style/CreateMovie.css";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage"
import storage from '../firebase';
import { createMovie } from '../context/api/ApiCalls';
import {MovieContext} from "../context/MovieContext";
import {useNavigate} from "react-router-dom"


const CreateMovie = () => {

  const [movie, setMovie] = useState(null)
  const [thumbnail, setThumbnail] = useState(null)
  const [trailerVideo, setTrilerVideo] = useState(null)
  const [originalVideo, setOrginalVideo] = useState(null)

  const [uploaded, setUploaded] = useState(0)

  const navigate= useNavigate()

  const {isFetching,dispatch} = useContext(MovieContext)


  // handleChangeInput
  const handleChangeInput = (e) => {
    setMovie(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  /// upload function 

  const upload = (items) => {

    // loop 4 file for upload firebase storage
    items.forEach(item=>{
      // ganarate name for file
      const fileName = new Date().getTime() +"-"+ item.label +"-"+ item.file.name;
      
     const storageRef = ref(storage, `/files/${fileName}`)
     const uploadTask = uploadBytesResumable(storageRef, item.file)

     // file upload task start
     uploadTask.on('state_changed', (snapshot) => {
          const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          console.log("Upload progress " + percent + "% done");

     },(err)=>{console.log(err)}, () => {
      // file url console.log
      getDownloadURL(uploadTask.snapshot.ref).then(url=>{
        // set file url to state
        setMovie(prev=>({...prev, [item.label]: url}))
      })
      // increment set upload file
      setUploaded(prev=> prev + 1)
     });
     
     // file upload task end
    })
    // lop function end
  }

  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      {file: thumbnail, label: "image"},
      {file: trailerVideo, label: "trailer"},
      {file: originalVideo, label: "video"},
    ])

  }

// submit movie in db
  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(movie, dispatch)
    navigate("/movies")
  }


  return (
    <div className='createMovie'>
      <h1 className="addProductTitle">Add New Movie</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Thumbnail Image</label>
          <input type="file" id="img" name="image" onChange={(e)=>setThumbnail(e.target.files[0])}/>
        </div>
        <div className="addProductItem">
          <label>Trailer</label>
          <input type="file" id="trailer" name="trailer" onChange={(e)=>setTrilerVideo(e.target.files[0])}/>
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input type="file" id="video" name="video" onChange={(e)=>setOrginalVideo(e.target.files[0])}/>
        </div>
        <div className="addProductItem">
          <label>Movie Name</label>
          <input type="text" placeholder="Love Story" name="name" onChange={handleChangeInput}/>
        </div>
        <div className="addProductItem">
          <label>Movie Description</label>
          <textarea placeholder="Description" name="desc" onChange={handleChangeInput}/>
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input type="text" placeholder="2022" name="year" onChange={handleChangeInput}/>
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <select name="genre" id="genre" onChange={handleChangeInput}>
              <option>Genre</option>
              <option value="action">Action</option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="fantasy">Fantasy</option>
              <option value="historical">Historical</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-fi</option>
              <option value="thriller">Thriller</option>
              <option value="western">Western</option>
              <option value="animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="documentary">Documentary</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Age Limit</label>
          <input type="text" placeholder="18" name="ageLimit" onChange={handleChangeInput}/>
        </div>
        <div className="addProductItem">
          <label>Duration</label>
          <input type="text" placeholder="140minits" name="duration" onChange={handleChangeInput}/>
        </div>
        
        <div className="addProductItem">
          <label>Is Series?</label>
          <select name="isSeries" id="isSeries" onChange={handleChangeInput}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        {
          uploaded === 3 ? (
            <button className="addProductButton create" onClick={handleSubmit} disabled={isFetching}>Create</button>
          ) : (
            <button className="addProductButton" onClick={handleUpload} disabled={uploaded!==0}>Upload</button>
          )
        }
       
      </form>
    </div>
  )
}

export default CreateMovie