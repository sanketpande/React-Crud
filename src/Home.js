import React from 'react';
import {useNavigate} from 'react-router-dom';

function Home (){
  const navigate = useNavigate();

  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate('/shot');
  };
	return (<><h1>Welcome to the world of Geeks!</h1>
    <button onClick={navigateToContacts}>Contacts</button>
  </>);
}

export default Home;
