import React from 'react'

const ManageUser = () => {
    return (
        <div>
            <header className='bg-danger text-white'>
            <div className="container py-5">
                <h1>Manage User</h1>
            </div>
        </header>

            <div className="container mt-5">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {displayUser()} */}
                    </tbody>
                </table>
            </div></div>
    )
}

export default ManageUser