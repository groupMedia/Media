import React from 'react'
import SideBarDesk from "../../../Components/PanelAdmin/SideBarDesk/SideBarDesk";
import TopBar from "../../../Components/PanelAdmin/TopBar/TopBar";
import SideBar from "../../../Components/PanelAdmin/SideBar/SideBar";


export default function ListGroup() {
  return (
    <>
        <div className="grid grid-cols-12  ">
      <div className="right col-span-2 hidden md:block ">
        <TopBar/>
        <SideBarDesk />
      </div>

      <div className="left xl:col-span-10 2xl:col-span-10 col-span-12 md:mt-24 md:mr-[20px] ">
             <div>
            <TopBar />
          </div>
          <div>
            <SideBar />
          </div>
          {/* coding ListGroup components here/; */}
          <h1>ListGroup components</h1>
      </div>
    </div>
    
    </>
  )
}
