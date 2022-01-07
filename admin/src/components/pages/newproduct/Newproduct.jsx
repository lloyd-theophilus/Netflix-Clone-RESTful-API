import { useState } from 'react'
import './newproduct.css'
import storage from '../../firebase'
import { createMovie } from '../../context/movieContext/apiCalls'
import { useContext } from 'react'
import {MovieContext} from '../../context/movieContext/MovieContext'


export default function Newproduct() {
    const [movie, setMovie] = useState(null)
    const [img, setImg] = useState(null)
    const [imgTitle, setImgTitle] = useState(null)
    const [imgSm, setImgSm] = useState(null)
    const [trailer, setTrailer] = useState(null)
    const [video, setVideo] = useState(null)
    //Firebase application
    const [uploaded, setUploaded] = useState(0)
    const {dispatch} = useContext(MovieContext)


    const handleChange = (e) => {
        const value = (e).target.value
        setMovie ({...movie, [e.target.name] : value})
    }

    //Firebase file upload function
    const upload = (items) =>{
        items.forEach(item => {
            //changing the file name
            const fileName = new Date().getTime() + item.label + item.file.name            
            const uploadTask = storage.ref(`/items/${fileName}`).put(item.file)
            //Here we want to see the person who uploaded the task
            uploadTask.on('state_changed', $snapshot =>{
                const progress = ($snapshot.bytesTransferred / $snapshot.totalBytes) * 100
                console.log('Upload is' + progress + ' % done.')
            },
            (error) => console.log(error)
            ),
            () =>{
                uploadTask.$snapshot.ref.getDownloadURL().then((url) => {
                    setMovie((prev) => {
                        return{...prev, [item.label]  : url}
                    })
                    //Increasing the upload number
                    setUploaded(prev => prev + 1)
                })
            }
        })
    }


    const handleUpload = (e) => {
        e.preventDefault()
        upload([
            {file: img, label: 'img'},
            {file: imgTitle, label: 'imgTitle'},
            {file: imgSm, label: 'imgSm'},
            {file: trailer, label: 'trailer'},
            {file: video, label: 'video'},
        ])
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        createMovie(movie, dispatch)
    }

    return (
        <div className='newProduct '>
            <h1 className="addProductTitl">New Movie</h1>
            <form className='addProductform'>
                <div className="addProductItem">
                    <label>Image</label>
                    <input
                     type="file" 
                    id='file' name='img'
                    onChange={e => setImg(e.target.files[0])} />
                </div>
            
                <div className="addProductItem">
                    <label>Title image</label>
                    <input
                     type="file" 
                    id='imgTitle' 
                    name='imgTitle' 
                     onChange={e => setImgTitle(e.target.files[0])} />
                </div>

                <div className="addProductItem">
                    <label>Thumnail image</label>
                    <input 
                    type="file" 
                    id='imgSm' 
                    name='imgSm' 
                    onChange={e => setImgSm(e.target.files[0])} />
                    
                </div>

                <div className="addProductItem">
                    <label>Title</label>
                    <input type="text" placeholder='Jon Wick' name='title' onChange={handleChange}/>
                </div>

                <div className="addProductItem">
                    <label>Description</label>
                    <input type="text" placeholder='description'name='description' onChange={handleChange} />
                </div>

                <div className="addProductItem">
                    <label>Year</label>
                    <input type="text" placeholder='year' name='year'  onChange={handleChange}/>
                </div>

                <div className="addProductItem">
                    <label>Genre</label>
                    <input type="text" placeholder='genre'name='genre'  onChange={handleChange}/>
                </div>

                <div className="addProductItem">
                    <label>Duration</label>
                    <input type="text" placeholder='duration' name='duration' onChange={handleChange} />
                </div>

                <div className="addProductItem">
                    <label>Limit</label>
                    <input type="text" placeholder='limit' name='limit'/>
                </div>

                <div className="addProductItem">
                <label>isSeries?</label>
                    <select name="active" id="isSeries"  onChange={handleChange}>  
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                    </select>
                </div>

                <div className="addProductItem">
                    <label>Trailer</label>
                    <input 
                    type="file" 
                    name='trailer' 
                    onChange={e => setTrailer(e.target.files[0])} />/>
                </div>

                <div className="addProductItem">
                    <label>Video</label>
                    <input 
                    type="file" 
                    name='video'  
                    onChange={e => setVideo(e.target.files[0])} /> />
                </div>
               {uploaded === 5 ?(
                <button className="addProductButton" onClick={handleSubmit}>Create</button>
               ) :(
                <button className="addProductButton" onClick={handleUpload}>Upload</button>
               )}
            </form>
    </div>
    )
}

                     