import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Layouts from './Layouts'
import { Card, Typography, Button, Dialog, DialogHeader, DialogBody, DialogFooter, Input, Select, Option } from '@material-tailwind/react'

const Admin = () => {
    const [forms, setForms] = useState([]);
    const [filteredForms, setFilteredForms] = useState([]);
    const [editForm, setEditForm] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [yearFilter, setYearFilter] = useState('');
    const [prodiFilter, setProdiFilter] = useState('');
    const [years, setYears] = useState([]);
    const TABLE_HEAD = ["ID", "Nama Panjang", "Program Studi", "NIM", "Nama Bank", "Nomor Rekening", "Nomor HP", "Actions"];

    useEffect(() => {
        const fetchForms = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/auth/forms");
                setForms(response.data.forms);
                setFilteredForms(response.data.forms);
                const uniqueYears = [...new Set(response.data.forms.map(form => form.nim.substring(2, 6)))];
                setYears(uniqueYears);
            } catch (err) {
                console.error("Error fetching forms:", err);
            }
        };

        fetchForms();
    }, []);

    useEffect(() => {
        setFilteredForms(
            forms.filter(form =>
                (yearFilter ? form.nim.substring(2, 6) === yearFilter : true) &&
                (prodiFilter ? form.program_studi.includes(prodiFilter) : true)
            )
        );
    }, [yearFilter, prodiFilter, forms]);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/auth/form/${id}`);
            setForms(forms.filter(form => form.id !== id));
            setFilteredForms(filteredForms.filter(form => form.id !== id));
        } catch (err) {
            console.error("Error deleting form:", err);
        }
    };

    const handleEdit = (form) => {
        setEditForm(form);
        setIsModalOpen(true);
    };

    const handleSave = async () => {
        try {
            await axios.put(`http://localhost:5000/api/auth/form/${editForm.id}`, editForm);
            setForms(forms.map(form => form.id === editForm.id ? editForm : form));
            setFilteredForms(filteredForms.map(form => form.id === editForm.id ? editForm : form));
            setIsModalOpen(false);
        } catch (err) {
            console.error("Error updating form:", err);
        }
    };

    return (
        <Layouts>
            <h1 className='my-10 text-2xl font-bold text-center'>Daftar Form Asisten Dosen</h1>

            <div className="flex justify-between gap-4 m-4">
                <Select label="Filter by Year" value={yearFilter} onChange={(value) => setYearFilter(value)}>
                    <Option value="">All</Option>
                    {years.map(year => (
                        <Option key={year} value={year}>{year}</Option>
                    ))}
                </Select>
                <Select label="Filter by Program Studi" value={prodiFilter} onChange={(value) => setProdiFilter(value)}>
                    <Option value="">All</Option>
                    <Option value="Informatika">Informatika</Option>
                    <Option value="Sistem Informasi">Sistem Informasi</Option>
                </Select>
            </div>

            <Card className="w-full h-full mx-4 overflow-scroll">
                <table className='className="w-full text-left table-auto min-w-max"'>
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="p-4 border-b border-blue-gray-100 bg-blue-gray-50"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredForms.map((form, index) => {
                            const { id, nama_panjang, program_studi, nim, nama_bank, nomor_rekening, nomor_hp } = form;
                            const isLast = index === filteredForms.length - 1;
                            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={index}>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal text-center"
                                        >
                                            {index + 1}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal text-center"
                                        >
                                            {nama_panjang}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal text-center"
                                        >
                                            {program_studi}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            as="a"
                                            href="#"
                                            variant="small"
                                            color="blue-gray"
                                            className="font-medium text-center"
                                        >
                                            {nim}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            as="a"
                                            href="#"
                                            variant="small"
                                            color="blue-gray"
                                            className="font-medium text-center"
                                        >
                                            {nama_bank}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            as="a"
                                            href="#"
                                            variant="small"
                                            color="blue-gray"
                                            className="font-medium text-center"
                                        >
                                            {nomor_rekening}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            as="a"
                                            href="#"
                                            variant="small"
                                            color="blue-gray"
                                            className="font-medium text-center"
                                        >
                                            {nomor_hp}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Button
                                            color="red"
                                            onClick={() => handleDelete(id)}
                                            className="font-medium text-center"
                                        >
                                            Delete
                                        </Button>
                                        <Button
                                            color="blue"
                                            onClick={() => handleEdit(form)}
                                            className="ml-2 font-medium text-center"
                                        >
                                            Edit
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Card>

            <Dialog open={isModalOpen} handler={setIsModalOpen}>
                <DialogHeader>Edit Form</DialogHeader>
                <DialogBody>
                    <Input
                        label="Nama Panjang"
                        value={editForm?.nama_panjang || ''}
                        onChange={(e) => setEditForm({ ...editForm, nama_panjang: e.target.value })}
                    />
                    <Input
                        label="Program Studi"
                        value={editForm?.program_studi || ''}
                        onChange={(e) => setEditForm({ ...editForm, program_studi: e.target.value })}
                    />
                    <Input
                        label="NIM"
                        value={editForm?.nim || ''}
                        onChange={(e) => setEditForm({ ...editForm, nim: e.target.value })}
                    />
                    <Input
                        label="Nama Bank"
                        value={editForm?.nama_bank || ''}
                        onChange={(e) => setEditForm({ ...editForm, nama_bank: e.target.value })}
                    />
                    <Input
                        label="Nomor Rekening"
                        value={editForm?.nomor_rekening || ''}
                        onChange={(e) => setEditForm({ ...editForm, nomor_rekening: e.target.value })}
                    />
                    <Input
                        label="Nomor HP"
                        value={editForm?.nomor_hp || ''}
                        onChange={(e) => setEditForm({ ...editForm, nomor_hp: e.target.value })}
                    />
                </DialogBody>
                <DialogFooter>
                    <Button
                        color="red"
                        onClick={() => setIsModalOpen(false)}
                        className="mr-2"
                    >
                        Cancel
                    </Button>
                    <Button
                        color="green"
                        onClick={handleSave}
                    >
                        Save
                    </Button>
                </DialogFooter>
            </Dialog>
        </Layouts>
    )
}

export default Admin