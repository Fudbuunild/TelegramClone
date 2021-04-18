import React from 'react'
import Sidebar from './Sidebar'
import Thread from './Theard'
import './Telegram.css'

const Telegram = () => {
    return (
        // BEM !!!
        <div className="telegram">
            <Sidebar/>
            <Thread/>
        </div>
    )
}

export default Telegram
