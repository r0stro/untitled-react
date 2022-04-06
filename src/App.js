import './App.css';
import Form from "./components/form/Form";
import Users from "./components/users/Users";
import {useEffect, useState} from "react";

function App() {

    let [users, setUsers] = useState([]);
    let [filter, setFilter] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers([...value])
                setFilter([...value])
            })
    },[])

    const getFilter = (data) => {
        let filterArr = [...users]

        if (data.name) {
            filterArr = filterArr.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()))
        }
        if (data.username) {
            filterArr = filterArr.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()))
        }
        if (data.email) {
            filterArr = filterArr.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()))
        }
        setFilter(filterArr)
    }

    return (
        <div>
            <Form getFilter={getFilter}/>
            <Users users={filter}/>
        </div>
    );
}

export default App;