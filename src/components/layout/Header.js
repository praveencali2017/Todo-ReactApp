import React from 'react'
import {Link} from 'react-router-dom';
import { link } from 'fs';
import { NONAME } from 'dns';
export default function Header() {
    return (
        <header style={headerStyle}>
            <h1> TodoList</h1>
            <Link to="/" style={linkStyle}>Home</Link> | <Link to="/about" style={linkStyle}> About </Link>
        </header>
    )
}


const headerStyle={
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '15px'
}

const linkStyle={
    color: '#fff',
    textDecoration: 'none'
}