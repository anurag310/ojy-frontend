const loginFields=[
    {
        labelText:"Email address",
        labelFor:"email",
        id:"email",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    },
    {
        labelText: "Role",
        labelFor: "role",
        id: "role",
        name: "role",
        type: "dropdown", // Assuming "dropdown" type is used for dropdown fields
        options: ["admin", "user"], // Options for the dropdown field
        isRequired: true
      }
]

const signupFields=[
    {
        labelText:"Username",
        labelFor:"name",
        id:"name",
        name:"name",
        type:"text",
        autoComplete:"name",
        isRequired:true,
        placeholder:"Username"   
    },
    {
        labelText:"Email address",
        labelFor:"email",
        id:"email",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    },
    {
        labelText:"Phone Number",
        labelFor:"phoneNumber",
        id:"PhoneNo",
        name:"phoneNumber",
        type:"text",
        autoComplete:"phoneNumber",
        isRequired:true,
        placeholder:"Phone Number"   
    },
    {
        labelText: "Role",
        labelFor: "role",
        id: "role",
        name: "role",
        type: "dropdown", // Assuming "dropdown" type is used for dropdown fields
        options: ["admin", "user"], // Options for the dropdown field
        isRequired: true,
        placeholder:"User Role"   
      }
]

export {loginFields,signupFields}