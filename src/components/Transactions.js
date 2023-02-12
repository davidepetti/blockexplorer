import Transaction from './Transaction';

export default function Transactions({ transactions }) {
  return (
    <div>
      <h1>Transactions</h1>
      <div>
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} />
        ))}
      </div>
    </div>
  );
}
