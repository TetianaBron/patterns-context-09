import React from 'react';
import withAuthContext from '../components/hoc/withAuthContext';

const Profile = ({ auth }) => (
  <>
    {auth.user ? 
      <>
        <h1>Profile page</h1>
    <img src={auth.user.avatar} alt="avatar" />
    <p>Name: {auth.user.name}</p>
      <p>Email: {auth.user.email}</p>
    </> : <p>You are not logged in</p>}  
  </>
);

export default withAuthContext(Profile);
