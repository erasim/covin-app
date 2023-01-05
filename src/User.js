import React,{useState, useEffect} from 'react';
import { useSelector } from 'react-redux'


export default function User() {
  const id = useSelector(state=>state.id);
      const [Users, fetchUsers] = useState([])
      const getData2 = () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
          .then((res) => res.json())
          .then((res) => {
            console.log(res)
            fetchUsers(res)
          })
      }
    
      useEffect(() => {
        getData2()
      },[id])

    
      return (
        <>

<div className='userdata' >
<div className='card' >
  <img src={Users.image} className='card-img-top' alt='ndnd'/>
  <div className='card-body'>
    <p className='card-text'>{Users.description}</p>
  </div>
</div>


</div>

</>
      )
    }