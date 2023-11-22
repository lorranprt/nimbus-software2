import "./styles.css"
import styled from "styled-components";

const FooterContainer = styled.footer`
background-color: #black;
  padding: 20px
  color: #111b47;
  padding: 20px;
  text-align: center;
  list-style-type: none;
`;


const Footer = () => {
  return (
    <FooterContainer className="footer" style={{ padding: "20px" }}>
      <div class="row">
        <ul>
        <aStyled>Lorran Porto (2 periodo de Ciência de dados)</aStyled>
        <ul>
        <aStyled>Hannah Martins(2 periodo de Engenharia da Computação)</aStyled>
        </ul>
        <aStyled>Gulherme Vallim(2 periodo de Engenharia da Computação)</aStyled>
        <ul>
        </ul>
        <aStyled>João Gois(2 periodo de "ADS")</aStyled>
        </ul>
</div>
    </FooterContainer>
  );
};

export default Footer;
