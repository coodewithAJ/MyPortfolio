import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    accordion:{
        width:"80%",
        marginTop:"5%",
        marginLeft:"10%"
        
       
    }
})

const About=()=>{
    const classes = useStyles()
    const details = [
        {
            id:1,
            title:"Who am i ?",
            body:"Iam Ashok from jhunjhunu Rajasthan currently working as a web-developer  "
        },
        {
            id:2,
            title:"Want to know a sercret ?",
            body:"i love coding and creating beautiful, usefull websites more then a cup of tea."
        },
        {
            id:3,
            title:"What is my purpose in life ?",
            body:"I want to become a great developer over the time who always do satisfying work for their client"
        },
        {
            id:4,
            title:"Do i have any regret in my life ?",
            body:"Yes i was preparing for IIT-JEE iam not getting selected there but this motivates me now to do work hard"
        }
    ]
    return(
        <>
         <h2 style={{display:"flex",justifyContent:"center",fontSize:"5rem",marginTop:"2rem",color:"#00b894"}}>About Me</h2>


         <div className={classes.accordion}>
         {
            details.map((detail)=>{
                return(
                    
                    <Accordion key={detail.id} >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content">
                    <Typography>{detail.title}</Typography>
        
                    </AccordionSummary>
        
                    <AccordionDetails>
                  <Typography>
                   {detail.body}
                  </Typography>
                </AccordionDetails>
                </Accordion>
                

                )
            })

         }
         </div>




      


        </>
    )
}

export default About;