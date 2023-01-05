import React from 'react';
import { useSelector } from 'react-redux';

export default function User() {
  const loading = useSelector((state) => state.users.selectedUserLoading);
  const isError = useSelector((state) => state.users.isSelectedUserLoadingFail);
  const user = useSelector((state) => state.users.selectedUser);

  if (!loading && !isError && !Object.keys(user).length) {
    return null;
  }
  return (
    <>
      {loading
        ? 'loading...'
        : isError
        ? 'something went wrong'
        : 
        <div className='Userdetail'>
        <div className='card'>
        <img src={user.data.avatar} className='card-img-top' alt='...'/>
        <div className='card-body'>
          <h5 className='card-title'>{user.data.first_name}&nbsp;{user.data.last_name}</h5>
          <p className='card-text'>{user.support.text}</p>
        </div>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>{user.data.email}</li>
          <li className='list-group-item'>{user.support.url}</li>
        </ul>
  
      </div>
      </div>
        
        }
    </>
  );
}
