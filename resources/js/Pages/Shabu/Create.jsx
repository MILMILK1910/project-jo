import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import React from 'react';


export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        seats: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('customers.store'));
    };

    return (
        <AuthenticatedLayout header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Create Customer</h2>}>
            <Head title="Create Customer" />
            <div>
                <h1>Create Page</h1>
                {/* Add your form or content here */}
            </div>

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                                    <input type="text" value={data.first_name} onChange={e => setData('first_name', e.target.value)}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                                    {errors.first_name && <p className="text-red-500 text-sm">{errors.first_name}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                                    <input type="text" value={data.last_name} onChange={e => setData('last_name', e.target.value)}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                                    {errors.last_name && <p className="text-red-500 text-sm">{errors.last_name}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" value={data.email} onChange={e => setData('email', e.target.value)}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                    <input type="text" value={data.phone} onChange={e => setData('phone', e.target.value)}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                                </div>

                                {/* Dropdown เลือกจำนวนที่นั่ง */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Select Seats</label>
                                    <select value={data.seat_count} onChange={e => setData('seat_count', e.target.value)}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                                        <option value="">Select Seat Option</option>
                                        <option value="1">1 </option>
                                        <option value="2">2 ขึ้นไป</option>
                                        <option value="4">4 ขึ้นไป</option>
                                        <option value="6">6 ขึ้นไป</option>
                                        <option value="10">10 ขึ้นไป</option>
                                    </select>
                                    {errors.seat_count && <p className="text-red-500 text-sm">{errors.seat_count}</p>}
                                </div>

                                <div>
                                    <button type="submit" disabled={processing}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
