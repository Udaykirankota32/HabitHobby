import styled from "styled-components"


export const RegisterBgContainer=styled.div`
    background-color:#F5F5F5;
    width:100vw;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

export const RegisterBoxBgContainer=styled.div`
    width:80vw;
    height:80vh;
    border:1px solid black;
    border-radius:20px;
    overflow:hidden;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`
export const RegisterImage=styled.img`
    width:60%;
    height:100%;
    object-fit:cover;
    min-width:0;
    flex-shrink:1;
    border-right:1px solid black;
`

export const FormContainer=styled.div`
    width:40%;
    height:100%;
    display:flex;
    background-color:#ffffff;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:20px;
    box-sizing:border-box;
    flex-shrink:0;
    overflow-y:auto;
`

export const StyledForm=styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    gap:18px;
`

export const FormHeading=styled.h1`
    font-size:28px;
    font-weight:700;
    color:#1a1a2e;
    margin-bottom:10px;
    font-family:'Segoe UI', sans-serif;
`

export const InputGroup=styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    gap:6px;
`

export const FormLabel=styled.label`
    font-size:14px;
    font-weight:600;
    color:#4a4a4a;
    font-family:'Segoe UI', sans-serif;
`

export const FormInput=styled.input`
    padding:10px 14px;
    border:1.5px solid #d1d1d1;
    border-radius:8px;
    font-size:14px;
    outline:none;
    transition:border-color 0.3s ease;
    background-color:#fafafa;
    &:focus{
        border-color:#5c6bc0;
        background-color:#fff;
    }
    &::placeholder{
        color:#b0b0b0;
    }
    
`

export const SubmitButton=styled.button`
    width:100%;
    padding:12px;
    background-color:#7C3AED;
    color:#fff;
    border:none;
    border-radius:8px;
    font-size:16px;
    font-weight:600;
    cursor:pointer;
    transition:background-color 0.3s ease;
    margin-top:8px;
    &:hover{
        background-color:#6D28D9;
    }
    &:active{
        background-color:#6D28D9;
    }
    
`

export const SocialOptionsList=styled.ul`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;
    flex-wrap:wrap;
    gap:16px;
    list-style:none;
    padding:0;
    margin-top:10px;
`

export const SocialButton=styled.button`
    flex:1 1 30%;
    border-radius:20px;
    padding:10px 20px;
    color:#121212;
    font-size:15px;
    border:1.5px solid #d1d1d1;
    background-color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    transition:all 0.3s ease;
    &:hover{
        border-color:#5c6bc0;
        box-shadow:0 2px 8px rgba(92,107,192,0.2);
    }
`

export const SocialIcon=styled.img`
    width:22px;
    height:22px;
    margin-right:5px;
`