import React, { useState } from 'react'
import Navbar from '../Layouts/Navbar';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Home = () => {

  const [counter, setCounter] = useState(0)




  return (
    <>
<Navbar navbarName="Logo Home"/>

<Container className='vh-100 d-flex align-items-center justify-content-center'>

<div className='shadow p-5' style={{borderRadius:"10px",width:"400px"}}>
<h2>Counter Application</h2>


<h1 className='text-center t-xxlg mt-5'>{counter}</h1>

<div className='d-flex justify-content-between mt-4'>
  <button type='button' className='btn btn-danger' onClick={()=> setCounter(counter - 1)}>Decrement</button>
  <button type='button' className='btn btn-danger' onClick={()=> setCounter(counter + 1)}>Increment</button>
</div>
</div>

</Container>


    </>
  )
}

export default Home