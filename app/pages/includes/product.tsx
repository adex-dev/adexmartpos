import { useState } from 'react';
const mockProducts = [
  { id: 1, name: 'Product A', price: 10000, stock: 10 },
  { id: 2, name: 'Product B', price: 20000, stock: 5 },
  { id: 3, name: 'Product C', price: 15000, stock: 8 },
  { id: 4, name: 'Product D', price: 30000, stock: 2 },
  { id: 5, name: 'Product E', price: 50000, stock: 20 },
  { id: 6, name: 'Product F', price: 12000, stock: 7 },
  { id: 7, name: 'Product G', price: 22000, stock: 3 },
];
export default function ProductTable() {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const filtered = mockProducts.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const currentData = filtered.slice(start, start + itemsPerPage);
  return (
    <>
      <div className="bg-gray-300/70 px-3 pt-4 min-h-[89vh] max-h-[91vh] overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">Product List</h1>
          <button className="btn btn-xs btn-primary btn-soft">
            + Add Product
          </button>
        </div>

        {/* Search */}
        <div className="mb-4 flex flex-row w-64">
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              type="search"
              className=" input-xs"
              placeholder="Search"
            />
          </label>
        </div>
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table table-xs border-collapse overflow-y-auto max-h-[62vh]">
            <thead className="bg-accent text-white">
              <tr>
                <th></th>
                <th>Name</th>
                <th>price</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((p, index) => (
                <tr key={p.id} className="border-t">
                  <th>{index + 1}</th>
                  <td>{p.name}</td>
                  <td>{p.stock}</td>
                  <td>{p.stock}</td>
                </tr>
              ))}
              {currentData.length === 0 && (
                <tr>
                  <td colSpan="3" className="text-center py-4 text-gray-500">
                    No data found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end space-x-3 mt-2">
          <button className="btn btn-soft btn-xs btn-accent">previous</button>
          <button className="btn btn-soft btn-xs btn-primary">Next</button>
        </div>
      </div>
    </>
  );
}
