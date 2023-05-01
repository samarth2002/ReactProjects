import React from 'react'
import "./SidebarOption.css"
import {useNavigate} from "react-router-dom"
import db from "../firebase"


function SidebarOption({ Icon, title,id ,AddChannelOption}) {
    const Navigate = useNavigate()
    const selectChannel = () => {
        if(id){
            Navigate(`/room/${id}`)
        }else{
            // Navigate(title)
        }
    }

    const addChannel =()=>{
        const channelName = prompt('Please enter the channel name')
        if(channelName){
            db.collection('rooms').add({
                 name: channelName,

            })
        }
    }
    return (
        <div className = "Sidebar-option" onClick = {AddChannelOption? addChannel:selectChannel}>
            {Icon && <Icon className = "Sidebar-option-icon"/>}
            {Icon ? (<h3>{title}</h3>):
                (<h3 className = "Sidebar-option-channel"><span className = "Sidebar-option-hash">#</span> {title}</h3>)
            }
        </div>
    )
}

export default SidebarOption
