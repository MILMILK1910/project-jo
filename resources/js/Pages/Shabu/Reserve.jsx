import React from 'react';
import { usePage } from '@inertiajs/react';

const Reserve = () => {
    const { reservations } = usePage().props;

    return (
        <div>
            <h1>Reservations</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Guests</th>
                    </tr>
                </thead>
                <tbody>
                    {reservations.map((reservation) => (
                        <tr key={reservation.id}>
                            <td>{reservation.id}</td>
                            <td>{reservation.name}</td>
                            <td>{reservation.date}</td>
                            <td>{reservation.time}</td>
                            <td>{reservation.guests}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Reserve;
