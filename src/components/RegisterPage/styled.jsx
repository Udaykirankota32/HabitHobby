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
    height:85vh;
    border:1px solid #e0e0e0;
    border-radius:20px;
    overflow:hidden;
    display:flex;
    flex-direction:row;
    align-items:stretch;
    box-shadow:0 4px 20px rgba(0,0,0,0.08);
`
export const RegisterImage=styled.img`
    width:60%;
    height:100%;
    object-fit:cover;
    min-width:0;
    flex-shrink:1;
`

export const FormContainer=styled.div`
    width:40%;
    display:flex;
    background-color:#ffffff;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:32px 28px;
    box-sizing:border-box;
    flex-shrink:0;
    overflow-y:auto;
`

export const StyledForm=styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    gap:14px;
`

export const Divider=styled.div`
    width:100%;
    display:flex;
    align-items:center;
    gap:12px;
    color:#999;
    font-size:12px;
    margin:4px 0;
    &::before,&::after{     /*added straight line i.e divider*/
        content:'';
        flex:1;
        height:1px;
        background-color:#e0e0e0;
    }
`

export const FormHeading=styled.h1`
    font-size:24px;
    font-weight:700;
    color:#1a1a2e;
    margin-bottom:4px;
`

export const InputGroup=styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    gap:6px;
`

export const FormLabel=styled.label`
    font-size:13px;
    font-weight:500;
    color:#555;
`

export const FormInput=styled.input`
    padding:10px 12px;
    border:1.5px solid #d1d1d1;
    border-radius:8px;
    font-size:13px;
    font-family:inherit;
    outline:none;
    transition:border-color 0.3s ease;
    background-color:#fafafa;
    &:focus{
        border-color:#7C3AED;
        background-color:#fff;
    }
    &::placeholder{
        color:#b0b0b0;
        font-size:12px;
    }
`

export const SubmitButton=styled.button`
    width:100%;
    padding:11px;
    background-color:#7C3AED;
    color:#fff;
    border:none;
    border-radius:8px;
    font-size:15px;
    font-weight:600;
    font-family:inherit;
    cursor:pointer;
    transition:background-color 0.3s ease;
    margin-top:4px;
    &:hover{
        background-color:#6D28D9;
    }
    &:active{
        background-color:#5B21B6;
    }
`

export const SocialOptionsList=styled.ul`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    gap:10px;
    list-style:none;
    padding:0;
    margin-top:6px;
`

export const SocialButton=styled.button`
    width:100%;
    border-radius:8px;
    padding:8px 10px;
    color:#333;
    font-size:12px;
    font-weight:500;
    font-family:inherit;
    border:1.5px solid #e0e0e0;
    background-color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:6px;
    cursor:pointer;
    white-space:nowrap;
    transition:all 0.3s ease;
    &:hover{
        border-color:#7C3AED;
        box-shadow:0 2px 8px rgba(124,58,237,0.12);
        background-color:#faf5ff;
    }
`

export const SocialIcon=styled.img`
    width:18px;
    height:18px;
    flex-shrink:0;
`

export const Description=styled.p`
    font-size:13px;
    color:#666;
    padding:0;
    margin:4px 0 0 0;
`
export const TransparentButton=styled.button`
    background-color:transparent;
    border:none;
    outline:none;
    cursor:pointer;
    color:#7C3AED;
    font-size:13px;
    font-weight:600;
    font-family:inherit;
    padding:0;
    margin:0;
    &:hover{
        color:#6D28D9;
        text-decoration:underline;
    }
`