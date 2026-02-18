import styled from "styled-components";
import * as variables from "../../styles/variables";


type Props ={
  ativo: boolean
}

export const Card = styled.div<Props>`
padding: 8px;
border: 1px solid ${(props) => (props.ativo ? `${variables.default.borderdark}` : `${variables.default.bgpage}`)};
background-color: ${(props) => (props.ativo ? `${variables.default.bgpage}` : `${variables.default.bgpage}`)};
color: ${(props) => (props.ativo ? `${variables.default.link}` : `${variables.default.textonlight}`)};
border-radius: 8px;
cursor: pointer;
`
export const Counter = styled.span`
font-weight: bold;
font-size: 24px;
display: block;
`
export const Label = styled.span`
font-size: 14px;
`
