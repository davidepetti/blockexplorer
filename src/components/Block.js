export default function Block({ block }) {
  return (
    <div>
      <p>{block.number}</p>
      <p>{block.transactions.length}</p>
      <hr />
    </div>
  );
}
