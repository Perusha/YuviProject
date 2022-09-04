import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import { makeStyles } from '@material-ui/core/styles';
// Assets
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


export default function ClientSlider() {

  const classes = useStyles();

  const settings = {
    infinite: true,
    dots: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="services" className="whiteBg">
      <div className="container" >
        <Advertising className="flexSpaceCenter">
          <div data-aos="fade-right">
            <h4 className="font18 semiBold">Welcome to BIM Intelligence ...</h4>
            
            <p className={classes.minititle}>
            We are a group of CAD and BIM experts based in Canada catering to
construction SMEs and Property owners both in Canada and outside.
            </p>
            <p className={classes.minititle}>
              <br />Regardless of the size of a building project, avoiding any possible clashes between different design
disciplines before the actual building phase, is vital for the successful completion of the project in
time and within the budget. We use Building Information Modelling (BIM) technologies and
techniques to ensure that your building is designed to a model we would create which is well
coordinated and is free from any inter-discipline clashes.
            </p>
            <p className={classes.minititle}>
              <br />A shared virtual BIM model created for any project would allow building designers, contractors,
property owners and facility managers to have a common understanding of the project at every stage
of the project life cycle.
            </p>
            <p className={classes.minititle}>
              <br />Apart from the BIM modelling we offer a host of other related services to our clients. Contact us for more information.
            </p>
          </div>
        </Advertising>
      </div>
    </div>
  );
}
const Advertising = styled.div`
  margin: 10px 0;
  padding: 30px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 40px 0 0px 0;
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
const LogoWrapper = styled.div`
  width: 280px;
  height: 250px;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  padding: 3%;
`;