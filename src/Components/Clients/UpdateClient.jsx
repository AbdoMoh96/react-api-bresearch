import React, { useState , useEffect , useRef } from 'react';
import UpdateClientForm from './UpdateClientForm.jsx';
import axios from 'axios';

const CreateClient = () => {

    const [client , UpdateClient] = useState([]);
    const didMount = useRef(false);

    const update = (data) => {
        UpdateClient(data);
    };

    useEffect(() => {
        if(didMount.current){
           axios.put(`http://127.0.0.1:8080/api/clients/${client.id}` , client)
           .then(res => {
               console.log(res.data);
           })
           .catch(res => {
               console.log("something went wrong !! "+ res);
           });
        }else{
            didMount.current = true;
        }
    }, [client]);


    return(

         <div className="client_form_container">
          <UpdateClientForm update={update} />
         </div>

    );


}

export default CreateClient;