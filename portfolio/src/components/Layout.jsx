import { Container, Drawer, List, ListItem, ListItemIcon, Typography } from "@material-ui/core";
import ListItemText from '@material-ui/core/ListItemText';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import DeveloperModeOutlinedIcon from '@material-ui/icons/DeveloperModeOutlined';

const useStyles = makeStyles({
    profileImg:{
        height:"160px",
        width:"140px",
        display:"flex",
    //    border:"2px solid black",
       marginLeft:"10px",
       borderRadius:"50%",
       marginTop:"15px",
       border:"0.1px solid grey"
    
    },
    typo:{
        marginTop:"13px",
        // fontSize:"17px",
        // display:"flex",
        // justifyContent:"center",
        fontFamily: 'Archivo Black sans-serif',
        fontWeight:"bold",
        color:"grey"
    },
    list:{
        background:"whitesmoke",
        height:"100vh",
        // width:"100%",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        // justifyContent:"center"

    },
    listItems:{
        display:"flex",
        // flexDirection:"row",
        justifyContent:"center",
        width:"80%",
        marginTop:"5px",
        
    },
    
    drawerPaper: {
        width: "18%",
      },
    child:{
        marginLeft:"206px",
        // border:"2px solid red",
        width:"85%"
    }
})

const Layout=({children})=>{
    const classes = useStyles()
    const navigate = useNavigate()
    const menuItems = [
        {
            id:1,
            icon:<HomeOutlinedIcon/>,
            text:"Home",
            path:"/"
        },
        {
            id:2,
            icon:<InfoOutlinedIcon/>,
            text:"About-me",
            path:"/about"
        },
        {
            id:3,
            icon:<ContactMailOutlinedIcon/>,
            text:"Hire-me",
            path:"/contact"
        },
        {
            id:4,
            icon:<WorkOutlineOutlinedIcon/>,
            text:"Projects",
            path:"/projects"
        },
        {
            id:5,
            icon:<DeveloperModeOutlinedIcon/>,
            text:"Skills",
            path:"/skills"
        }
    ]
    return(
        <>
        <Container>
            <Drawer variant="permanent" anchor="left" className={classes.drawer}  classes={{
          paper: classes.drawerPaper,
        }}>
                <List className={classes.list} >
                    <img src="profile.jpg" alt="img" className={classes.profileImg}/>
                    <Typography variant="h5" className={classes.typo}>Ashok Choudhary</Typography>
                  
                    <h4 style={{color:"grey", marginTop:"2px"}}>Developer</h4>

                    {
                        menuItems.map((item)=>{
                            return(
                                <div key={item.id} className={classes.listItems} >
                                <ListItem key={item.id} button onClick={()=>navigate(item.path)}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText>{item.text}</ListItemText>
                              
                            </ListItem>
                            </div>

                            )
                        })
                    }
                   
                </List>
            </Drawer>

            <div className={classes.child}>

            {children}
            </div>





        </Container>
        </>
    )
}


export default Layout;