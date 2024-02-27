function Table({ data, config, keyFn }) {
  const renderedConfig = config.map((column) => {
    return (
      <th key={column.label}>{column.label}</th>
    )
  })
  const renderedRows = data.map((rowData) => {
    const renderCells = config.map((column) => {
      return (
        <td className="p-2" key={column.label}>{column.render(rowData)}</td>
      )
    })
    return (
      <tr key={keyFn(rowData)} className="border-b">
        {renderCells}
      </tr>
    );
  });
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          {renderedConfig}
        </tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
