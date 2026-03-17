import { useState } from "react";
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
  const [viewPage, setViewPage] = useState("SignUp");
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log("Form is submitted");
  };

  const onClickCreateAccount = () => {
    setViewPage("SignUp");
  };

  const onClickSignIn = () => {
    setViewPage("SignIn");
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
            onClick={(e) => {
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
        <Divider>or sign up with</Divider>
        <SocialOptionsList>
          {signInOptionsList.map((each) => (
            <li key={`signUp-$`}>
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
        {viewPage == "SignIn" ? SignInViewPage() : SignUpViewPage()}
      </RegisterBoxBgContainer>
    </RegisterBgContainer>
  );
};

export default RegisterPage;
