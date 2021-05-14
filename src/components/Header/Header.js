import React, { useContext } from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
  const [signInUser, setSignInUser]   =  useContext(UserContext);
    const history = useHistory();
    const login = () =>{
        history.push('/login');
    }
    return (
      <div>

        <nav className='navbar navbar-expand-lg navbar-light bg-info fw-bold'>
                <div className='container'>
                    <Link to='/' className='navbar-brand fs-3 text-uppercase'>Stockholm's Transportation (ST)</Link>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav ml-auto mb-2 mb-lg-0'>
                            <li className='nav-item px-3 mod'>
                                <Link to='/home' className='nav-link active'>Home</Link>
                            </li>
                            <li className='nav-item px-3 mod'>
                                <Link to='/home' className='nav-link active'>Destination</Link>
                            </li>
                            <li className='nav-item px-3 mod'>
                                <Link to='/contact' className='nav-link active'>Contact</Link>
                            </li>                    
                        {
                            (signInUser?.email) ? 
                            <li className="nav-item px-3 pt-2">
                            <p className='nav-link active text-center'>
                            {signInUser.displayName}
                            </p> 
                            </li> : ''
                        }
                        {
                             (signInUser?.email)? <button style={{height: '45px'}} onClick={()=>setSignInUser({})} className="btn btn-danger nav-link active text-white">LOGOUT</button> : <button style = {{height: '45px'}} onClick={login} className="btn btn-primary nav-link active text-white text-center">LOGIN</button>
                        }

                        </ul>

                    </div>
                </div>
            </nav>


        </div>
        
//     <div className="header">
//           {/* <Nav defaultActiveKey="/home" as="ul">
//         <Nav.Item as="li">
//             <Nav.Link href="/home">Active</Nav.Link>
//         </Nav.Item>
//             <Nav.Item as="li">
//             <Nav.Link eventKey="link-1" >Link</Nav.Link>
//              </Nav.Item>
//             <Nav.Item as="li">
//             <Nav.Link eventKey="link-2" >Link</Nav.Link>
//         </Nav.Item>
//         </Nav> */}


// <nav class="navbar navbar-expand-lg ">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Stockholm's Transportation (ST)</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
//         <li class="nav-item">
//           <Link to="/home">Hem</Link>
//         </li>
//         <li class="nav-item">
//           <Link to="/destination">Destination</Link>
//         </li>
//         <li class="nav-item">
//           <Link to="/blog">Blogg</Link>
//         </li>
//         <li class="nav-item">
//           <Link to="/contact">Kontakt</Link>
//         </li>
//         <li class="nav-item">
//           <Link to="/login">Logga in</Link>
//         </li>
//         {/* <li class="nav-item">
//           <a class="nav-link" href="#">Link</a>
//         </li> */}
       
//       </ul>

//     </div>
//   </div>
// </nav>



//       {/* <nav>
//         <div style={{textAlign: 'left'}}> <a href="#" >SL</a> </div>
//         <div  style={{textAlign: 'right'}}>
//         <a href="#">Home</a>
//         <a href="#">Destination</a>
//         <a href="#">Blog</a>
//         <a href="#">Contact</a>
//         <a href="#">Login</a>
//         </div>
      
//       </nav> */}
      
  
        
//         </div>
        
        
    );
};

export default Header;