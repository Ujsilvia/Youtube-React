import React from 'react';
import './HeaderArea.css';
import {FaYoutube} from 'react-icons/fa';
import {MdSearch, MdVideoCall, MdViewComfy} from 'react-icons/md';
import {AiTwotoneBell} from 'react-icons/ai';


function HeaderArea(){
    return (
        <div className="HeaderArea">
            <div className="Header">
              <header className="header"> 
                <button className="button">
                    &#9776;
                </button>
                <FaYoutube color = "red"  fontSize = "3rem"/>  
                <div>Youtube</div> 

               </header>
               <div className="Search">
                <input type = "search" placeholder = "Search"/>    
                <div className  = "search">
                    <MdSearch fontSize = "3rem"/>
                
                </div>

               </div>
               <div className="Icon">
                        <MdVideoCall fontSize = "3.0rem"/>
                        <MdViewComfy fontSize = "2.0rem"/>
                        <AiTwotoneBell   fontSize = "2.8rem"/>
                        <MdSearch fontSize = "2.8rem"/>
                        <img src ="/images/models3.jpg" alt = "dp" className="imgstyle"/>
               </div>
             </div>
            </div>
    )
}

export default HeaderArea;
