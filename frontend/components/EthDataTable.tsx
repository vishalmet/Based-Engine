interface DataTableProps<T> {
  columns: string[];
  data: T[];
  loading: boolean; // New prop to indicate loading state
}

// Utility function to convert hex timestamp to a human-readable date
const convertHexToDate = (hexString: string): string => {
  // Remove the '0x' prefix
  const hex = hexString.startsWith('0x') ? hexString.slice(2) : hexString;
  
  // Convert hex to decimal
  const decimalTimestamp = BigInt('0x' + hex);
  
  // Convert to milliseconds (assuming timestamp is in milliseconds)
  const timestampInMilliseconds = Number(decimalTimestamp);
  
  // Create a Date object
  const date = new Date(timestampInMilliseconds);
  
  // Check if the date is valid
  if (isNaN(date.getTime())) {
    return 'Invalid date';
  }
  
  // Format the date as a readable string
  return date.toLocaleString();
};

const EthDataTable = <T extends Record<string, any>>({ columns, data, loading }: DataTableProps<T>) => {
  // Sort data by Contract_id in ascending order
  const sortedData = [...data].sort((a, b) => {
    if (a.Contract_id < b.Contract_id) {
      return -1;
    }
    if (a.Contract_id > b.Contract_id) {
      return 1;
    }
    return 0;
  });

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-transparent backdrop-blur-2xl border border-gray-200">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} className="py-2 px-4 brandy-font border border-gray-200 text-left">{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={columns.length} className="py-2 px-4 text-center border border-gray-200">Loading...</td>
            </tr>
          ) : sortedData.length > 0 ? (
            sortedData.map((item, index) => (
              <tr className="bricolage-font" key={index}>
                <td className="py-2 px-4 border border-gray-200">{item.Contract_id}</td>
                <td className="py-2 px-4 border border-gray-200 overflow-x-auto whitespace-nowrap">{item.user}</td>
                <td className="py-2 px-4 border border-gray-200 overflow-x-auto whitespace-nowrap">
                  <a href={item.dataUri} className="text-green-500 hover:underline" target="_blank" rel="noopener noreferrer">
                    {item.dataUri}
                  </a>
                </td>
                <td className="py-2 px-4 border border-gray-200">{convertHexToDate(item.timestamp)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="py-2 px-4 text-center border border-gray-200">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EthDataTable;
