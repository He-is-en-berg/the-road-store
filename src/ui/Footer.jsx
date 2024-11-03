import styled from "styled-components";
import HorRow from "./HorRow";
import VerRow from "./VerRow";

const StyledFooter = styled(VerRow)`
  align-items: center;
  padding-top: 5rem;
  background-color: #000;
  gap: 4rem;
  position: relative;
  overflow: hidden;
`;

const FooterLogos = styled(HorRow)`
  gap: 2rem;
`;
const FooterLogoBox = styled(HorRow)`
  font-size: 1.8rem;
  background-color: #fff;
  background-color: ${(prop) => prop.backgroundColor};
  border-radius: 50%;
  padding: 6px;
`;
const FooterLinks = styled(HorRow)`
  gap: 3rem;
`;
const FooterLink = styled.p`
  font-size: 1.6rem;
  font-weight: 300;
  color: #fff;
`;
const FooterNoteWrapper = styled(HorRow)`
  background-color: #111;
  justify-content: center;
  margin-top: 1rem;
  padding: 1.5rem 0;
  width: 100%;
  z-index: 1;
`;
const FooterCopyrightText = styled.p`
  font-size: 1.4rem;
  font-weight: 200;
  color: #eee;
`;

function Footer() {
  return (
    <StyledFooter as={"footer"}>
      <FooterLogos>
        <FooterLogoBox backgroundColor={"#3B5998"}>
          <ion-icon name="logo-facebook"></ion-icon>
        </FooterLogoBox>
        <FooterLogoBox>
          <ion-icon name="logo-instagram"></ion-icon>
        </FooterLogoBox>
        <FooterLogoBox backgroundColor={"#008AD8"}>
          <ion-icon name="logo-twitter"></ion-icon>
        </FooterLogoBox>
        <FooterLogoBox>
          <ion-icon name="logo-google"></ion-icon>
        </FooterLogoBox>
        <FooterLogoBox backgroundColor={"#FF0000"}>
          <ion-icon name="logo-youtube"></ion-icon>
        </FooterLogoBox>
      </FooterLogos>
      <FooterLinks>
        <FooterLink>Home</FooterLink>
        <FooterLink>News</FooterLink>
        <FooterLink>Contact</FooterLink>
        <FooterLink>About</FooterLink>
        <FooterLink>Our Team</FooterLink>
      </FooterLinks>
      <FooterNoteWrapper>
        <FooterCopyrightText>
          Copyright &copy;2024, RoadStore by Akash
        </FooterCopyrightText>
      </FooterNoteWrapper>
    </StyledFooter>
  );
}

export default Footer;
