import Block from './Block';

export default function Blocks({ blocks }) {
  return (
    <div>
      <h1>Blocks</h1>
      <div>
        {blocks.map((block) => (
          <Block block={block} />
        ))}
      </div>
    </div>
  );
}
