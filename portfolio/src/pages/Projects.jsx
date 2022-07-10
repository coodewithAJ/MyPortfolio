import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    accordion:{
        width:"90%",
        marginLeft:"5%",
        marginTop:"0.7rem",
        marginBottom:"3.1rem",
        color:"grey"
    }
})


const Project = () => {
    const classes = useStyles()
    const projects = [
        {
            id:1,
            number:"1. Project-1",
            title1:"News-App",
            body1:"In this project i have created an app which will fetch the data from the api and shows you the latest news till now.",
            title2:"Why I Choose this project",
            body2:"Because i want to learn how to fetch up the data from an api",
            title3:"What techstack I used",
            body3:"HTML, CSS, Javascript, react, newsapi",
            title4:"What problem i faced",
            body4:"i want to show a specific type of news only not all but i dont know how can i do this ",
            title5:"How I solved that problem",
            body5:"I targeted the news with a specific keyword in an api"

        },
        {
            id:2,
            number:"2. Project-2",
            title1:"TextUtils",
            body1:"In this project i have created an app which will analyze your text according to your convience",
            title2:"Why I Choose this project",
            body2:"Because i want to learn mostly common used javascript through a project",
            title3:"What techstack I used",
            body3:"HTML, CSS, Javascript, react",
            title4:"What problem i faced",
            body4:"sometimes i want stuck in writing logics of some functions ",
            title5:"How I solved that problem",
            body5:"I use google for writing these logics"

        },
    ]
  return (
    <>
      <h1 style={{fontSize:"3rem",display:"flex",justifyContent:"center",marginTop:"1.3rem",color:"#00b894"}}>Projects</h1>
      {
        projects.map((project)=>{
            return(
                <div className={classes.accordion} key={project.id}>
                <h4 style={{marginBottom:"1rem",fontSize:"2rem"}}>{project.number}</h4>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                  >
                    <Typography><strong>{project.title1}</strong>  </Typography>
                  </AccordionSummary>
        
                  <AccordionDetails>
                    <Typography>{project.body1}</Typography>
                  </AccordionDetails>
                </Accordion>
        
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                  >
                    <Typography><strong>{project.title2}</strong>  </Typography>
                  </AccordionSummary>
        
                  <AccordionDetails>
                    <Typography>{project.body2}</Typography>
                  </AccordionDetails>
                </Accordion>
        
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                  >
                    <Typography><strong>{project.title3}</strong>  </Typography>
                  </AccordionSummary>
        
                  <AccordionDetails>
                    <Typography>{project.body3}</Typography>
                  </AccordionDetails>
                </Accordion>
        
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                  >
                    <Typography><strong>{project.title4}</strong>  </Typography>
                  </AccordionSummary>
        
                  <AccordionDetails>
                    <Typography>{project.body4}</Typography>
                  </AccordionDetails>
                </Accordion>
        
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                  >
                    <Typography><strong>{project.title5}</strong>  </Typography>
                  </AccordionSummary>
        
                  <AccordionDetails>
                    <Typography>{project.body5}</Typography>
                  </AccordionDetails>
                </Accordion>
              </div>

            )
        })
      }

    
    </>
  );
};

export default Project;
