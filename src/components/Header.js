import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

class Header extends React.Component
{
   
    render()
    {
        return (
            <div>
                <div align="left">
                    <Link to="/">Streamer</Link> &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/stream/create">Create Stream</Link>
                </div>
                <div align="right">
                    <GoogleAuth/>
                    <Link to="/">Streamer</Link> &nbsp;&nbsp;
                </div>
            </div>
            );
    }
}

export default Header;