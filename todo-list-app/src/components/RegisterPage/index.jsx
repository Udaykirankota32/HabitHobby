import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterImg from "../../assets/RegisterImage.svg";
import {
  RegisterBgContainer,
  RegisterBoxBgContainer,
  RegisterImage,
  FormContainer,
  StyledForm,
  FormHeading,
  InputGroup,
  FormLabel,
  FormInput,
  SubmitButton,
  SocialOptionsList,
  SocialButton,
  SocialIcon,
  Divider,
  Description,
  TransparentButton,
} from "./styled";

const signInOptionsList = [
  {
    id: "google",
    name: "Google",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  },
  {
    id: "x",
    name: "X",
    url: "https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000",
  },
  {
    id: "facebook",
    name: "Facebook",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg",
  },
];
const RegisterPage = () => {
  const navigate = useNavigate();
  const [viewPage, setViewPage] = useState("SignUp");
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");


  

  const onSubmitForm = async (e) => {
    e.preventDefault();

    const endpoint =
      viewPage === "SignUp"
        ? "http://localhost:5000/api/todos/register"
        : "http://localhost:5000/api/todos/login";

    const payload =
      viewPage === "SignUp"
        ? {
            name: userDetails.name,
            email: userDetails.email,
            password: userDetails.password,
          }
        : {
            email: userDetails.email,
            password: userDetails.password,
          };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };

    try {
      const response = await fetch(endpoint, options);
      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.message || "Authentication failed");
        return;
      }

      localStorage.setItem("jwt_token", data.token);
      localStorage.setItem("user_name", data.user.userName);
      localStorage.setItem("user_email", data.user.email);
      setErrorMessage("");
      navigate("/");
    } catch (error) {
      setErrorMessage("Unable to connect to server");
      console.log(error);
    }
  };

  const onClickCreateAccount = () => {
    setViewPage("SignUp");
    setErrorMessage("");
  };

  const onClickSignIn = () => {
    setViewPage("SignIn");
    setErrorMessage("");
  };

  const SignInViewPage = () => (
    <FormContainer>
      <StyledForm onSubmit={onSubmitForm}>
        <FormHeading>Welcome Back</FormHeading>
        <InputGroup>
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput
            type="email"
            placeholder="abcd123@gmail.com"
            id="email"
            onChange={(e) => {
              setUserDetails({ ...userDetails, email: e.target.value });
            }}
          />
        </InputGroup>
        <InputGroup>
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput
            type="password"
            id="password"
            onChange={(e) => {
              setUserDetails({ ...userDetails, password: e.target.value });
            }}
          />
        </InputGroup>
        <SubmitButton type="submit">Sign In</SubmitButton>
        {errorMessage ? <Description>{errorMessage}</Description> : null}
        <Divider>or sign in with</Divider>
        <SocialOptionsList>
          {signInOptionsList.map((each) => (
            <li key={each.id}>
              <SocialButton>
                <SocialIcon src={each.url} alt={each.name} /> sign in with{" "}
                {each.name}
              </SocialButton>
            </li>
          ))}
        </SocialOptionsList>
        <Description>Don't have a account ?</Description>
        <TransparentButton type="button" onClick={onClickCreateAccount}>
          Create account
        </TransparentButton>
      </StyledForm>
    </FormContainer>
  );

  const SignUpViewPage = () => (
    <FormContainer>
      <StyledForm onSubmit={onSubmitForm}>
        <FormHeading>Create Your Account</FormHeading>
        <InputGroup>
          <FormLabel htmlFor="name">Name</FormLabel>
          <FormInput
            type="text"
            id="name"
            onChange={(e) => {
              setUserDetails({ ...userDetails, name: e.target.value });
            }}
          />
        </InputGroup>

        <InputGroup>
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput
            type="email"
            placeholder="abcd123@gmail.com"
            id="email"
            onChange={(e) => {
              setUserDetails({ ...userDetails, email: e.target.value });
            }}
          />
        </InputGroup>
        <InputGroup>
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput
            type="password"
            id="password"
            onChange={(e) => {
              setUserDetails({ ...userDetails, password: e.target.value });
            }}
          />
        </InputGroup>
        <SubmitButton type="submit">Sign Up</SubmitButton>
        {errorMessage ? <Description>{errorMessage}</Description> : null}
        <Divider>or sign up with</Divider>
        <SocialOptionsList>
          {signInOptionsList.map((each) => (
            <li key={`signUp-${each.id}`}>
              <SocialButton>
                <SocialIcon src={each.url} alt={each.name} /> sign in with{" "}
                {each.name}
              </SocialButton>
            </li>
          ))}
        </SocialOptionsList>
        <Description>Already have an account?</Description>
        <TransparentButton type="button" onClick={onClickSignIn}>
          Sign In
        </TransparentButton>
      </StyledForm>
    </FormContainer>
  );

  return (
    <RegisterBgContainer>
      <RegisterBoxBgContainer>
        <RegisterImage src={RegisterImg} alt="Register" />
        {viewPage === "SignIn" ? SignInViewPage() : SignUpViewPage()}
      </RegisterBoxBgContainer>
    </RegisterBgContainer>
  );
};

export default RegisterPage;
