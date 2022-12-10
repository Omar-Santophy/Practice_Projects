import React, { useState } from 'react';
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../firebase';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';


function Login() {

  const goto =useNavigate();
  const [justifyActive, setJustifyActive] = useState('tab1');;

  const [userInfo,setUserInfo]=useState({
        email:"",
        password:""
      })
  const [userSignup,setUserSignup]=useState({
        name:"",
        usename:"",
        email:"",
        password:""
      })
      const logInHandler=()=>{
        console.log("usetDetails",userInfo)
        signInWithEmailAndPassword(auth,userInfo.email,userInfo.password)
        goto("/home")
        .catch(function(error) {
          console.log(error.code);
          console.log(error.message);
       });
      }
    const signUpInHandler=()=>{
      createUserWithEmailAndPassword(auth,userSignup.email,userSignup.password)
    }

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === 'tab1'}>

          <div className="text-center mb-3">
            <p>Sign in with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' onChange={(e)=>setUserInfo({...userInfo,email:e.target.value})} label='Email address' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' onChange={(e)=>setUserInfo({...userInfo,password:e.target.value})} label='Password' id='form2' type='password'/>

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100" onClick={()=>logInHandler()}>Sign in</MDBBtn>
          <p className="text-center">Not a member? <a href="#!">Register</a></p>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

          <div className="text-center mb-3">
            <p>Sign un with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput onChange={(e)=>setUserSignup({...userSignup,name:e.target.value})} wrapperClass='mb-4' label='Name' id='form1' type='text'/>
          <MDBInput onChange={(e)=>setUserSignup({...userSignup,usename:e.target.value})} wrapperClass='mb-4' label='Username' id='form1' type='text'/>
          <MDBInput onChange={(e)=>setUserSignup({...userSignup,email:e.target.value})} wrapperClass='mb-4' label='Email' id='form1' type='email'/>
          <MDBInput onChange={(e)=>setUserSignup({...userSignup,password:e.target.value})} wrapperClass='mb-4' label='Password' id='form1' type='password'/>

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>

          <MDBBtn className="mb-4 w-100" onClick={()=>signUpInHandler()}>Sign up</MDBBtn>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default Login;