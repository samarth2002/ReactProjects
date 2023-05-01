import React from 'react'
import "./Sidebar.css"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import { Inbox, People } from '@mui/icons-material';
import { Drafts } from '@mui/icons-material';
import { BookmarkBorder } from '@mui/icons-material';
import { PeopleAlt } from '@mui/icons-material';
import { Apps } from '@mui/icons-material';
import { FileCopy } from '@mui/icons-material';
import { ExpandLess } from '@mui/icons-material';
import { ExpandMore } from '@mui/icons-material';
import { Add } from '@mui/icons-material';
import {useState, useEffect} from "react"
import db from "../firebase"
import { useStateValue } from '../StateProvider';



function Sidebar() {

    const [channels, setChannels] = useState([])
    const [{user}] = useStateValue()
    useEffect(()=>{
        db.collection('rooms').onSnapshot(snapshot=>(
            setChannels(
                snapshot.docs.map(doc=>({
                    id: doc.id,
                    name: doc.data().name,


                }))
            )
        ))
    },[])


    return (
        <div className="Sidebar">
            <div className="Sidebar-header">
                <div className="Sidebar-header-info">
                    <h2>Sam Slack</h2>
                    <h3>
                        <FiberManualRecordIcon />{user?.displayName}
                    </h3>
                </div>
                <CreateIcon />
            </div>
            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={Inbox}  title="Mentions and reactions" />
            <SidebarOption Icon={Drafts} title="Saved items" />
            <SidebarOption Icon={BookmarkBorder} title="Channel browser" />
            <SidebarOption Icon={PeopleAlt} title="People and user groups" />
            <SidebarOption Icon={Apps} title="Apps" />
            <SidebarOption Icon={FileCopy} title="File browser" />
            <SidebarOption Icon={ExpandLess} title="Show less" />
            <hr />
            <SidebarOption Icon={ExpandMore} title="Channels" />
            <hr />
            <SidebarOption Icon={Add} id AddChannelOption title="AddChannels" />
            {channels.map(channel=>(
            <SidebarOption  title={channel.name} id={channel.id} />
            ))}
        </div>
    )
}

export default Sidebar
