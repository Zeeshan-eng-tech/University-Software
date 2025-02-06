'use client'
import { useEffect, useState } from "react";

const StudentData = () => {
  const [students, setStudents] = useState([]);
  const deleteStudents = async (id) => {
    try {
        const response = await fetch('https://676a9975863eaa5ac0defd39.mockapi.io/Students/'+id,{
            method:"DELETE"
        });
        const data = await response.json();
        console.log(data);
        fetchStudents();

      } catch(error) {
         console.log('failed! to delete students:',error);
      }
    }
    const fetchStudents = async () => {
        try {
          const response = await fetch('https://676a9975863eaa5ac0defd39.mockapi.io/Students');
          const data = await response.json();
          setStudents(data.reverse());
        } catch (error) {
          console.error("Error fetching students:", error);
        }
      };

    useEffect(() => {
    fetchStudents();
    }, []);
  return (
<table
  className="table table-bordered"
  style={{
    tableLayout: "fixed",
    wordWrap: "break-word",
    marginBottom: "1rem",
    borderSpacing: "0",
    width: "100%",
  }}
>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>WhatsApp</th>
          <th>Gender</th>
          <th>City</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {students?.map((student) => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.whatsapp}</td>
            <td>{student.gender}</td>
            <td>{student.city}</td>
            <td>
              <button className="btn btn-warning btn-sm me-2">Edit</button>
              <button className="btn btn-danger btn-sm" onClick={() => deleteStudents(student.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function Students() {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [whatsapp,setWhatsapp] = useState();
    const [city,setCity] = useState();
    const [gender,setGender] = useState();
    const formHandle = async () => {
        const student = {
          name: name,
          email: email,
          whatsapp: whatsapp,
          city: city,
          gender: gender,
        };
    console.log(student);
    }
    return (
    <div>
      <div className="container py-5">
        <div className="row">
          {/* Left Column: Form */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-header bg-primary text-white">
                Insert Student
              </div>
              <div className="card-body">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onClick={(event) => setName(event.target.value)}
                      id="name"
                      placeholder="Enter Name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      onClick={(event) => setEmail(event.target.value)}
                      id="email"
                      placeholder="Enter Email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="whatsapp" className="form-label">
                      WhatsApp
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onClick={(event) => setWhatsapp(event.target.value)}
                      id="whatsapp"
                      placeholder="Enter WhatsApp Number"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="gender" className="form-label">
                      Gender
                    </label>
                    <select className="form-select" onClick={(event) => setGender(event.target.value)} id="gender" required>
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="city" className="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onClick={(event) => setCity(event.target.event)}
                      id="city"
                      placeholder="Enter City"
                      required
                    />
                  </div>
                  <button type="button" className="btn btn-primary w-100" onClick={formHandle}>
                    Add Student
                  </button>
              </div>
            </div>
          </div>

          {/* Right Column: Data */}
          <div className="col-md-8">
            <div className="card">
              <div className="card-header bg-success text-white">
                Students List
              </div>
              <div className="card-body">
                <StudentData />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
