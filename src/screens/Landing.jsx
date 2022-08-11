import React, { useEffect, useState, Fragment } from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import {ArcAppFooterDemo} from "../components/Sections/Footer"
import {
  FloatingMenu,
  MainButton,
  ChildButton,
  Directions
} from 'react-floating-button-menu';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import MessageIcon from '@material-ui/icons/Message';
import MdClose from '@material-ui/icons/Clear';
import CallIcon from '@material-ui/icons/Call';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link as Scroll } from "react-scroll";
import emailjs from '@emailjs/browser';

const useStyles = makeStyles(({ theme}) => ({
  fab: {
    position: 'fixed',
    bottom: 50,
    right:50,
  },
}));
export default function Landing() {
  const classes = useStyles();
  const [isFloatOpen, setIsFloat] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClosex = () => {
    setOpen(false);
  };
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mail: '',
    subject: ''
  });

  async function emailsubmit(){
    let modelobj = {
      from_name:formData.name,
      message:formData.mail,
      form_email:formData.subject
    }
    emailjs.send('service_8q6bbbn','template_sqzer17',modelobj,"Eb1pY9N3y6kqPDi_S").then(x=>{
      console.log("sdsds",x);
      setFormData({
        ...formData,
        name: '',
        mail: '',
        subject: ''
    });
    handleClosex();
     // toast.success("Success!One of our team member reach you soon");
    });
  }
  function handleChange(e) {
    const target = e.target
    const value = (target.name === 'isActive' || target.name === 'isErpEnabled') ? target.checked : target.value

    setFormData({
        ...formData,
        [e.target.name]: value
    });
}



  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <Projects />
      <Blog />
      <Pricing />
      <Contact />
      <ArcAppFooterDemo />
      <FloatingMenu
        className={classes.fab}
        slideSpeed={500}
        direction={Directions.Up}
        spacing={8}
        isOpen={isFloatOpen}
      >
        <MainButton
          iconResting={<RecordVoiceOverIcon style={{ fontSize: 30, color: '#002060' }} />}
          iconActive={<MdClose style={{ fontSize: 30, color: '#002060' }} />}
          onClick={() => setIsFloat(!isFloatOpen)}
          background="#4472c4"
          size={90}
        />
       
        <ChildButton
          to="pricing"
          icon={<CallIcon style={{ fontSize: 20, color: 'white' }} />}
          size={50}
          background="#4472c4"
        />
        
       
        <ChildButton
          icon={<MessageIcon style={{ fontSize: 20, color: 'white' }} />}
          background="#4472c4"
          size={50}
          onClick={handleClickOpen}
        />
       
      </FloatingMenu>


      <Dialog open={open} onClose={handleClosex} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Contact us via Email</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          <Grid container spacing={2} justifyContent='center'>
            <Grid item md={6} xs={12}>
              <TextField
                autoFocus
                id="name"
                size="small"
                variant="outlined"
                label="Name"
                name="name" 
                value={formData.name} 
                onChange={(e) => handleChange(e)}
                type="text"
                fullWidth
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                id="mail"
                size="small"
                variant="outlined"
                name="mail"
                value={formData.mail} 
                onChange={(e) => handleChange(e)}
                label="Email Address"
                type="email"
                fullWidth
              />
            </Grid>
            {/* <Grid item md={4} xs={12}>
              <TextField
                id="name"
                size="small"
                variant="outlined"
                label="Phone Number"
                type="text"
                fullWidth
              />
            </Grid> */}
          </Grid>
          <br/>
          <Grid container spacing={2} justifyContent='center'>
            <Grid item md={12} xs={12}>
              <TextField
                autoFocus
                id="subject"
                size="small"
                variant="outlined"
                multiline
                rows={4}
                name="subject" 
                value={formData.subject}
                onChange={(e) => handleChange(e)}
                label="Description"
                type="text"
                fullWidth
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosex} color="secondary">
            Cancel
          </Button>
          <Button  color="secondary" onClick={() => emailsubmit()}>
            Send Mail
          </Button>
        </DialogActions>
      </Dialog>

    </>
  );
}


