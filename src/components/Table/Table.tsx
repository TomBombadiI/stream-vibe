import './Table.scss';

type TableProps = {
  className?: string,
  headCells?: Array<{ children: JSX.Element|string, width: string }>,
  rows?: Array<{ cells: Array<JSX.Element|string> }>
}

const Table = (props: TableProps) => {
  const {
    className,
    headCells = [],
    rows = []
  } = props;

  return (
    <table className={className}>
      {headCells.length && (
        <thead>
          <tr>
            {headCells.map(({ children, width }, index) => (
              <th key={index} style={{ width }}>{children}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {rows.map(({ cells }, rowIndex) => (
          <tr key={rowIndex}>
            {cells.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
