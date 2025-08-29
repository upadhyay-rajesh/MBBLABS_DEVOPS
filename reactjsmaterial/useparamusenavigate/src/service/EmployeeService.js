import axios from 'axios';
class EmployeeService {
  
    getEmployees() {
            return axios.get("http://localhost:12002/api/v1/employees");
        }
    
    createEmployee(employee){
        return axios.post("http://localhost:12002/api/v1/employees",employee);
    }

    deleteEmployee(employeeId){
        return axios.delete("http://localhost:12002/api/v1/employees/"+employeeId);
    }

    getEmployeeById(employeeId){
        return axios.get("http://localhost:12002/api/v1/employees/"+employeeId);
    }
    updateEmployee(employee,employeeId){
        return axios.put("http://localhost:12002/api/v1/employees/"+employeeId,employee);
    }
}
export default new EmployeeService();