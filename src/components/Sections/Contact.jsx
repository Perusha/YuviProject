import React, { useEffect, useState, Fragment } from "react";
import styled from "styled-components";
// Assets
import ContactImg1 from "../../assets/img/contact-1.png";
import ContactImg2 from "../../assets/img/contact-2.png";
import ContactImg3 from "../../assets/img/contact-3.png";
import emailjs from '@emailjs/browser';
//import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {

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
    <Wrapper id="contact">
      <div >
      {/* <ToastContainer 
      position="bottom-right"
      pauseOnHover
      /> */}
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's get in touch</h1>
            {/* <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p> */}
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form>
                <label className="font13">First name:</label>
                <input type="text" id="fname" name="name" value={formData.name}  onChange={(e) => handleChange(e)} className="font20 extraBold" />
                <label className="font13">Email:</label>
                <input type="text" id="email" name="mail" value={formData.mail}  onChange={(e) => handleChange(e)}  className="font20 extraBold" />
                <label className="font13">Subject:</label>
                <textarea rows="4" cols="50" type="text" id="message" name="subject" value={formData.subject}  onChange={(e) => handleChange(e)} className="font20 extraBold" />
              </Form>
              <SumbitWrapper className="flex">
                <ButtonInput type="button"  onClick={() => emailsubmit()} value="Send" className="pointer animate radius8" style={{ maxWidth: "220px" }} />
              </SumbitWrapper>
            </div>
            {/* <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div style={{ width: "50%" }} className="flexNullCenter flexColumn">
                <ContactImgBox>
                  <img src={ContactImg1} alt="office" className="radius6" />
                </ContactImgBox>
                <ContactImgBox>
                  <img src={ContactImg2} alt="office" className="radius6" />
                </ContactImgBox>
              </div>
              <div style={{ width: "50%" }}>
                <div style={{ marginTop: "100px" }}>
                  <img src={ContactImg3} alt="office" className="radius6" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;









