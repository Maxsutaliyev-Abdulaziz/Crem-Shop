import styled, { css } from "styled-components";

export const Header = styled.div`
height: 1024px;
width: 1440px;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
`;

const text = css`
height: 22px;
font-family: Arial, Helvetica, sans-serif;
font-weight: 500;
line-height: 160%;
color: #FFFFFF;
text-align: center;
display: flex;
justify-content: center;
align-content: center;
`;

export const H1 = styled.h1`
${text}
font-size: 14px;
width: 1440px;
height: 40px;
flex-direction: column;
`;

export const H2 = styled.h1`
${text}
font-weight: 700;
font-size: 16px;
`;


export const H3 = styled.h1`
${text}
font-weight: 700;
width: 700px;
height: 150px;
text-transform: uppercase;
font-size: 80px;
line-height: 90%;
flex-direction: column;
`;

export const Div = styled.div`
width: 1440px;
display: flex;
justify-content: space-between;
`;

export const Img = styled.img`
padding: 20px 0 0 0;
`;

export const Hr = styled.hr`
width: 90%;
margin: auto;
`;

export const Mini = styled.div`
background: #7373D7;
height: 490px;
width: 400px;
margin: 20px 10px;
padding: 20px 0 0 0;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

export const Mbox = styled.div`
width: 450px;
display: flex;
justify-content: center;
align-content: center;
padding: 20px 75px 0 75px;
gap: 25px;
`;

export const Pbox = styled.div`
display: flex;
justify-content: center;
align-content: center;
flex-direction: column;
padding: 0 75px;
gap: 25px;
`;

export const Btn = styled.button`
font-family: Arial, Helvetica, sans-serif;
font-weight: 700;
font-size: 17px;
line-height: 160%;
text-align: center;
text-transform: uppercase;
color: #FFFFFF;
width: 191px;
height: 55px;
background: #7373D7;
border: 1px solid #7373D7;
border-radius: 28px;
margin: auto;
margin: 30px 254.5px 10px 254.5px;
`;

export const SS = styled.div`
width: 2520px;
display: flex;
flex-wrap: wrap;
`;
export const ZZZ = styled.div`
width: 1440px;
overflow: auto;
`;

export const Sss = styled.div`
width: 100%;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
`;

export const SSS = styled.div`
width: 100%;
height: 80px;
display: flex;
justify-content: center;
flex-direction: column;
background: #ffffff;
`;

export const PP = styled.h1`
width: 100%;
display: flex;
padding: 0 0 0 5px;
justify-content: flex-start;
gap: 20px;
font-family: Arial, Helvetica, sans-serif;
font-weight: 600;
font-size: 16px;
line-height: 160%;
color: #222222;
`;


export const Pp = styled.h1`
font-size: 20px;
font-weight: 100;
font-family: Arial, Helvetica, sans-serif;
font-weight: 500;
font-size: 16px;
line-height: 160%;
color: #222222;
`;

export const Sticke = styled.button`
background-color: transparent;
border: none;
position: sticky;
width: 1440px;
height: 0;
top: 660px;
display: flex;
justify-content: flex-end;
margin: 0 0 0 0;
padding: 0 40px 0 0;
`;
