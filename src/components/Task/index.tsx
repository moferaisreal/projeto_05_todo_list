import { useState} from "react";
import { useDispatch } from "react-redux";
import * as S from "./styles";
import { Props } from "components/FiltroCard";
import * as enums from "../../utils/enums/Tarefa";
import { remover } from "../../store/reducers/tarefas";
import TaskClass from "../../models/Tarefa"

type TaskProps = TaskClass

const Task = ({ title, category, status, descrptn, id }: TaskProps) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag parametro="category" category={category}>
        {" "}
        {category}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Description value={descrptn} />
      <S.ActionBar>
        {isEditing ? (
          <>
            <S.BtnSave>Salvar</S.BtnSave>
            <S.BtnCancelRemv onClick={() => setIsEditing(false)}>
              Cancelar
            </S.BtnCancelRemv>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setIsEditing(true)}>Editar</S.Botao>
            <S.BtnCancelRemv onClick={() => dispatch(remover(id))}>Excluir</S.BtnCancelRemv>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  );
};

export default Task;
