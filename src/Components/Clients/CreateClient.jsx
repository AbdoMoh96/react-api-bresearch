import React, { useState , useEffect , useRef } from 'react';
import CreateClientForm from './CreateClientForm.jsx';
import axios from 'axios';

const CreateClient = () => {

    const [client , UpdateClient] = useState([]);
    const didMount = useRef(false);

    const create = (data) => {
        UpdateClient(data);
    };

    useEffect(() => {
        if(didMount.current){
           axios.post('http://127.0.0.1:8080/api/clients' , client)
           .then(res => {
               console.log(res.data);
           });
        }else{
            didMount.current = true;
        }
    }, [client]);


    return(

         <div className="client_form_container">
          <CreateClientForm create={create} />
         </div>

    );


}

export default CreateClient;