import { useState } from 'react';
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";

const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Login(){
    const [loginState,setLoginState]=useState(fieldsState);

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    

    //Handle Login API Integration here
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Pass the loginState object as the body of the fetch request
        authenticateUser(loginState);
    }
    
    // Modify authenticateUser function to accept loginState as parameter
    const authenticateUser = (loginState) => {
        const endpoint = `http://localhost:6790/login`;
    
        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginState) // Pass loginState as the request body
        })
        .then(response => response.json())
        .then(data => {
            // Handle successful response from the API
            console.log('API response:', data);
            // Optionally, you can perform further actions after successful authentication, such as redirecting the user
        })
        .catch(error => {
            // Handle errors
            console.error('Error:', error);
        });
    }

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="-space-y-px">
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
        </div>

        <FormExtra/>
        <FormAction handleSubmit={handleSubmit} text="Login"/>

      </form>
    )
}