import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import TaskClass from "../../models/Tarefa";
import { editar, remover, alterarStatus } from "../../store/reducers/tarefas";
import { Botao } from "../../styles";
import * as S from "./styles";
import * as enums from "../../utils/enums/Tarefa";

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

  function alterarStatusTarefa(e: ChangeEvent<HTMLInputElement>) {
    dispatch(alterarStatus({ id, finalizado: e.target.checked }));
  }

  return (
    <S.Card>
      <label htmlFor="title">
        <input
          type="checkbox"
          checked={status === enums.Status.CONCLUIDA}
          onChange={alterarStatusTarefa}
          id={title}
        />
      </label>
      <S.Title>
        {isEditing && <em>Editando...</em>}
        {title}
      </S.Title>
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
                setIsEditing(false);
              }}
            >
              Salvar
            </S.BtnSave>
            <S.BtnCancelRemv onClick={cancelEdit}>Cancelar</S.BtnCancelRemv>
          </>
        ) : (
          <>
            <Botao onClick={() => setIsEditing(true)}>Editar</Botao>
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
