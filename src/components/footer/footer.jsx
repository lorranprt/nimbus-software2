import "./styles.css"
import styled from "styled-components";

const FooterContainer = styled.footer`
background-color: #110438;
  padding: 20px;
  color: #111b47;
  padding: 20px;
  text-align: center;
  list-style-type: none;
  width: 100%;
  height: 50px;
`;



const Footer = () => {
  return (
    <FooterContainer className="footer" style={{ padding: "20px" }}> 

    </FooterContainer>
  );
};

export default Footer;
