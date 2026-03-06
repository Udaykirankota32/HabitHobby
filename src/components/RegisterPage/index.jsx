import {useState} from "react"
import RegisterImg from '../../assets/RegisterImage.svg'
import {RegisterBgContainer,RegisterBoxBgContainer,RegisterImage,FormContainer,StyledForm,FormHeading,InputGroup,FormLabel,FormInput,SubmitButton,SocialOptionsList,SocialButton,SocialIcon} from './styled'

const signInOptionsList = [
  {
    id: "google",
    name: "Google",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
  },
  {
    id: "x",
    name: "X",
    url: "https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000"
  },
  {
    id: "facebook",
    name: "Facebook",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
  }
];
const RegisterPage=()=>{
    const [userDetails,setUserDetails]=useState({
        email:'',
        password:'',
        isRegistered:false,
    })

    const onSubmitForm=(e)=>{
        e.preventDefault()
        setUserDetails({...userDetails,isRegistered:true})
    }

    return(
        <RegisterBgContainer>
        <RegisterBoxBgContainer>
          <RegisterImage src={RegisterImg} alt="sign in"  />
            <FormContainer>
                <StyledForm onSubmit={onSubmitForm}>
                    <FormHeading>Welcome Back</FormHeading>
                    <InputGroup>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <FormInput type="email" placeholder="abcd123@gmail.com" id="email" onChange={(e)=>{setUserDetails({...userDetails,email:e.target.value})}} />
                    </InputGroup>
                    <InputGroup>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <FormInput type="password" id="password" onChange={(e)=>{setUserDetails({...userDetails,password:e.target.value})}} />
                    </InputGroup>
                    <SubmitButton type="submit">Sign In</SubmitButton>
                    <SocialOptionsList>
                        {signInOptionsList.map(each=>(
                            <li key={each.id}><SocialButton><SocialIcon src={each.url} alt={each.name} /> sign in with {each.name}</SocialButton></li>
                        ))}
                    </SocialOptionsList>
                </StyledForm>
            </FormContainer>
        </RegisterBoxBgContainer>
        </RegisterBgContainer>
    )

}

export default RegisterPage
