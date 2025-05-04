import React, { use, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { setLocalStorage } from '../../utils/localStorage'

const AllTask = () => {
    const authData = useContext(AuthContext)
    const [employees, setEmployees] = useState(() => {
        const savedEmployees = localStorage.getItem('employees')
        console.log('Saved employees from localStorage:', savedEmployees);

        return savedEmployees ? JSON.parse(savedEmployees) : authData.employees
    })

    useEffect(() => {
        console.log('New data after click:', employees);
        localStorage.setItem('employees', JSON.stringify(employees));
    },[employees]);

    const handleClick = (employeeId) => {
        const newData = employees.map((employee) =>
            employee.id === employeeId
                ? {
                    ...employee,
                    recommendation:
                    {
                        ...employee.recommendation,
                        status: !employee.recommendation.status,
                    },
                }
                : employee
        )
        setEmployees(newData)
        console.log('New data after click:', newData);
    };

    return (
        <div className='bg-[#1c1c1c]  rounded p-5 mt-5 h-60 '>
            <div className='bg-indigo-950 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='text-lg font-medium w-1/5'>Employee ID</h2>
                <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
                <h3 className='text-lg font-medium w-1/5'>New Task</h3>
                <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
                <h5 className='text-lg font-medium w-1/5'>Completed</h5>
                <h5 className='text-lg font-medium w-1/5'>Failed</h5>
                <h5 className='text-lg font-medium w-1/5'>AI Course Recommendation</h5>

            </div>
            <div className='overflow-auto'>
                {employees.map((elem,idx) => {
                    //btn color based on recommendation status 
                    const btnColor = elem.recommendation.status ? 'bg-green-400' : 'bg-red-400'
                    return (
                        <div key={idx} className='border-neutral-500 bg-emerald-950 mb-2 py-2 px-4 flex justify-between rounded '>
                            <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.id}</h3>
                            <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.name}</h3>
                            <h2 className='text-lg font-medium w-1/5'>{elem.taskCounts.newTask}</h2>
                            <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCounts.active}</h5>
                            <h5 className='text-lg font-medium w-1/5'>{elem.taskCounts.completed}</h5>
                            <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
                            <h5 className='text-lg font-medium w-1/5'>
                                <button className={`${btnColor} text-blue-900 rounded-ss-md`}
                                    onClick={() => handleClick(elem.id)}
                                >
                                    {elem.recommendation.courseName}
                                </button>
                            </h5>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default AllTask