import React,{useState,useEffect}from 'react'
import axios from "axios"
import "./style.css"
import { useNavigate } from 'react-router-dom';

function ListView() {


    const navigate = useNavigate();
    const [lists, setLists] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            setLists(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    const handleItemClick = (id) => {
        navigate(`/detailed/${id}`);
    }

  return (

    <div className='listview'>
    <h1 className='list-h1'>List</h1>
    <ul className='list-ul '>
      {lists.map((item) => (
          <li className='list-key' key={item.id} onClick={() => handleItemClick(item.id)}>
              <h2 className='item-list'>{item.title}</h2>
              <p className='item-body'>{item.body}</p>
          </li>
      ))}
    </ul>
  </div>
  )
}

export default ListView