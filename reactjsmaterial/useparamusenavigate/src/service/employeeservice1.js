import axios from 'axios';
import { Observable } from 'rxjs';

class EmployeeService1 {
   getEmployees(){
        return axios.get("http://localhost:12002/api/v1/employees");
    }
    createEmployee(employee){
        return axios.post("http://localhost:12002/api/v1/employees", employee);
    }
    updateEmployee(id, employee){
        return axios.put(`http://localhost:12002/api/v1/employees/${id}`, employee);
    }
    deleteEmployee(id){
        return axios.delete(`http://localhost:12002/api/v1/employees/${id}`);
    }
    getEmployeeById(id){
        return axios.get(`http://localhost:12002/api/v1/employees/${id}`);
    }
}
export default new EmployeeService1();