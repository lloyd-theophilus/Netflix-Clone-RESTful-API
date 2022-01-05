import './userlist.css'
import { userRows } from '../../userData'
import { DataGrid, GridColDef} from '@material-ui/data-grid'
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Userlist() {
    const [data, setData] = useState(userRows)
    
    const handleDelete = (id) =>{
        setData(data.filter((item)=> item.id !==id))
    }
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'user',
          headerName: 'User',
          width: 150,
          editable: true, 
          renderCell: (params) => {
              return ( <dive className = 'userlistImg'>
                   <img className = 'userListImg' src = {params.row.avatar} alt = ''/>
                     {params.row.username}
              </dive>  
              )
          }
        },
        {
          field: 'email',
          headerName: 'Email',
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
            field: 'transaction',
            headerName: 'Transaction',
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
               <Link to = {'/user/'+params.row.id}>
               <button className = 'userListEdith'>Edit</button>
               </Link>
                <DeleteOutline  className = 'userListDelete' onClick = {() => handleDelete(params.row.id)}/>
                </> 
                )
            }
        }
      ];
      
      
    return (
        <div className = 'UserList'>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid rows={data} columns={columns} pageSize={5} checkboxSelection disableSelectionOnClick />
           </div>
        </div>
    )
}
