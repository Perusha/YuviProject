import React from "react";
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import HeaderImage from "../../assets/img/header-img.png";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
import Lottie from 'react-lottie';
import animationData from '../../assets/Lotties/city.json';
import animationData2 from '../../assets/Lotties/data2.json';
import animationData3 from '../../assets/Lotties/bim1.json';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  container: {
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    color: '#002060'
  },
  colorText: {
    textAlign: 'center',
    color: '#4472c4',
  },
  minititle: {
    fontSize: '1.5rem',
    color: '#002060',
    fontFamily: 'Nunito',
  },
  root: {
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/whitebg4.png'})`,
  }
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Wrapper id="home" >
        <br />
        <br />

        <Carousel interval={8000} indicators={true} >
          <HeaderStage1 />
          <HeaderStage2 />
          <HeaderStage3 />
        </Carousel>
      </Wrapper>


    </div>
  );
}

export function HeaderStage1() {
  const classes = useStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div>
      <Grid container justify='center' >
        <Grid item md={6}>
          <Lottie
            options={defaultOptions}
            height='auto'
            width='auto'
          />
        </Grid>
      </Grid>
      <br />
      <Grid container justify='center' >
        <Grid item className={classes.container}>
          <h1 className={classes.title}>
            Welcome to
            <span className={classes.colorText}> BIM INTELIGENCE INC.</span>
          </h1>

        </Grid>
      </Grid>

      <Grid container justify='center' >
        <Grid item >
          <p className={classes.minititle}>
            beyond information modeling..
          </p>
        </Grid>
      </Grid>
    </div>
  );
}



export function HeaderStage2() {
  const classes = useStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div>
      <Grid container justify='center' >
        <Grid item md={6}>
          <Lottie
            options={defaultOptions}
            height='350px'
            width='500px'
          />
        </Grid>
      </Grid>
      <br />
      <Grid container justify='center' >
        <Grid item className={classes.container}>
          <h1 className={classes.title}>
            CAD
            <span className={classes.colorText}> Services</span>
          </h1>


        </Grid>
      </Grid>

      <Grid container justify='center' >
        <Grid item >
          <p className={classes.minititle}>
            beyond information modeling..
          </p>
        </Grid>
      </Grid>
    </div>
  );
}



export function HeaderStage3() {
  const classes = useStyles();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData3,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div>
      <Grid container justify='center' >
        <Grid item md={6}>
          <Lottie
            options={defaultOptions}
            height='350px'
            width='500px'
          />
        </Grid>
      </Grid>
      <br />
      <Grid container justify='center' >
        <Grid item className={classes.container}>
          <h1 className={classes.title}>
            BIM
            <span className={classes.colorText}> Services</span>
          </h1>


        </Grid>
      </Grid>

      <Grid container justify='center' >
        <Grid item >
          <p className={classes.minititle}>
            beyond information modeling..
          </p>
        </Grid>
      </Grid>
    </div>
  );
}
const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;


