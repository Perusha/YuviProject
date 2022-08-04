import React,{useEffect}  from "react";
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../assets/img/projects/1.png";
import ProjectImg2 from "../../assets/img/projects/2.png";
import ProjectImg3 from "../../assets/img/projects/3.png";
import ProjectImg4 from "../../assets/img/projects/4.png";
import ProjectImg5 from "../../assets/img/projects/5.png";
import ProjectImg6 from "../../assets/img/projects/6.png";
import AddImage2 from "../../assets/img/add/add2.png";
import img1 from '../../assets/img/images/bg1.jpg';
import img2 from '../../assets/img/images/bg2.jpg';
import img3 from '../../assets/img/images/bim1.jpg';
import img4 from '../../assets/img/images/MEP-BIM.jpeg';
import img5 from '../../assets/img/images/project-in-revit-bim.jpg';
import img6 from '../../assets/img/images/electrical.jpg';
import img7 from '../../assets/img/images/CAD3.jpg';
import img8 from '../../assets/img/images/CAD1.jpeg';
import img9 from '../../assets/img/images/CAD2.png';
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
    fontFamily: 'Nunito',
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

export default function Projects() {
  const classes = useStyles();
  useEffect(() => {
    AOS.init({
      ...AOS,
      duration:2000
    });
    AOS.refresh();
  }, []);

  return (
    <>
    <Wrapper   id="projects">
      <div data-aos="fade-left" className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className={classes.title}>
              BIM
              <span className={classes.colorText}> Services</span></h1>
            <p className={classes.minititle}>
              Engineers can use CAD technologies to create various elements of an overall design in a precise and detailed manner. BIM Intelligence provides AutoCAD drafting, PDF to AutoCAD conversion, modifying the client's AutoCAD files, bespoke automated AutoCAD tools and exporting Revit projects as AutoCAD files.”
              <br />
              {/* labore et dolore magna aliquyam erat, sed diam voluptua. */}
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={img1}
                title="Mechanical"
                text="Be a Legend!"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={img6}
                title="Electrical"
                text="Time to choose side!"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={img4}
                title="Plumbing"
                text="What are you waiting?"
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={img3}
                title="Common"
                text="What are you waiting?"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={img5}
                title="Special"
                text="What are you waiting?"
                action={() => alert("clicked")}
              />
            </div>
            {/* <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg6}
                title="Awesome Project"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => alert("clicked")}
              />
            </div> */}
          </div>
          {/* <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div> */}
        </div>
      </div>
      
    </Wrapper>
    <Wrapper   id="blog">
    <div data-aos="fade-left" className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
              <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={img8}
                title="Design Drawing"
                text="Design Drawing"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={img9}
                title="Shop Drawing"
                text="Shop Drawing"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={img7}
                title="Others"
                text="Others"
                action={() => alert("clicked")}
              />
            </div>
          </div>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              {/* <h4 className="font15 semiBold">A few words about company</h4> */}
              <h1 className={classes.title}>
                CAD <span className={classes.colorText}> Services</span>
              </h1>
              <p className={classes.minititle}>
                Engineers can use CAD technologies to create various elements of an overall design in a precise and detailed manner. BIM Intelligence provides AutoCAD drafting, PDF to AutoCAD conversion, modifying the client's AutoCAD files, bespoke automated AutoCAD tools and exporting Revit projects as AutoCAD files.”
              </p>
              {/* <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                <div style={{ width: "190px" }}>
                  <FullButton title="Get Started" action={() => alert("clicked")} />
                </div>
                <div style={{ width: "190px", marginLeft: "15px" }}>
                  <FullButton title="Contact Us" action={() => alert("clicked")} border />
                </div>
              </ButtonsRow> */}
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
    </>
    
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
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
  position: relative;
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
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -160px;
  left: -40px;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
