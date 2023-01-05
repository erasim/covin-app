import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCretors} from "./state/index"
export default function UserList() {
  const [Users, fetchUsers] = useState([]); const dispatch =useDispatch();
  const {fetchUsersdata} =bindActionCreators(actionCretors, dispatch);


 const  getData = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {fetchUsers(res);
      });
  };

  // test comment
  useEffect(() => {
    getData();

  }, []);

  return (
    <div>
      <h1>Data From Api</h1>
    
     <div className="alluserlist">

{Users.map((item) => (
  <ul key={item.id}>
      <button
        className='btn btn-primary'
        onClick={()=>{fetchUsersdata(item.id)
        }}
      >
        {item.id}
      </button>
 
  </ul>
))}
</div>
      
      
      
    </div>
  )
}
