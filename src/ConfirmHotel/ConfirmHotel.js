import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../App';
import './ConfirmHotel.css';
import fakeData from'../fakeData';
import Hotel_1 from '../Image/Hotel-1.png';
import Hotel_2 from '../Image/Hotel-2.png';
import Hotel_3 from '../Image/Hotel-3.png';
import Button from '@material-ui/core/Button';


const Confirm = () => {
    const [logInData, setlogInData] = useContext(UserContext);
    const {place} = useParams();
    console.log(fakeData[1])
    return (
        <div className='confirm'>
            <h2>Your Destination: {place.toUpperCase()}</h2>
            <br/>
            <div className='hotels' style={{display: 'flex', marginLeft: '450px', marginRight: '450px', border: '1px solid gray', padding: '10px', borderRadius: '5px'}}>
                <img style={{width: '170px'}} src={Hotel_1} alt=""/>
                <div style={{marginLeft: '20px', textAlign : 'left'}}>
                <p style={{ fontWeight: 'bold'}}>{fakeData[0].name}</p>
                <p style={{color:'Gray'}}>Air Conditioned, 2 People, Wifi Available, 20$ per night.</p>
                <Button  variant="contained" color="primary">Select</Button>
                </div>
            </div>
            <br/>

            <div className='hotels' style={{display: 'flex', marginLeft: '450px', marginRight: '450px', border: '1px solid gray', padding: '10px', borderRadius: '5px'}}>
                <img style={{width: '170px'}} src={Hotel_2} alt=""/>
                <div style={{marginLeft: '20px', textAlign : 'left'}}>
                <p style={{ fontWeight: 'bold'}}>{fakeData[1].name}</p>
                <p style={{color:'Gray'}}>Air Conditioned, 2 People, Wifi Available, 20$ per night.</p>
                <Button  variant="contained" color="primary">Select</Button>
                </div>
            </div>
            <br/>

            <div className='hotels' style={{display: 'flex', marginLeft: '450px', marginRight: '450px', border: '1px solid gray', padding: '10px', borderRadius: '5px'}}>
                <img style={{width: '170px'}} src={Hotel_3} alt=""/>
                <div style={{marginLeft: '20px', textAlign : 'left'}}>
                <p style={{ fontWeight: 'bold'}}>{fakeData[2].name}</p>
                <p style={{color:'Gray'}}>Air Conditioned, 2 People, Wifi Available, 20$ per night.</p>
                <Button  variant="contained" color="primary">Select</Button>
                </div>
            </div>
           
            <br/>
            <Button variant="outlined" color="primary" onClick = {() => setlogInData({})} >Sign Out</Button>
            <br/>
            <br/>

        </div>
    );
};

export default Confirm;