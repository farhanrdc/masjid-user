import React from 'react';

interface DataItem {
  bulan: string;
  pemasukan: string;
  pengeluaran: string;
}

interface DataTableProps {
  data: DataItem[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <div className="w-full">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Bulan</th>
            <th className="border border-gray-300 px-4 py-2">Pemasukan</th>
            <th className="border border-gray-300 px-4 py-2">Pengeluaran</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="border border-gray-300 px-4 py-2">{item.bulan}</td>
              <td className="border border-gray-300 px-4 py-2">{item.pemasukan}</td>
              <td className="border border-gray-300 px-4 py-2">{item.pengeluaran}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
