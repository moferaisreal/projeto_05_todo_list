import styled from "styled-components";
import * as variables from "../../styles/variables";
import * as enums from "../../utils/enums/Tarefa";

 type TagProps ={
  category?: enums.Category
  status?: enums.Status
  parametro: 'status' | 'category'
}

function returnBg(props: TagProps): string{
  if(props.parametro === 'status'){
    if(props.status === enums.Status.CONCLUIDA) return variables.default.statusconcluida
    if(props.status === enums.Status.PENDENTE) return variables.default.statuspendente
  } else {
    if(props.category === enums.Category.URGENTE) return variables.default.statusurgente
    if(props.category === enums.Category.NORMAL) return variables.default.statusnormal
    if(props.category === enums.Category.IMPORTANTE) return variables.default.statusimportante
  }
  return variables.default.statustodas
}



export const Card = styled.div`
padding: 16px;
margin-bottom: 32px;
background-color: ${variables.default.bgpage};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 16px;
`
export const Title = styled.h3`
font-size: 18px;
font-weight: bold;
color: ${variables.default.textprimary};
margin-bottom: 16px;
`
export const Tag = styled.span<TagProps>`
font-weight: bold;
padding: 4px 8px;
font-size: 10px;
color: ${variables.default.textondark};
background-color: ${(props) => returnBg(props)};
border-radius: 8px;
margin-right: 16px;
display: inline-block;

`
export const Description = styled.textarea`
color: ${variables.default.textsecondary};
font-size: 14px;
line-height: 24px;
font-family: "Roboto Mono", monospace;
display: block;
width: 100%;
margin-bottom: 16px;
margin-top: 16px;
resize: none;
border: none;
background-color: transparent;
`

export const ActionBar = styled.div`
border-top: 1px solid rgba(0, 0, 0, 0.1);
padding-top: 16px;
`

export const Botao = styled.button`
font-size: 12px;
border: none;
border-radius: 8px;
cursor: pointer;
padding: 8px 16px;
margin-right: 8px;
color: ${variables.default.textondark};
font-weight: bold;
background-color: ${variables.default.btneditar};
margin-right: 8px;
`

export const BtnSave = styled(Botao)`
background-color: ${variables.default.btnsalvar};
`
export const BtnCancelRemv = styled(Botao)`
background-color: ${variables.default.btnexcluir};
`
