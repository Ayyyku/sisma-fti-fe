import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layouts from './Layouts';
import { format } from 'date-fns';

const Peminjaman = () => {
  const [ruangan, setRuangan] = useState([]);
  const [form, setForm] = useState({ namaRuangan: '', name: '', time: '', status: 'waiting' });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchRuangan();
  }, []);

  const fetchRuangan = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/auth/ruangan');
      setRuangan(response.data);
    } catch (error) {
      console.error('Error fetching ruangan:', error);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/auth/ruangan/${editId}`, form);
      } else {
        await axios.post('http://localhost:5000/api/auth/ruangan', form);
      }
      setForm({ namaRuangan: '', name: '', time: '', status: 'waiting' });
      setEditId(null);
      fetchRuangan();
    } catch (error) {
      if (error.response) {
        console.error('Error submitting form:', error.response.data);
      } else {
        console.error('Error submitting form:', error);
      }
    }
  };

  const handleEdit = (ruangan) => {
    setForm(ruangan);
    setEditId(ruangan.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/auth/ruangan/${id}`);
      fetchRuangan();
    } catch (error) {
      console.error('Error deleting ruangan:', error);
    }
  };

  return (
    <Layouts>
      <div className="p-6 bg-gray-100 rounded-lg">
        <h1 className="mb-4 text-2xl">Peminjaman</h1>
        <form onSubmit={handleSubmit} className="mb-6 space-y-4">
          <input type="text" name="namaRuangan" value={form.namaRuangan} onChange={handleChange} placeholder="Nama Ruangan" required className="w-full p-2 border border-gray-300 rounded" />
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" required className="w-full p-2 border border-gray-300 rounded" />
          <input type="datetime-local" name="time" value={form.time} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded" />
          <select name="status" value={form.status} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded">
            <option value="waiting">Waiting</option>
            <option value="approve">Approve</option>
            <option value="decline">Decline</option>
          </select>
          <button type="submit" className="p-2 text-white bg-blue-500 rounded">{editId ? 'Update' : 'Create'}</button>
        </form>
        <ul className="space-y-4">
          {ruangan.map((r) => (
            <li key={r.id} className="flex items-center justify-between p-4 bg-white border border-gray-300 rounded">
              <span>{r.namaRuangan} - {r.name} - {format(new Date(r.time), 'PPpp')} - {r.status}</span>
              <div className="space-x-2">
                <button onClick={() => handleEdit(r)} className="p-2 text-white bg-yellow-500 rounded">Edit</button>
                <button onClick={() => handleDelete(r.id)} className="p-2 text-white bg-red-500 rounded">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layouts>
  );
};

export default Peminjaman;