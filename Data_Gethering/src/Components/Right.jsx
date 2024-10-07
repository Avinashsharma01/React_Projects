// import data from "./data.js";
// import { useState, useRef } from "react";
// import html2pdf from "html2pdf.js"; // Import html2pdf

// function Right() {
//     const [showTrue, setShowTrue] = useState(null);
//     const tableRef = useRef(); // Create a ref for the table

//     const handleAll = () => {
//         return data.map((item, key) => {
//             return (
//                 <tr key={key}>
//                     <td className="border px-4 py-2">{item.name}</td>
//                     <td className="border px-4 py-2">{item.email}</td>
//                     <td className="border px-4 py-2">{item.number}</td>
//                     <td className="border px-4 py-2">{item.response}</td>
//                 </tr>
//             );
//         });
//     };

//     const handleTrue = () => {
//         return data.map((item, key) => {
//             if (item.response === "Interested") {
//                 return (
//                     <tr key={key}>
//                         <td className="border px-4 py-2">{item.name}</td>
//                         <td className="border px-4 py-2">{item.email}</td>
//                         <td className="border px-4 py-2">{item.number}</td>
//                         <td className="border px-4 py-2">{item.response}</td>
//                     </tr>
//                 );
//             } else {
//                 return null;
//             }
//         });
//     };

//     const handleFalse = () => {
//         return data.map((item, key) => {
//             if (item.response === "Not Interested") {
//                 return (
//                     <tr key={key}>
//                         <td className="border px-4 py-2">{item.name}</td>
//                         <td className="border px-4 py-2">{item.email}</td>
//                         <td className="border px-4 py-2">{item.number}</td>
//                         <td className="border px-4 py-2">{item.response}</td>
//                     </tr>
//                 );
//             } else {
//                 return null;
//             }
//         });
//     };

//     // Function to generate PDF
//     const generatePDF = () => {
//         const element = tableRef.current; // Reference to the table
//         const options = {
//             margin: 0.5,
//             filename: 'table-data.pdf',
//             image: { type: 'jpeg', quality: 0.98 },
//             html2canvas: { scale: 2 },
//             jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
//         };
//         html2pdf().from(element).set(options).save();
//     };

//     return (
//         <div className="right w-[60%] bg-slate-400">
//             <div className="text-center">
//                 <div className="text sticky top-0 bg-cyan-600 text-white">
//                     <h1 className="text-4xl font-bold">Welcome to Data Dashboard</h1>
//                     <p className="text-lg">We provide the best data for your business</p>
//                 </div>

//                 <div className="tables h-[75vh] flex justify-center w-full">
//                     <table className="table-auto p-40" ref={tableRef}>
//                         <thead>
//                             <tr>
//                                 <th className="px-4 py-2">Name</th>
//                                 <th className="px-4 py-2">Email</th>
//                                 <th className="px-4 py-2">Number</th>
//                                 <th className="px-4 py-2">Response</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {
//                                 showTrue === null
//                                     ? handleAll()
//                                     : showTrue
//                                     ? handleTrue()
//                                     : handleFalse()
//                             }
//                         </tbody>
//                     </table>
//                 </div>

//                 <div className="btn fixed left-40 bottom-20">
//                     <button onClick={() => setShowTrue(null)} className="px-4 py-2 bg-blue-500 text-white">All</button>
//                     <button onClick={() => setShowTrue(true)} className="px-4 py-2 bg-green-500 text-white">Interested</button>
//                     <button onClick={() => setShowTrue(false)} className="px-4 py-2 bg-red-500 text-white">Not Interested</button>
//                     <button onClick={generatePDF} className="px-4 py-2 bg-purple-500 text-white">Download PDF</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Right;

import data from "./data.js";
import { useState, useRef } from "react";
import html2pdf from "html2pdf.js"; // Import html2pdf

function Right() {
    const [showTrue, setShowTrue] = useState(null);
    const tableRef = useRef(); // Create a ref for the table

    const handleAll = () => {
        return data.map((item, key) => {
            return (
                <tr key={key}>
                    <td className="border px-4 py-2">{item.id}</td>
                    <td className="border px-4 py-2">{item.name}</td>
                    <td className="border px-4 py-2">{item.email}</td>
                    <td className="border px-4 py-2">{item.number}</td>
                    <td className="border px-4 py-2">{item.response}</td>
                </tr>
            );
        });
    };

    const handleTrue = () => {
        return data.map((item, key) => {
            if (item.response === "Interested") {
                return (
                    <tr key={key}>
                        <td className="border px-4 py-2">{item.id}</td>
                        <td className="border px-4 py-2">{item.name}</td>
                        <td className="border px-4 py-2">{item.email}</td>
                        <td className="border px-4 py-2">{item.number}</td>
                        <td className="border px-4 py-2">{item.response}</td>
                    </tr>
                );
            } else {
                return null;
            }
        });
    };

    const handleFalse = () => {
        return data.map((item, key) => {
            if (item.response === "Not Interested") {
                return (
                    <tr key={key}>
                        <td className="border px-4 py-2">{item.id}</td>
                        <td className="border px-4 py-2">{item.name}</td>
                        <td className="border px-4 py-2">{item.email}</td>
                        <td className="border px-4 py-2">{item.number}</td>
                        <td className="border px-4 py-2">{item.response}</td>
                    </tr>
                );
            } else {
                return null;
            }
        });
    };

    // Function to generate PDF
    const generatePDF = () => {
        const element = tableRef.current; // Reference to the table
        const options = {
            margin: 0.5,
            filename: "table-data.pdf",
            image: { type: "jpeg", quality: 5 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        };
        html2pdf().from(element).set(options).save();
    };

    return (
        <div className="right w-[60%] bg-slate-400">
            <div className="text-center">
                <div className="text sticky top-0 right-0 bg-cyan-600 text-white h-[70px]">
                    <h1 className="text-3xl font-bold">
                        Welcome to Data Dashboard
                    </h1>
                    <p className="text-lg">
                        We provide the best data for your business
                    </p>
                </div>

                <div className="tables h-[75vh] flex justify-center w-full">
                    <table className="table-auto p-40" ref={tableRef}>
                        <thead>
                            {/* className="makeSticky sticky top-[70px]  bg-slate-400" */}
                            <tr>
                                <th className="px-4 py-2">ID</th>
                                <th className="px-4 py-2">NAME</th>
                                <th className="px-4 py-2">EMAIL</th>
                                <th className="px-4 py-2">NUMBER</th>
                                <th className="px-4 py-2">RESPONSE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {showTrue === null
                                ? handleAll()
                                : showTrue
                                ? handleTrue()
                                : handleFalse()}
                        </tbody>
                    </table>
                </div>

                <div className="btn fixed left-24 bottom-20">
                    <button
                        onClick={() => setShowTrue(null)}
                        className="px-4 py-2 bg-blue-500 text-white"
                    >
                        All
                    </button>
                    <button
                        onClick={() => setShowTrue(true)}
                        className="px-4 py-2 bg-green-500 text-white"
                    >
                        Interested
                    </button>
                    <button
                        onClick={() => setShowTrue(false)}
                        className="px-4 py-2 bg-red-500 text-white"
                    >
                        Not Interested
                    </button>
                    <button
                        onClick={generatePDF}
                        className="px-4 py-2 bg-purple-500 text-white"
                    >
                        Download PDF
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Right;
