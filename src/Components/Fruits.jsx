export default function Fruits() {
  const fruits = [
    { fruit: "Apple", color: "Red" },
    { fruit: "Orange", color: "Orange" },
    { fruit: "Banana", color: "Yellow" },
    { fruit: "Mosambi", color: "Green" },
  ];
  return (
    <div>
      <ol>
        {fruits.map((f) => (
          <li key={f.name}>{f.color}</li>
        ))}
      </ol>
    </div>
  );
}
