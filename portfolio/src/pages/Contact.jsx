import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
// import { useState } from "react";
import { useContext } from "react";
import { FavContext } from "../context/FavContext";



const useStyles = makeStyles({
  form: {
    // border: "2px solid red",
    marginLeft:"5rem",
    marginTop:"3rem"
   
  },
  input:{
    width:"50%",
    marginTop:"0.4rem",
    border:"none",
    backgroundColor:"whitesmoke",
    padding:"12px 10px",
    fontSize:"1.2rem",
    outline:"none"
    
  },
  label:{
    fontSize:"1.5rem"
  },
  btn:{
    marginTop:"1.1rem",
    marginLeft:"4.4rem"
  }
});

const Contact = () => {
  const {name,setName,email,setEmail,phone,setPhone} = useContext(FavContext)
  // const {email,setEmail} = useContext(FavContext)
  // const {phone,setPhone} = useContext(FavContext)
  
  
  const navigate = useNavigate()
  
  const submitHandler=()=>{
      alert("Thanks for Hiring me I will Contact You Soon")
    navigate("/")
    const clients = []
    const newClient = {
      name: name,
      email:email,
      phone:phone
    }
    clients.push(newClient)
    console.log(clients)
    
  }
 

  const classes = useStyles();
  return (
    <>
    <Alert severity="warning">
  
  <strong>Trust me You have no regret after working with me!</strong>
</Alert>
    
      <h2 style={{fontSize:"5rem",marginTop:"2rem",marginLeft:"5.5rem",color:"#00b894"}}>Want to Hire me as a Developer</h2>
      <form className={classes.form} onSubmit={submitHandler}>
        <div >
            <label className={classes.label} >Name: <input onChange={(event)=>setName(event.target.value)} value={name}  type="text" required className={classes.input}/> </label> <br />

            <label className={classes.label} >Email: <input onChange={(event)=>setEmail(event.target.value)} value={email}  type="email" required className={classes.input} /> </label> <br />

            <label className={classes.label} >Phone: <input onChange={(event)=>setPhone(event.target.value)} value={phone}  type="tel" required className={classes.input} /> </label> <br />

            <Button className={classes.btn} variant="contained" type="submit" color="primary">
          Submit
        </Button>
        

            </div>
      
      </form>
    </>
  );
};

export default Contact;
