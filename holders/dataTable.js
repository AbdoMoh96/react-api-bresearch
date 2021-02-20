import { DataGrid } from '@material-ui/data-grid';
import React, { useState ,useEffect } from 'react';

const Home = () => {

    const [Rows , setRows ] = useState([]);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        { field: 'age', headerName: 'Age', type: 'number', width: 90,}
      ];

      const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];



      useEffect(() => {
        setRows(rows);
      } , [])


  return (
    <div style={{ height: '40vh', width: '50%' , margin: "auto" }}>
      <DataGrid rowsPerPageOptions={[10, 50]} rows={Rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
};

export default Home;