import { useState } from 'react';
import { signupFields } from "../constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";

const Signup = () => {
  const [signupState, setSignupState] = useState({
    name: '',
    email: '',
    password: '',
    PhoneNo: '',
    role: ''
  });

  const handleChange = (e) => {
    setSignupState({ ...signupState, [e.target.id]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createAccount(signupState);
  }

  const createAccount = (payload) => {
    debugger
    const endpoint = `http://localhost:6790/register`;

    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
      console.log('API response:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
        {signupFields.map(field => (
          <div key={field.id} className="mb-4">
            {field.type === 'dropdown' ? (
              <div>
                {/* <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">{field.labelText}</label> */}
                <select
                  id={field.id}
                  name={field.name}
                  value={signupState[field.id]}
                  onChange={handleChange}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">{field.placeholder}</option>
                  {field.options.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            ) : (
              <Input
                handleChange={handleChange}
                value={signupState[field.id]}
                labelText={field.labelText}
                labelFor={field.labelFor}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
              />
            )}
          </div>
        ))}
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  );
}

export default Signup;
