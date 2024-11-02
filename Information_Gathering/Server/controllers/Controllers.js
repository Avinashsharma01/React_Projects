import Faculty from '../model/faculties.js';
import Student from '../model/students.js';


const postMessage = async (req, res) => {
    const { facultyId, studentId, message, facultyEmail } = req.body;

    try {
        // Find the faculty
        const faculty = await Faculty.findById(facultyId);
        if (!faculty) {
            return res.status(404).json({ message: 'Faculty not found' });
        }

        // Find the student
        const student = await Student.findById(studentId);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        // Add the message to the student's messages array
        student.messages.push({
            message: message,
            faculty: faculty._id,  // Reference the faculty's ObjectId
            facultyEmail: facultyEmail
        });

        // Save the updated student record
        await student.save();

        // Respond with success
        res.status(200).json({ message: 'Message posted successfully', student });
    } catch (error) {
        console.error('Error posting message:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// const getUser = async (req, res) => {
//     try {
//         const students = await Student.find();
//         const faculties = await Faculty.find();

//         res.status(200).json(students);
//     } catch (error) {
//         console.error('Error getting users:', error);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// };

const getUser = async (req, res) => {
    try {
        // Extract the search query from the request
        const search = req.query.search ? req.query.search.toLowerCase() : '';

        // Create a regex for case-insensitive search
        const regex = new RegExp(search, 'i');

        // Fetch students based on the search term using the regex directly on the model
        const filteredStudents = await Student.find({ name: regex });

        // Return the filtered results
        res.status(200).json(filteredStudents);
    } catch (error) {
        console.error('Error getting users:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
const getFaculty = async (req, res) => {
    try {
        // Extract the search query from the request
        const search = req.query.search ? req.query.search.toLowerCase() : '';

        // Create a regex for case-insensitive search
        const regex = new RegExp(search, 'i');

        // Fetch students based on the search term using the regex directly on the model
        const filteredFaculties = await Faculty.find({ name: regex });

        // Return the filtered results
        res.status(200).json(filteredFaculties);
    } catch (error) {
        console.error('Error getting users:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};



// Export the controllers
export {
    postMessage,
    getUser,
    getFaculty

}