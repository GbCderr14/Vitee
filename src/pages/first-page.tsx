import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button,  } from '@mui/material';
// import { Typography } from '@mui/material/styles/createTypography';
import viteLogo from '/vite.svg'
import './first.css';
const FirstPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const history = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Save user details to localstorage
    localStorage.setItem('name', name);
    localStorage.setItem('phoneNumber', phoneNumber);
    localStorage.setItem('email', email);

    // Navigate to second page
    history('/second');
  };

  return (<div style={{height:"600px",width:"100%",border:"2px solid red",paddingTop:"30px"}} className='first-page'>
          <img src={viteLogo} className="logo" alt="Vite logo" height="100px"/>
    <h1 style={{fontFamily:"cursive"}}>Vite + React TS assignment</h1>
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
        InputLabelProps={{
            style: { color: 'red' ,borderColor:"white"},
          }}
          InputProps={{
            sx: {
              '& input': {
                color: 'blue', // change text color
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'red', // change border color
              },
            }}}

      />
      <TextField
        label="Phone number"
        value={phoneNumber}
        onChange={(event) => setPhoneNumber(event.target.value)}
        required
        InputLabelProps={{
            style: { color: 'red' ,borderColor:"white"},
          }}
          InputProps={{
            sx: {
              '& input': {
                color: 'blue', // change text color
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'red', // change border color
              },
            }}}
      />
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
        InputLabelProps={{
            style: { color: 'red' ,borderColor:"white"},
          }}
          InputProps={{
            sx: {
              '& input': {
                color: 'blue', // change text color
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'red', // change border color
              },
            }}}
      />
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
    </div>
  );
};

export default FirstPage;
