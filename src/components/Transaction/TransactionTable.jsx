import "./TransactionTable.scss";

import { IoIosSearch } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";

function TransactionTable() {
    return (
        <section className="TransactionTable">

            <section className="TransactionTable-options">

                <div>

                    <IoIosSearch />

                    <IoFilter />

                    <FiFilter />

                </div>

                <button>
                    + New Transaction
                </button>

            </section>

            <section className="TransactionTable-header">
                <div></div>
                <div>Title</div>
                <div>Vendor</div>
                <div>Category</div>
                <div>Date</div>
                <div>Price</div>
            </section>

            <section className="TransactionTable-content">
                <div>
                    <div></div>
                    <div>Clan shoes</div>
                    <div>Amazon</div>
                    <div>Business</div>
                    <div>18 Feb 2024 <span>11:15 am</span></div>
                    <div>6,110</div>
                </div>
                <div>
                    <div></div>
                    <div>Take out</div>
                    <div>Local</div>
                    <div>Fun</div>
                    <div>18 Feb 2024 <span>7:00 pm</span></div>
                    <div>1,450</div>
                </div>
            </section>

        </section>
    )
}

export default TransactionTable;