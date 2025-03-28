import { stringify } from "postcss"

const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Complete Monthly Report",
                "taskDescription": "Prepare and submit the monthly financial report.",
                "taskDate": "2025-03-26",
                "category": "Finance"
            },
            {
                "active": true,
                "new_task": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Team Meeting",
                "taskDescription": "Attend the team meeting to discuss project progress.",
                "taskDate": "2025-03-27",
                "category": "Meeting"
            },
            {
                "active": false,
                "new_task": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Complete Client Proposal",
                "taskDescription": "Finish the client proposal document and send it out.",
                "taskDate": "2025-03-24",
                "category": "Client"
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Update Website",
                "taskDescription": "Make necessary updates to the company website.",
                "taskDate": "2025-03-25",
                "category": "Development"
            },
            {
                "active": false,
                "new_task": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Server Maintenance",
                "taskDescription": "Perform regular server maintenance.",
                "taskDate": "2025-03-22",
                "category": "Maintenance"
            },
            {
                "active": true,
                "new_task": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Bug Fixes",
                "taskDescription": "Fix bugs reported by QA team in the last release.",
                "taskDate": "2025-03-28",
                "category": "Development"
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Create Marketing Campaign",
                "taskDescription": "Design and launch a new marketing campaign for product launch.",
                "taskDate": "2025-03-29",
                "category": "Marketing"
            },
            {
                "active": false,
                "new_task": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Product Photo Shoot",
                "taskDescription": "Arrange for a professional photo shoot of the new product.",
                "taskDate": "2025-03-20",
                "category": "Photography"
            },
            {
                "active": true,
                "new_task": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Create Social Media Content",
                "taskDescription": "Develop content for social media platforms.",
                "taskDate": "2025-03-30",
                "category": "Marketing"
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare Presentation for Board",
                "taskDescription": "Create a presentation for the upcoming board meeting.",
                "taskDate": "2025-03-25",
                "category": "Admin"
            },
            {
                "active": false,
                "new_task": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Update Employee Records",
                "taskDescription": "Update the HR records of employees.",
                "taskDate": "2025-03-22",
                "category": "HR"
            },
            {
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Organize Office Space",
                "taskDescription": "Coordinate the cleanup and organization of the office space.",
                "taskDate": "2025-03-27",
                "category": "Admin"
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Create Product Demos",
                "taskDescription": "Develop product demo videos for new launches.",
                "taskDate": "2025-03-28",
                "category": "Marketing"
            },
            {
                "active": true,
                "new_task": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Update Product Documentation",
                "taskDescription": "Update the product manuals and technical documentation.",
                "taskDate": "2025-03-26",
                "category": "Documentation"
            },
            {
                "active": false,
                "new_task": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Customer Support Follow-up",
                "taskDescription": "Reach out to customers who raised issues last month.",
                "taskDate": "2025-03-23",
                "category": "Support"
            }
        ]
    }
];

const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
}];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))

}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    console.log(employees,admin)
}