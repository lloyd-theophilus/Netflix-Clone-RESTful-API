import './product.css'
import { productRows } from '../../userData'
import { DataGrid, GridColDef} from '@material-ui/data-grid'
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Productlist() {
    const [data, setData] = useState(productRows)
    
    const handleDelete = (id) =>{
        setData(data.filter((item)=> item.id !==id))
    }
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'product',
          headerName: 'Product',
          width: 150,
          editable: true, 
          renderCell: (params) => {
              return ( <dive className = 'productList'>
                   <img className = 'productListImg' src = {params.row.img} alt = ''/>
                     {params.row.name}
              </dive>  
              )
          }
        },
        {
          field: 'stock',
          headerName: 'Stock',
          width: 190,
          editable: true,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 150,
          editable: true,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 150,
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
               <Link to = {'/product/'+params.row.id}>
               <button className = 'productListEdith'>Edit</button>
               </Link>
                <DeleteOutline  className = 'productListDelete' onClick = {() => handleDelete(params.row.id)}/>
                </> 
                )
            }
        }
      ];
      
    return (
        <div className = 'productList'>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid rows={data} columns={columns} pageSize={5} checkboxSelection disableSelectionOnClick />
           </div>
        </div>
    )
}
