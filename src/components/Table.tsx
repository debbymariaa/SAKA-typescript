import React from "react";

// Definisikan tipe data generic untuk Table
type TableProps<T> = {
  data: T[];  // Array dari data yang bertipe T
  columns: { label: string; accessor: keyof T }[];  // Kolom dengan label dan accessor untuk properti objek T
};

// Komponen Table yang menggunakan Generic T
function Table<T>({ data, columns }: TableProps<T>) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={String(col.accessor)}>{col.label}</th>  
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col) => (
              <td key={String(col.accessor)}>{String(row[col.accessor])}</td>  
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Definisikan tipe data untuk karyawan
type Employee = {
  name: string;
  age: number;
  email: string;
  phone: string;
};

// Data karyawan
const employees: Employee[] = [
  { name: "Desthrie", age: 18, email: "sasapi12@github.com", phone: "1234567890" },
  { name: "Sabrina", age: 17, email: "sablubewwy@github.com", phone: "9876543210" },
  { name: "Barusadar cipularang", age: 534, email: "brandobatubara@github.com", phone: "23876543221" },
];

// Kolom yang akan ditampilkan pada tabel
const columns: { label: string; accessor: keyof Employee }[] = [
  { label: "Name", accessor: "name" },
  { label: "Age", accessor: "age" },
  { label: "Email", accessor: "email" },
  { label: "Phone", accessor: "phone" },
];

// Komponen utama
export default function Home() {
  return (
    <div>
      <h1>Employee Table</h1>
      <Table data={employees} columns={columns} />
    </div>
  );
}
