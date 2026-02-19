import styled from "styled-components";
import { Botao } from "../../styles";
import * as variables from "../../styles/variables";
import * as enums from "../../utils/enums/Tarefa";

type TagProps = {
  category?: enums.Category;
  status?: enums.Status;
  parametro: "status" | "category";
};

function returnBg(props: TagProps): string {
  if (props.parametro === "status") {
    if (props.status === enums.Status.CONCLUIDA)
      return variables.default.statusconcluida;
    if (props.status === enums.Status.PENDENTE)
      return variables.default.statuspendente;
  } else {
    if (props.category === enums.Category.URGENTE)
      return variables.default.statusurgente;
    if (props.category === enums.Category.NORMAL)
      return variables.default.statusnormal;
    if (props.category === enums.Category.IMPORTANTE)
      return variables.default.statusimportante;
  }
  return variables.default.statustodas;
}

export const Card = styled.div`
  padding: 1rem;
  margin-bottom: 2rem;
  background-color: ${variables.default.bgsecondary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  label {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
`;
export const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-left: .5rem;
  color: ${variables.default.textondark};
`;
export const Tag = styled.span<TagProps>`
  font-weight: bold;
  padding: 0.25rem 0.5rem;
  font-size: 10px;
  color: ${variables.default.textondark};
  background-color: ${(props) => returnBg(props)};
  border-radius: 0.5rem;
  margin-right: 1rem;
  display: inline-block;
`;
export const Description = styled.textarea`
  color: ${variables.default.textondark};
  font-size: 14px;
  line-height: 24px;
  font-family: "Roboto Mono", monospace;
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 1rem;
  resize: none;
  border: none;
  background-color: transparent;
`;

export const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 1rem;
`;
export const BtnSave = styled(Botao)`
  background-color: ${variables.default.btnsalvar};
`;
export const BtnCancelRemv = styled(Botao)`
  background-color: ${variables.default.btnexcluir};
`;
