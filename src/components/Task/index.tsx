import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import TaskClass from "../../models/Tarefa";
import { editar, remover } from "../../store/reducers/tarefas";
import * as S from "./styles";

type TaskProps = TaskClass;

const Task = ({ title, category, status, descrptn: Og, id }: TaskProps) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [descrptn, setDescr] = useState("");

  useEffect(() => {
    if (descrptn === "") {
      setDescr(Og);
    }
  }, [Og]);

  function cancelEdit() {
    setIsEditing(false);
    setDescr(Og);
  }

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
      <S.Description
        disabled={!isEditing}
        value={descrptn}
        onChange={(e) => setDescr(e.target.value)}
      />
      <S.ActionBar>
        {isEditing ? (
          <>
            <S.BtnSave
              onClick={() => {
                dispatch(editar({ descrptn, id, category, status, title }));
                setIsEditing(false)
              }}
            >
              Salvar
            </S.BtnSave>
            <S.BtnCancelRemv onClick={cancelEdit}>Cancelar</S.BtnCancelRemv>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setIsEditing(true)}>Editar</S.Botao>
            <S.BtnCancelRemv onClick={() => dispatch(remover(id))}>
              Excluir
            </S.BtnCancelRemv>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  );
};

export default Task;
