import styled from "styled-components";
import * as variables from "../../styles/variables";
import { Link } from "react-router-dom"


export const BtnCircle = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
font-size:48px;
height: 64px;
width: 64px;
background-color: ${variables.default.btnsalvar};
color: ${variables.default.textondark};
position: fixed;
bottom:40px;
right: 40px;
border-radius: 50%;
cursor: pointer;
text-decoration: none;
transition: all 0.3s ease;

&:hover  {
scale: 1.2;
}
`


