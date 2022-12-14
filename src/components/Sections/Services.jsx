import React,{useEffect}  from "react";
import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";
import Lottie from 'react-lottie';
import aboutus from '../../assets/Lotties/aboutus.json';
import aboutusc from '../../assets/Lotties/about-us.json';

import Grid from '@material-ui/core/Grid';
// Components
import ClientSlider from "../Elements/ClientSlider";
import ClientSlider2 from "../Elements/ClientSlider2";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/add/1.png";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/3.png";
import AddImage4 from "../../assets/img/add/4.png";
import AOS from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
  root: {

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  rootgrid: {
  },
  title: {
    fontSize: '3rem',
    color: '#002060',
    fontFamily: 'Nunito'
  },
  colorText: {
    textAlign: 'center',
    color: '#4472c4',
  },
  compGrid: {
    justifyContent: 'center',
    padding: "2%"
  },
  compGrid2: {
    marginTop: '5%',
    verticalAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    padding: "2%",
  },
  minititle: {
    fontSize: '1rem',
    color: '#002060',
    fontFamily: 'Nunito',
  },
  listtitle: {
    color: '#4472c4'
  },
}));

export default function Services() {
  const classes = useStyles();
  useEffect(() => {
    AOS.init({
      ...AOS,
      duration:2000
    });
    AOS.refresh();
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: aboutusc,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Wrapper>
      <div className="whiteBg" style={{ padding: "0px 0" }}>

        <div  className="whiteBg">
          <div className="container">
            <ClientSlider2 />
          </div>
        </div>
      </div>
      
      <div className="lightBg" style={{ padding: "20px 0" }}>
        <div className="container">
        <h1 className="font18 semiBold">Our Projects </h1>
          <ClientSlider />
        </div>
      </div>
     
      <div className="whiteBg" style={{ padding: "0px 0" }}>
      
        <div  className="lightBg">
          <div id="about" className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft data-aos="fade-right">
                <h4 className="font15 semiBold">A few words about company</h4>
                <h1   className={classes.title}>
                  About <span className={classes.colorText}> US</span>
                </h1>
                <p className={classes.minititle}>
                Our team at BIM Intelligence Inc. work towards a common goal of creating the best value to our clients.
We streamline the building design and construction processes to reduce project time and expenses, while
improving the project quality. Our aim is to create shared virtual BIM models for all projects, so that
building designers, contractors, owners, and facility managers and all to have a common understanding
of their project.
                </p>
                <p className={classes.minititle}>
                  <br />Before the building phase, clashes between different design disciplines can be discovered and handled in
the BIM 3D model. Cost estimating, 4D modeling, energy analysis, simulations, facility management,
virtual reality, augmented reality, and BMS are all possible uses for the BIM model.
                </p>
                <p className={classes.minititle} >
                  <br />The following services are available from us:</p>
                <ul className={classes.listtitle}>
                  <li>??? Provide 2D design and construction drawings in AutoCAD and PDF</li>
                  <li>??? Model the architectural drawings in Autodesk Revit</li>
                  <li>??? Model the structural drawings in Autodesk Revit</li>
                  <li>??? Model the MEP drawings in Autodesk Revit </li>
                  <li>??? Perform clash detection in Navisworks </li>
                  <li>??? Create 4D models in Navisworks</li>
                  <li>??? Creating As Built Revit Models of existing buildings using LIDAR Technology</li>
                  <li>??? Lighting calculation and simulation based on Dialux platform </li>
                  <li>??? Energy optimization of Buildings </li>
                  <li>??? Computational Fluid Dynamics (CFD) Simulations of Spaces, Ducts and Pipes </li>
                  <li>??? Detailed Bill of material of MEP systems </li>
                  <li>??? Site visits on case-by-case basis</li>
                  <li>??? Large Scale BIM MEP Trainings for Companies</li>
                  <li>??? DYNAMO Based Automations for Repetitive tasks and for Extracting Project Data from Revit</li>
                  <li>??? Navisworks Based 3D Model Reviews</li>
                  <li>??? High-Definition Walkthrough Videos for Presentation and Viewing Purposes</li>
                  <li>??? Revit and AutoCAD Automations and Add-ins to Suit Customers??? special Requirements???</li>
                </ul>
                {/* <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0"}}>
                  <div style={{ width: "190px" }}>
                    <FullButton title="Get Started" action={() => alert("clicked")} />
                  </div>
                  <div style={{ width: "190px", marginLeft: "15px" }}>
                    <FullButton title="Contact Us" action={() => alert("clicked")} border />
                  </div>
                </ButtonsRow> */}
              </AddLeft>
              <AddRight data-aos="fade-left">
                <AddRightInner>
          <Lottie
            options={defaultOptions}
            height='auto'
            width='auto'
          />
                  {/* <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={AddImage1} alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={AddImage2} alt="office" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={AddImage3} alt="office" />
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={AddImage4} alt="office" />
                    </AddImgWrapp4>
                  </div> */}
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 50px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top:100px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;