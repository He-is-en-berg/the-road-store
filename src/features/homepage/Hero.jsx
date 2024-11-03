import styled from "styled-components";
import Header from "./Header";
import { HashLink } from "react-router-hash-link";

const StyledHero = styled.section`
  background-image: url("https://lfangmppnowruujdynrw.supabase.co/storage/v1/object/sign/app/hero2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhcHAvaGVybzIucG5nIiwiaWF0IjoxNzMwNjEzNzA5LCJleHAiOjIwNDU5NzM3MDl9.seWvQrPw8mr_PNnNBVP_pqQjncblJtHoT6R5WZc29l8");
  background-size: cover;
  /* filter: grayscale(20%); */
  background-position: bottom -5rem right -17rem;
  height: 95rem;
`;

const Container = styled.main`
  padding-top: 8.5rem;
  width: 50%;
  position: relative;
  /* filter: grayscale(10%); */
`;
const CaptionContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 17rem;
  padding-bottom: 2rem;
`;
const SubCaptionContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  /* padding: 15rem 0; */
`;
const Caption = styled.h1`
  color: #fff;
  text-transform: uppercase;
  font-size: 8.6rem;
  font-weight: 900;
  /* font-family: "Anton", sans-serif; */
  /* letter-spacing: 3px; */
  line-height: 1.1;
`;
const RedCaption = styled(Caption)`
  color: #c7253e;
`;
const SubCaption = styled.p`
  color: #fff;
  font-size: 1.8rem;
  /* text-transform: uppercase; */
  line-height: 1.5;
  letter-spacing: 1px;
  font-style: italic;
  font-weight: 400;
`;
const Button = styled(HashLink)`
  margin-top: 3rem;
  margin-left: 1rem;

  text-decoration: none;
  display: inline-block;
  padding: 8px 12px;
  font-size: 1.8rem;
  font-weight: 500;
  border-radius: 8px;
  font-family: sans-serif;
  cursor: pointer;
  color: #fff;
  /* border: 3px solid #000; */
  background-color: #000;
  border: 2px solid #fff;

  &:hover {
    border: 2px solid #c7253e;
    color: #c7253e;
  }
`;

function Hero() {
  return (
    <>
      <Header />
      <StyledHero>
        <Container>
          <CaptionContainer>
            <Caption>winning</Caption>
            <RedCaption>isn&apos;t</RedCaption>
            <Caption>comfortable</Caption>
          </CaptionContainer>
          <SubCaptionContainer>
            <SubCaption>
              &quot;if you don&apos;t hate running a little, you don&apos;t love
              running enough&quot;
            </SubCaption>
            <Button smooth to="#products">
              Shop Running
            </Button>
          </SubCaptionContainer>
        </Container>
        {/* for in-page navigation */}
        <div style={{ marginTop: "25rem" }} id="categories"></div>
      </StyledHero>
    </>
  );
}

export default Hero;
