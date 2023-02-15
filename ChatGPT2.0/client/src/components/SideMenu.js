

import React from 'react'

function SideMenu({clearChat}) {
    // console.log(models)
    return (
        <aside className="sidemenu">
            <div className="addchat" onClick={clearChat}>+&nbsp;&nbsp;&nbsp;&nbsp;New Chat</div>
           
        </aside>
    )
}

export default SideMenu
