import swal from "sweetalert";
import axios from 'axios';

const handleClientDelete = (client , remove ) => {
    const id = client.getValue("id");
    const fullName = `${client.getValue("first_name")} ${client.getValue(
      "last_name"
    )}`;

    swal({
      title: `Are you sure you wanna delete client ${fullName}`,
      text:
        "Once deleted, you will not be able to see this client, can be recoverd if needed!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {

      if (willDelete) {
        axios.delete(`http://127.0.0.1:8080/api/clients/${id}`)
        .then(res => {
            remove(id);
            swal(`Poof! ${fullName} deleted successfully!`, {
              icon: "success",
            });
        }).catch(res => {
            console.log('Something went wrong!!');
        });
      } else {
        swal(`client ${fullName} not deleted!`);
      }
    });
  };



  export default handleClientDelete;