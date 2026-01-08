import React,{useEffect, useState} from "react";
import { ListEmployees,deleteEmployee } from "../assets/services/EmployeeService";
import { useNavigate  } from "react-router-dom";

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        getAllEmployees();
        
    }, []);

    function getAllEmployees(){
      ListEmployees().then((response) => {
            setEmployees(response.data);
        }).catch((error) => {
            console.error( error);
        }); 
    }

    function addNewEmployee() {
        navigator('/add-employee');
       
    }
    function updateEmployee(id){
        navigator(`/edit-employee/${id}`);
    }

    function removeEmployee(id){
      console.log(id);

      deleteEmployee(id).then((response)=>{
        getAllEmployees();
    }).catch((error)=>{
        console.error(error);
    });
    }

  const dummyData = [
    { id: 20, firstName: "Rony", lastName: "Dutta", email: "rony2@gmail.com" },
    { id: 22, firstName: "Sanju", lastName: "Dutta", email: "sanju2@gmail.com" },
    { id: 23, firstName: "Vicky", lastName: "Saha", email: "vic2@gmail.com" },
    { id: 24, firstName: "Raj", lastName: "Saha", email: "raj2@gmail.com" }
  ];

  return (
  <div className="container-fluid py-5">
  <div className="row justify-content-center">
    <div className="col-12 col-md-10 col-lg-8">
      <h2 className="text-center mb-4 fw-bold">List of Employees</h2>
       <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>

      <div className="card shadow-sm mx-auto">
        <div className="card-body p-0">
          <div className="table-responsive">
           
            <table className="table table-hover mb-0 align-middle">
              <thead className="table-light">
                <tr>
                  <th className="py-3 px-4 text-center">Employee Id</th>
                  <th className="py-3 px-4">First Name</th>
                  <th className="py-3 px-4">Last Name</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map(employee => (
                  <tr key={employee.id}>
                    <td className="py-3 px-4 text-center">{employee.id}</td>
                    <td className="py-3 px-4">{employee.firstName || '—'}</td>
                    <td className="py-3 px-4">{employee.lastName || '—'}</td>
                    <td className="py-3 px-4">{employee.email}</td>
                    <td>
                      <button className='btn btn-info' onClick={()=>updateEmployee(employee.id)}>update</button>
                      <button className='btn btn-danger'onClick={()=>removeEmployee(employee.id)}
                        style = {{marginLeft:'10px'}}>Delete
                        
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
  );

};

export default ListEmployeeComponent;
