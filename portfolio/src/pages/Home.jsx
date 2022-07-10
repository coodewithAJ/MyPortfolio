import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles({
  root: {
    display: "flex",
   
    columnGap: "8%",
    // flexDirection:"row",
    justifyContent:"center"
    
  },
  img: {
    height: "100vh",
    width: "30vw",
    opacity: "0.9",
    borderRadius:"50%",
    marginRight:"1.5rem",
    
    
  },
  head: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.head}>
          <h4 style={{ fontSize: "4rem", marginLeft:"6rem", color:"#00b894" }}>Welcome to the world of web developers</h4>
          <p style={{ fontSize: "1.4rem", marginLeft:"6rem", marginTop:"0.7rem", color:"grey",lineHeight:"2rem"}}>
          I love what I do and I do what our clients love & work with great clients all over the world to create thoughtful and purposeful websites
          </p>
        </div>
<div>
        <img src="home.jpg" alt="image" className={classes.img} />
        </div>
      </div>
    </>
  );
};

export default Home;
