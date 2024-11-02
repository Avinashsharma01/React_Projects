const student = {
    "_id": "67173bf10013bc740916572c",
    "name": "Avinash Sharma",
    "mobile": "+919876543210",
    "email": "Avinash@gmail.com",
    "course": "B-tech",
    "branch": "Information Technology",
    "enrollment": "11234567",
    "messages": [
        {
            "message": "now the date is working properly",
            "faculty": [
                "671732c90013bc7409165722"
            ],
            "_id": "6717eff224cebd2c2d279802",
            "date": "2024-10-22T18:33:22.102Z"
        },
        {
            "message": "now the date is working properly 23 date",
            "faculty": [
                "671732c90013bc7409165722"
            ],
            "_id": "6717f0a524cebd2c2d279807",
            "date": "2024-10-22T18:36:21.554Z"
        }
    ],
    "__v": 2
};

const facultyId = "671732c90013bc7409165722";

// Filter messages based on faculty ID
const filteredMessages = student.messages.filter(msg => msg.faculty.includes(facultyId));

// Display the filtered messages
console.log(filteredMessages);

