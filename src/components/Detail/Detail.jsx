import "./Detail.scss";

import { IoIosClose } from "react-icons/io";

function Detail() {
  return (
    <aside className="Detail">

      <header>
        <IoIosClose />
      </header>

      <div className="Detail-category">Busines</div>

      <div className="Detail-card">

        <div>
          
          <div className="Detail-title">Clan shoes</div>

          <div className="Detail-vendor">Amazon</div>

        </div>

        <div className="Detail-price">
          ₹6,110
        </div>

      </div>


      <textarea className="Detail-note" rows={6} placeholder="Note..." />

      {/* Note */}

      {/* Attachments like bill */}

      {/* Graph */}

    </aside>
  )
}

export default Detail;