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
        <AuthenticatedLayout>
            <Head title="Create Customer" />

            <div className='mt-10'>
                <p className="flex justify-center font-semibold text-lg">ป้อนข้อมูลการจองและยืนยันการจอง</p>
                <div className="mt-6 flex justify-center">
                    <div className="w-full max-w-xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">

                            <div className="p-6 text-gray-900">
                                <form className="space-y-4">
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
                                    <p className='text-xs text-red-600'>**หมายเหตุ กรุณามาถึงก่อนเวลาที่จองไว้ อย่างน้อย 15 นาที หากมาช้ากว่าเวลาที่กำหนด
                                        ทางร้านขอสงวนสิทธิ์ในการปล่อยโต๊ะให้กับลูกค้าท่านอื่น</p>
                                    <div>

                                    </div>
                                </form>

                            </div>
                        </div>

                    </div>
                </div>
                <p className=' mt-4 flex justify-center'>เมื่อคลิกปุ่มจองทันที ฉันยอมรับ ข้อกำหนดในการให้บริการของทางร้าน และ นโยบายความเป็นส่วนตัว</p>
                <div className='flex justify-center'>
                    <button onClick={handleSubmit} disabled={processing}
                        className="w-1/4 px-4 py-2 bg-red-900 text-white rounded-md hover:bg-red-700 mt-4 mb-4">
                        จอง
                    </button>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
