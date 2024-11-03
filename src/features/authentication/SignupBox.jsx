import styled from "styled-components";
import VerRow from "../../ui/VerRow";
import HorRow from "../../ui/HorRow";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { signUp } from "../../services/api";
import { AppContext } from "../../services/AppContext";

const StyledSignupBox = styled(VerRow)`
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
  height: 4.5rem;
  border: none;
  background-color: #777;
  background-color: ${(prop) => (prop.active ? "#000" : "#999")};
  color: #fff;
  font-size: 1.8rem;
  border-radius: 9px;
  margin-top: 1rem;
  cursor: pointer;
`;
const FootText = styled.p`
  font-size: 1.6rem;
`;
const FootLink = styled(Link)`
  font-size: 1.6rem;
`;

function SignupBox() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupActive, setSignupActive] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(AppContext);

  useEffect(
    function () {
      if (name && email && password) setSignupActive(true);
      else setSignupActive(false);
    },
    [name, email, password]
  );

  async function handleSignup() {
    if (signupActive) {
      if (
        email.includes(".") &&
        email.includes("@") &&
        email.indexOf("@") < email.indexOf(".")
      ) {
        const user = await signUp(name, email, password);
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
    <StyledSignupBox>
      <Brand>
        <div>
          <img alt="logo" src="https://lfangmppnowruujdynrw.supabase.co/storage/v1/object/public/app/logo.png" height={"40px"} />
        </div>
        <HorRow>
          <H1>Road</H1>
          <ColoredH1>store</ColoredH1>
        </HorRow>
      </Brand>
      <LogH1>Sign Up</LogH1>
      <FormWrapper>
        <TextInput
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormWrapper>
      <Button active={signupActive} onClick={handleSignup}>
        Sign Up
      </Button>
      <HorRow>
        <FootText>Already have an account?</FootText>
        <FootLink to={"/authentication/log-in"}>Log in</FootLink>
      </HorRow>
    </StyledSignupBox>
  );
}

export default SignupBox;
