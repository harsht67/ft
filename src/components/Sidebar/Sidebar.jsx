import "./Sidebar.scss";

import { GrTransaction } from "react-icons/gr";
import { TbLayoutDashboard } from "react-icons/tb";

function Sidebar() {
  return (
    <aside className="Sidebar">
        
        <h1 className="Sidebar-title">
          Pika
        </h1>

      <nav className="Sidebar-menu">
        <ul>
          <li>
            <GrTransaction/> Transactions
          </li>
          <li>
            <TbLayoutDashboard/> Dashboard
          </li>
        </ul>
      </nav>

    </aside>
  )
}

export default Sidebar;