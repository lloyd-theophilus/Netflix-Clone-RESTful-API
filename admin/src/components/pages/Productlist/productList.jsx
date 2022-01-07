import './product.css'
import { productRows } from '../../userData'
import { DataGrid, GridColDef} from '@material-ui/data-grid'
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import MovieContext from '../../context/movieContext/MovieContext'
import {deleteMovie, getMovies} from '../../context/movieContext/apiCalls'

export default function Productlist() {
    const [movies, dispatch] = useContext(MovieContext)
    useEffect(()=>{
      getMovies(dispatch)
        
  }, [dispatch])

    const handleDelete = (id) =>{
        deleteMovie(id, dispatch)
    }
    const columns: GridColDef[] = [
        { field: '_id', headerName: 'ID', width: 90 },
        {
          field: 'movie',
          headerName: 'Movie',
          width: 150,
          editable: true, 
          renderCell: (params) => {
              return ( <dive className = 'productList'>
                   <img className = 'productListImg' src = {params.row.img} alt = ''/>
                     {params.row.title}
              </dive>  
              )
          }
        },
        {
          field: 'genre',
          headerName: 'Genre',
          width: 120,
          editable: true,
        },

        {
          field: 'year',
          headerName: 'Year',
          width: 120,
          editable: true,
        },
        
        {
          field: 'limit',
          headerName: 'Limit',
          width: 120,
          editable: true,
        },
        
        {
          field: 'isSeries',
          headerName: 'IsSeries',
          width: 120,
          editable: true,
        },
        
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            editable: true,
            renderCell: (params) => {
                return (
                <>
               <Link to = {{pathname:'/product/' + params.row._id, movie: params.row}}>
               <button className = 'productListEdith'>Edit</button>
               </Link>
                <DeleteOutline  className = 'productListDelete' onClick = {() => handleDelete(params.row._id)}/>
                </> 
                )
            }
        }
      ];
      
    return (
        <div className = 'productList'>
            <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={movies} 
            columns={columns} 
            pageSize={5} 
            checkboxSelection 
            disableSelectionOnClick
            getRowId={(r) => r._id}
             />
           </div>
        </div>
    )
}
