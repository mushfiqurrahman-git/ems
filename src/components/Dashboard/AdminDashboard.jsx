import React from 'react'
import Header from '../other/Header'

const AdminDashboard = () => {
    return (
        <div className='h-screen w-full p-10'>
            <Header />
            <div>
                <form className='flex items-start justify-between'>
                    <div>
                        <h3>Task Title</h3>
                        <input type="text" placeholder='Make a UI design'></input>
                    </div>
                    <div>
                        <h3>Description</h3>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div>
                        <h3>Date</h3>
                        <input type='date'></input>
                    </div>
                    <div>
                        <h3>Assign to</h3>
                        <input type="text" placeholder='employee name'></input>
                    </div>
                    <div>
                        <h3>Categoty</h3>
                        <input type="text" placeholder='design,dev, etc'></input>
                    </div>
                    <button>Create Task</button>
                </form>
            </div>
        </div>
    )
}

export default AdminDashboard