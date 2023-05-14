import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import TableComponent from '../components/table';
import Departmentt from '../components/department';
import './secondpage.css';
const SecondPage: React.FC = () => {
    const name = localStorage.getItem('name');
    const phoneNumber = localStorage.getItem('phoneNumber');
    const email = localStorage.getItem('email');
    const history = useNavigate();

    if (!name || !phoneNumber || !email) {
        // Redirect user back to first page if information is missing
        history('/');
        return <Typography>Please enter your details</Typography>;
    }

    return (
        <>
            <section>
                <Typography variant="h5" className="title">User Details:</Typography>
                <div className="container">
                    <Typography className="info">Name: {name}</Typography>
                    <Typography className="info">Phone number: {phoneNumber}</Typography>
                    <Typography className="info">Email: {email}</Typography>
                </div>
                <Button variant="contained" className="button" onClick={() => {
                    history('/');
                    localStorage.removeItem('name');
                    localStorage.removeItem('email');
                    localStorage.removeItem('phoneNumber');
                }}>
                    Go back
                </Button>
            </section>
            <section>
                    <Typography variant="h5" className="title">Component 1:-) Tables:</Typography><br/>
                <TableComponent />
            </section>
            <section>
                <Typography variant="h5" className="title">Component 2:-) Departments:</Typography>
                <Departmentt /></section>
        </>
    );
};

export default SecondPage;



