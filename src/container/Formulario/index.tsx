import { SubmitEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MainContainer, Titulo, Campo, Botao } from "../../styles";
import { FormContainer, Options, Option } from "./styles";
import * as enums from "../../utils/enums/Tarefa";
import Task from "models/Tarefa";
import { cadastrar } from "../../store/reducers/tarefas";

const FormCadastro = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [category, setCategory] = useState(enums.Category.NORMAL);

  const newTask = (e: SubmitEvent) => {
    e.preventDefault();
    const addTask = new Task(
      titulo,
      category,
      enums.Status.PENDENTE,
      descricao,
      9,
    );
    dispatch(cadastrar(addTask))
    navigate('/')
  };

  return (
    <MainContainer>
      <Titulo>Nova Tarefa</Titulo>
      <FormContainer onSubmit={newTask}>
        <Campo
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          type="text"
          placeholder="Nome"
        />
        <Campo
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          as="textarea"
          placeholder="Descreva a tarefa"
        />
        <Options>
          <p>Prioridade</p>
          {Object.values(enums.Category).map((category) => (
            <Option key={category}>
              <input
                value={category}
                type="radio"
                onChange={(e) => setCategory(e.target.value as enums.Category)}
                name="category"
                id={category}
                defaultChecked={category === enums.Category.NORMAL}
              />{" "}
              <label htmlFor={category}>{category}</label>
            </Option>
          ))}
        </Options>
        <Botao type="submit">Adicionar</Botao>
      </FormContainer>
    </MainContainer>
  );
};
export default FormCadastro;
