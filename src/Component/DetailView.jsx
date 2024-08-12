import React ,{useEffect,useState}from 'react'
import "./style.css"
import axios from "axios"
import { useParams } from 'react-router-dom';

function DetailView() {
    const {id} = useParams();
    
    const [item, setItem] = useState({});

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            setItem(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [id]);
  return (
    <div>
        <h1 className='title'>Detailed Page</h1>
        <div className='division'>
            <h2  className='item-title'>{item.title}</h2>
            <p className='item-body'>{item.body}</p>
        </div>
    </div>
  )
}

export default DetailView