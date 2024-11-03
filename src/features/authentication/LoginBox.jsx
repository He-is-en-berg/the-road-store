import styled from "styled-components";
import VerRow from "../../ui/VerRow";
import HorRow from "../../ui/HorRow";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Login } from "../../services/api";
import { AppContext } from "../../services/AppContext";

const StyledLoginBox = styled(VerRow)`
  margin: auto 15rem;
  gap: 3rem;
`;
const Brand = styled(HorRow)`
  gap: 0.5rem;
  margin-bottom: -2rem;
`;

const H1 = styled.h1`
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: -2px;
`;
const ColoredH1 = styled(H1)`
  color: #cc2b52;
`;
const LogH1 = styled(H1)`
  letter-spacing: 0;
  font-size: 4.4rem;
  text-transform: none;
`;
const FormWrapper = styled(VerRow)`
  gap: 3rem;
`;
const TextInput = styled.input`
  border: none;
  border-bottom: 1px solid #5252525a;
  font-size: 1.8rem;
  padding: 5px;
  outline: none;
  background-color: inherit;
  width: 40rem;
`;
const Button = styled.button`
  cursor: pointer;
  height: 4.5rem;
  border: none;
  background-color: #777;
  background-color: ${(prop) => (prop.active ? "#000" : "#999")};
  color: #fff;
  font-size: 1.8rem;
  border-radius: 9px;
  margin-top: 1rem;
`;
const FootText = styled.p`
  font-size: 1.6rem;
`;
const FootLink = styled(Link)`
  font-size: 1.6rem;
`;

function LoginBox() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginActive, setLoginActive] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(AppContext);

  useEffect(
    function () {
      if (email && password) setLoginActive(true);
      else setLoginActive(false);
    },
    [email, password]
  );

  async function handleLogin() {
    if (loginActive) {
      if (
        email.includes(".") &&
        email.includes("@") &&
        email.indexOf("@") < email.indexOf(".")
      ) {
        const user = await Login(email, password);
        if (user) {
          setUser(user);
          console.log(user);
          sessionStorage.setItem("user", JSON.stringify(user));
          navigate("/homepage");
        }
      } else alert("Enter a valid email");
    } else alert("Enter your details..");
  }
  return (
    <StyledLoginBox>
      <Brand>
        <div>
          <img
            alt="logo"
            src="https://lfangmppnowruujdynrw.supabase.co/storage/v1/object/public/app/logo.png"
            height={"40px"}
          />
        </div>
        <HorRow>
          <H1>Road</H1>
          <ColoredH1>store</ColoredH1>
        </HorRow>
      </Brand>
      <LogH1>Log In</LogH1>
      <FormWrapper>
        <TextInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormWrapper>
      <Button active={loginActive} onClick={handleLogin}>
        Login
      </Button>
      <HorRow>
        <FootText>Don&apos;t have an account?</FootText>
        <FootLink to={"/authentication/sign-up"}>Sign Up</FootLink>
      </HorRow>
    </StyledLoginBox>
  );
}

export default LoginBox;
