import React from 'react';

const users = [
    { login: 'user1', role: 'admin', password: 'pass1', joinDate: '2021-01-01' },
    { login: 'user2', role: 'viewer', password: 'pass2', joinDate: '2021-02-01' },
    { login: 'user3', role: 'viewer', password: 'pass3', joinDate: '2021-03-01' },
];

const Users = () => {
    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        {user.login} - {user.role} - {user.password} - {user.joinDate}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;