 import React from 'react'
 import Paper from '@mui/material/Paper';
 import TextField from '@mui/material/TextField';
 import Button from '@mui/material/Button';

 import { useState } from 'react';


 export default function LogIn(props) {
     const [userName, setUserName] = useState({userName:""})
     const [loggedIn, setLoggedIn] = useState(false)
     let user = {}
     console.log(loggedIn);
     const handleInput = (event) => {
         setUserName(event.target.value)
         console.log({userName});
     }

     const handleLogIn = (event) => {
         document.cookie = "loggedIn=true; max-age=60*1000"
         event.preventDefault()
         user.userName = userName
         user.loggedIn = loggedIn
         props.navLog(loggedIn)
         console.log("user: ", user)
         window.location.replace("/Listings")
     }

     return (
         <div>
             <Paper elevation={3} 
             style={{
                 width:"500px", 
                 height:"400px", 
                 margin:"40px auto auto auto",
                 display: "flex",
                 flexDirection:"column",
                 alignItems: "center",
                 justifyContent: "center"
                
                 }} >

                 <h1>Log In </h1>
                <div style={{margin:"20px",
                             padding: "10px",
                             display: "flex",
                             flexDirection: "column",
                             alignItems: "center"
                             }}>
                    <form onSubmit={handleLogIn} >
                     <TextField required fullWidth name="userName" onChange={handleInput} label="Username" variant="standard" />

                     <TextField required fullWidth label="Password" variant="standard" />
                         <Button variant="contained"
                         style={{
                             display: "flex",
                             flexDirection: "column",
                             alignItems: "center",
                             justifyContent: "center",
                             margin: "50px",
                             width: "100px"
                            
                         }}>Log In</Button>
                    </form>
                 </div> 
             </Paper>
         </div>
     )
 }