function Table({ data }) {
  const renderedRows = data.map((fruit) => {
    return (
      <tr key={fruit.name}>
        <th>{fruit.name}</th>
        <th>{fruit.color}</th>
        <th>{fruit.score}</th>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Fruit</th>
          <th>Color</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
