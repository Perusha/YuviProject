import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoImg from "../../assets/svg/Logo";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import logo from '../../Assets/Logo1.png'
import {
  makeStyles,
} from '@material-ui/core/styles';
import { FontProvider, Font } from '../../components/Font';

import { ColumnToRow, Item } from '@mui-treasury/components/flex';
import { NavMenu, NavItem } from '@mui-treasury/components/menu/navigation';
import {
  CategoryProvider,
  CategoryTitle,
  CategoryItem,
} from '@mui-treasury/components/menu/category';
import {
  SocialProvider,
  SocialLink,
} from '@mui-treasury/components/socialLink';

import { useMagCategoryMenuStyles } from '@mui-treasury/styles/categoryMenu/mag';
import { usePoofSocialLinkStyles } from '@mui-treasury/styles/socialLink/poof';
import { usePlainNavigationMenuStyles } from '@mui-treasury/styles/navigationMenu/plain';


const useStyles = makeStyles(({ palette, typography }) => ({
  top: {
    backgroundSize: 'cover',
    overflow: 'hidden',
  },
  middle: {
    backgroundColor: palette.type === 'dark' ? '#192D36' : palette.action.hover,
  },
  bottom: {
    backgroundColor:
      palette.type === 'dark' ? '#0F2128' : palette.action.selected,
  },
  newsletterText: {
    color: '#fff',
    fontSize: '0.875rem',
    textTransform: 'uppercase',
  },
  form: {
    margin: 0,
    minWidth: 343,
    fontSize: '0.875rem',
  },
  legalLink: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: '0.75rem',
    justifyContent: 'center',
    color: palette.text.hint,
    letterSpacing: '0.5px',
  },
  divider: {
    height: 2,
    margin: '-1px 0',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    filter: 'grayscale(80%)',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  info: {
    ...typography.caption,
    color: palette.text.hint,
    marginTop: 8,
  }
}));

export const ArcAppFooterDemo = React.memo(function ArcAppFooter() {
  const classes = useStyles();
  return (
    <FontProvider
      fonts={[{ font: 'Rambla', weights: [400, 700] }, { font: 'Nunito' }]}
    >
      <Box  width={'100%'}>
        <Box px={2} py={10} className={classes.middle}>
          <Container disableGutters>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4} lg={3}>
                <Box
                  component={'img'}
                  width={150}
                  height={150}
                 // src={logo}
                  alt=""
                  borderRadius={12}
                />
                <Typography className={classes.info}>
                  <Font index={1}>
                    BIM Intelligence Inc.<br/>
                    100 Consilium Place Suite 200<br/>
                    Scarborough ON M1H 3E3<br/>
                    Canada
                  </Font>
                </Typography>

                <Typography className={classes.info}>
                  <Font index={1}>
                    bim@gmail.com
                  </Font>
                </Typography>
              </Grid>
              <Grid item xs={12} md={8} lg={6}>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm={4}>
                    <CategoryProvider useStyles={useMagCategoryMenuStyles}>
                      <CategoryTitle>
                        <Font>CAD Services</Font>
                      </CategoryTitle>
                      <CategoryItem>
                        <Font index={1}>Snowflake Free</Font>
                      </CategoryItem>
                      <CategoryItem>
                        <Font index={1}>Coloristic</Font>
                      </CategoryItem>
                      <CategoryItem>
                        <Font index={1}>Summer free</Font>
                      </CategoryItem>
                      <CategoryItem>
                        <Font index={1}>Lucky store</Font>
                      </CategoryItem>
                    </CategoryProvider>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <CategoryProvider useStyles={useMagCategoryMenuStyles}>
                      <CategoryTitle>
                        <Font>BIM Modeling</Font>
                      </CategoryTitle>
                      <CategoryItem>
                        <Font index={1}>Mechanical</Font>
                      </CategoryItem>
                      <CategoryItem>
                        <Font index={1}>Electrical</Font>
                      </CategoryItem>
                      <CategoryItem>
                        <Font index={1}>Plumbing</Font>
                      </CategoryItem>
                      <CategoryItem>
                        <Font index={1}>Common Services</Font>
                      </CategoryItem>
                    </CategoryProvider>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <CategoryProvider useStyles={useMagCategoryMenuStyles}>
                      <CategoryTitle>
                        <Font>About</Font>
                      </CategoryTitle>
                      <CategoryItem>
                        <Font index={1}>Design Drawings</Font>
                      </CategoryItem>
                      <CategoryItem>
                        <Font index={1}>Shop Drawings</Font>
                      </CategoryItem>
                      <CategoryItem>
                        <Font index={1}>Others</Font>
                      </CategoryItem>
                    </CategoryProvider>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={8} lg={3} style={{ marginLeft: 'auto' }}>
                <CategoryProvider useStyles={useMagCategoryMenuStyles}>
                  <CategoryTitle>
                    <Font>Follow Us</Font>
                  </CategoryTitle>
                </CategoryProvider>
                <SocialProvider useStyles={usePoofSocialLinkStyles}>
                  <SocialLink brand={'Envelope'} />
                  <SocialLink brand={'GooglePlus'} />
                  <SocialLink brand={'Pinterest'} />
                  <SocialLink brand={'Dribbble'} />
                </SocialProvider>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Container disableGutters>
          <Divider className={classes.divider} />
        </Container>
        <Box px={2} py={3} className={classes.bottom}>
          <Container disableGutters>
            <ColumnToRow
              at={'md'}
              columnStyle={{ alignItems: 'center' }}
              rowStyle={{ alignItems: 'unset' }}
            >
              <Item grow ml={-2} shrink={0}>
                <NavMenu useStyles={usePlainNavigationMenuStyles}>
                  <ColumnToRow at={'sm'}>
                    <NavItem className={classes.legalLink}>
                      <Font>Terms & Conditions</Font>
                    </NavItem>
                    <NavItem className={classes.legalLink}>
                      <Font>Privacy Policy</Font>
                    </NavItem>
                    <NavItem className={classes.legalLink}>
                      <Font>Sitemap</Font>
                    </NavItem>
                  </ColumnToRow>
                </NavMenu>
              </Item>
              <Item>
                <Box py={1} textAlign={{ xs: 'center', md: 'right' }}>
                  <Typography
                    component={'p'}
                    variant={'caption'}
                  >
                    <Font>
                      Designed by Craftmen © Craftmen Studio 2022 All right
                      reserved
                    </Font>
                  </Typography>
                </Box>
              </Item>
            </ColumnToRow>
          </Container>
        </Box>
      </Box>
    </FontProvider>
  );
});

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      {/* <div className="darkBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
              <LogoImg />
              <h1 className="font15 extraBold whiteColor" style={{ marginLeft: "15px" }}>
                Fanatic
              </h1>
            </Link>
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} - <span className="purpleColor font13">Fanatic</span> All Right Reserved
            </StyleP>

            <Link className="whiteColor animate pointer font13" to="home" smooth={true} offset={-80}>
              Back to top
            </Link>
          </InnerWrapper>
        </div>
      </div> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;