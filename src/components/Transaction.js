export default function Transaction({ transaction }) {
  return (
    <div>
      <p>{transaction.hash}</p>
      <p>{transaction.from}</p>
      <p>{transaction.to}</p>
      <hr />
    </div>
  );
}
