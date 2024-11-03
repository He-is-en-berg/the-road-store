import styled from "styled-components";
import HorRow from "../ui/HorRow";
import { Outlet } from "react-router-dom";

const StyledLogin = styled(HorRow)`
  align-items: stretch;
  justify-content: space-between;
  background-color: #ffe3e3;
`;
const LeftDiv = styled(HorRow)`
  height: 100vh;
  /* justify-content: center; */
`;
const RightDiv = styled.div`
  height: 100vh;
  background-color: #d76c82;
  /* background-color: #000; */
  width: 60%;
  position: relative;
  margin: 1.2rem;
  border-radius: 9px;
`;
const LoginImg = styled.img`
  position: absolute;
  top: 18rem;
  left: -5rem;
  width: 78%;
`;

function Authentication() {
  return (
    <StyledLogin>
      <LeftDiv>
        <Outlet />
      </LeftDiv>
      <RightDiv>
        <LoginImg src="https://lfangmppnowruujdynrw.supabase.co/storage/v1/object/public/app/login.png" />
      </RightDiv>
    </StyledLogin>
  );
}

export default Authentication;
