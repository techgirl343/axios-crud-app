import React, {useState, useEffect} from 'react'
import axios from 'axios'

function List() {
    const [posts, setPosts] = useState([])

    const fetchData = async() =>{
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos/')
            console.log(res)
            setPosts(res.data)
        } 
        catch(err) {
            console.log(err)
        }
    }
    useEffect(()=>{
        fetchData()
    }, [])
  return (
    <div>
        <table class="table">
        <thead class="thead-dark">
            <tr>
            <th scope="col">id</th>
            <th scope="col">userId</th>
            <th scope="col">title</th>
            
            </tr>
        </thead>
        <tbody>
        {posts.map((index,value)=>(
            <tr>
            <th scope="row">{posts[value]["id"]}</th>
            <td>{posts[value]["userId"]}</td>
            <td>{posts[value]["title"]}</td>
            
            </tr>
            ))}
        </tbody>
        </table>
        
    </div>
  )
}

export default List