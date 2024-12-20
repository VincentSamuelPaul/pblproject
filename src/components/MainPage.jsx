import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { readData } from '../Database';


const MainPage = ({ link, setLink, data, setData}) => {

    const navigate = useNavigate();

    const checkLink = async(link) => {
        const dat = await readData("links");
        const links = dat.docs.map(doc => doc.data());
        for(let i = 0; i < links.length; i++) {
            if(link == links[i].uniqueLink) {
                setData(links[i]);
                if(data) {
                    console.log(data);
                    localStorage.setItem("data", JSON.stringify);
                    navigate("/sharepad");
                }
            }
        }
    }

    return (
        <div className='main'>
            <div className="hero main">
                <h1 className='title'>SHAREPAD</h1>
                <p className='description typewriter'>Share text with other peers with the same link.</p>
            </div>
            <div className='pageinput'>
                <div className="pageinput-box">
                    <h2 className='input-text url'>sharepad.com/</h2>
                    <input className='input-text' onChange={(e) => setLink(e.target.value)}  placeholder='your-page'/>
                </div>
                <button className='go-btn' onClick={() => checkLink(link)}>Go!</button>
            </div>
            <div className="footer">
                <h2 className='footer-title'>PBL 3rd Sem project CS-ICB by ~</h2>
                <div className='names'>
                    <h3 className='name'>Dishan</h3>
                    <h3 className='name'>Shashank</h3>
                    <h3 className='name'>Shashwath</h3>
                    <h3 className='name'>Vincent</h3>
                </div>
                <p className='copyright'>© 2024-25</p>
            </div>
        </div>
    )
}

export default MainPage