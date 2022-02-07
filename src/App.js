import React, {useState, useEffect} from "react";
import './App.css';
import axios from "axios";
import Users from "./components/Users"
import Pagination from "./components/Pagination";

const App = () => {

    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(res.data)
        }
        fetchUsers();
    }, []);

    const lastIndex = currentPage * usersPerPage
    const firstIndex = lastIndex - usersPerPage
    const currentUsers = users.slice(firstIndex, lastIndex)

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="App">
            <h1>List of Users</h1>
            <Users users={currentUsers}/>
            <Pagination usersPerPage={usersPerPage} allUsers={users.length} paginate={paginate}/>
        </div>
    );
}

export default App;
