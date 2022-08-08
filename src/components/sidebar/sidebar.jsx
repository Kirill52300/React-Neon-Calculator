import React from 'react';
import cls from  './sidebar.module.css'
import Sidebaritem from '../sidebaritems/sidebaritem';
function Sidebar({history}) {
    return (
        <div className= {cls.sidebar} >
           <h1>History</h1>
           <hr></hr>
            {history.map((value , id) => <Sidebaritem key = {id} value = {value}/>)}
        </div>
    );
}

export default Sidebar;