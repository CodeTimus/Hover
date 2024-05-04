import React, { useState, useEffect } from 'react'

const ManageUser = () => {
    const [Data, setData] = useState([])

    const fetchUserData = async () => {
        const res = await fetch('http://localhost:3000/user/getall')
        console.log(res.status)
        if (res.status === 200) {
            const data = await res.json();
            console.log(data)
            setData(data)
        }
    }
    useEffect(() => {
        fetchUserData()
    }, [])

    const deleteProduct = async (id) => {
        console.log(id);
        const res = await fetch("http://localhost:3000/user/delete/" + id, {
            method: "DELETE",
        });
        if (res.status === 200) {
            fetchUserData();
        }
    }

    const displayUser = () => {
        return Data.map((user) => (
            <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <button onClick={() => { deleteProduct(user._id) }} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        ))
    }
    return (
        <div className='d-flex mt-5 flex-column align-items-center'>
            <h1 className="bg-danger text-white py-5 w-75 text-center">Manage User</h1>


            <table className="table table-striped table-bordered table-dark w-75">
                <thead>
                    <tr>
                        <th className="text-center" style={{fontSize: '20px'}}>Name</th>
                        <th className="text-center" style={{fontSize: '20px'}}>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {displayUser()}
                </tbody>
            </table>
        </div>

    )
}

export default ManageUser