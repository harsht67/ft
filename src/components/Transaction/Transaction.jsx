import "./Transaction.scss";

import TransactionTable from "./TransactionTable";

function Transaction() {
    return (
        <main className="Transaction">

            <h2 className="Transaction-title">
                Transactions
            </h2>

            <TransactionTable/>

        </main>
    )
}

export default Transaction;