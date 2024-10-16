import React from 'react'
import Layouts from './Layouts'

const Jadwal = () => {
  // Data jadwal dalam bentuk array
  const jadwalData = [
    { ruangan: 'Ruang 101', hari: 'Senin', jam: '08:00 - 10:00', keterangan: 'Kuliah Matematika' },
    { ruangan: 'Ruang 102', hari: 'Selasa', jam: '10:00 - 12:00', keterangan: 'Kuliah Pemrograman Web' },
    { ruangan: 'Ruang 103', hari: 'Rabu', jam: '13:00 - 15:00', keterangan: 'Kuliah Algoritma' },
    { ruangan: 'Ruang 103', hari: 'Rabu', jam: '13:00 - 15:00', keterangan: 'Kuliah Algoritma' }
  ];

  return (
    <Layouts>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Ruangan</th>
              <th scope="col" className="px-6 py-3">Hari</th>
              <th scope="col" className="px-6 py-3">Jam</th>
              <th scope="col" className="px-6 py-3">Keterangan</th>
            </tr>
          </thead>
          <tbody>
            {jadwalData.map((item, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.ruangan}
                </th>
                <td className="px-6 py-4">{item.hari}</td>
                <td className="px-6 py-4">{item.jam}</td>
                <td className="px-6 py-4">{item.keterangan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layouts>
  );
};

export default Jadwal;
