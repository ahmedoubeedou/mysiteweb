import "./headr.css"
//import hook
import { useState } from "react";
//icons

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/Close';

export default function Headr()
{
    const [pobabeVisible , setPobabeVisible] = useState(false)

    return(
       
        <header className=" flex justify-between withcss">
            <div/>
    <nav className="nav fixe">
        <ul className="flex items-center bg-gray-800 gap-2 ulheadr">
            <li ><a href="#"> Home </a></li>
            <li id="#About" ><a href="#About" > About </a></li>
            <li id="#Skils" ><a href="#Skils"> Skils </a></li>
            <li id="#Project" ><a  href="#Project">Project </a></li>
            <li id="#Contacts" ><a href="#Contact"> Contact </a></li>
        </ul>
    </nav>
    <div/>
   <div className="div-icon-headr" onClick={()=>{setPobabeVisible(true)}}>
<MenuOutlinedIcon sx={{fontSize:40}}/>
   </div>
{pobabeVisible && <div className="pobabe">
    <ul className="flex items-center bg-gray-800 gap-2 ulheadr">
            <li ><button onClick={()=>{setPobabeVisible(false)}}><CloseIcon className="icon-close"/></button></li>
            <li   onClick={()=>{setPobabeVisible(false)}}><a href="#"> Home </a></li>
            <li id="#About"  onClick={()=>{setPobabeVisible(false)}}><a href="#About"> About </a></li>
            <li id="#Skils"  onClick={()=>{setPobabeVisible(false)}}><a href="#Skils"> Skils </a></li>
            <li id="#Project"  onClick={()=>{setPobabeVisible(false)}}><a href="#Project">Project </a></li>
            <li id="#Contacts"  onClick={()=>{setPobabeVisible(false)}}><a href="#Contact"> Contact </a></li>
        </ul>
   </div>}
        </header>
    );
}