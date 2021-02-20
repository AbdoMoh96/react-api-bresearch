import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import handleClientDelete from './Clients/ClientsFunc/handleClientDelete.js';
import { DataGrid } from "@material-ui/data-grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const Clients = () => {
  const [Rows, RowsUpdate] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8080/api/clients")
      .then((res) => {
        RowsUpdate(res.data);
      })
      .catch((e) => {
        swal("server error!", "something went wrong!!!", "error");
      });


  }, []);

  const handleSearch = async (event) => {
    let name = event.target.value;
    let res;
    if (name) {
      res = await axios.get(`http://127.0.0.1:8080/api/clients/name/${name}`);
    } else {
      res = await axios.get("http://127.0.0.1:8080/api/clients");
    }
    RowsUpdate(res.data);
  };

  const handleClientShow = (data) => {
    console.log(data.row.first_name);
  };

  const handleClientUpdate = (data) => {
    history.push({
      pathname: "/clients/update",
      state: data.row,
    });
  };

  const remove = (id) => {
    RowsUpdate(() => {
      let rows = Rows.filter(item => {
        return item.id !== id
      })
       return rows;
    });
  }

  return (
    <section className="clients">
      <div className="search">
        <TextField
          id="filled-basic"
          label="Search Clients"
          onChange={handleSearch}
          style={{ width: "80%" }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/clients/create")}
        >
          Create Client
        </Button>
      </div>

      <div className="table">
        <DataGrid
          columns={[
            { headerName: "ID", field: "id", width: 80 },
            { headerName: "First Name", field: "first_name", width: 150 },
            { headerName: "Last Name", field: "last_name", width: 150 },
            { headerName: "Phone Number", field: "phone_number", width: 150 },
            { headerName: "Mobile Number", field: "mobile_number", width: 150 },
            { headerName: "Client Type", field: "client_type", width: 150 },
            {
              field: "Actions",
              width: 160,
              renderCell: (params) => (
                <>
                  <IconButton
                    aria-label="delete"
                    size="medium"
                    color="primary"
                    onClick={() => handleClientShow(params)}
                  >
                    <VisibilityIcon fontSize="inherit" />
                  </IconButton>

                  <IconButton
                    aria-label="delete"
                    size="medium"
                    style={{ color: "green" }}
                    onClick={() => handleClientUpdate(params)}
                  >
                    <EditIcon fontSize="inherit" />
                  </IconButton>

                  <IconButton
                    aria-label="delete"
                    size="medium"
                    color="secondary"
                    onClick={() => handleClientDelete(params , remove)}
                  >
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                </>
              ),
            },
          ]}
          pageSize={10}
          rowsPerPageOptions={[ 10, 20 , 40 , 50 , 100]}
          onPageSizeChange={(params) =>  params.page = 1 }
          rows={Rows}
        />
      </div>
    </section>
  );
};

export default Clients;
