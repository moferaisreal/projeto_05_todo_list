import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Tarefa from "models/Tarefa";
import * as enums from "../../utils/enums/Tarefa";

type TarefasState = {
  itens: Tarefa[];
};
const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      title: "Exemplo 1",
      status: enums.Status.PENDENTE,
      category: enums.Category.IMPORTANTE,
      descrptn: "lorem",
    },
    {
      id: 3,
      title: "Exemplo 2",
      status: enums.Status.PENDENTE,
      category: enums.Category.NORMAL,
      descrptn: "lorem",
    },
    {
      id: 2,
      title: "Exemplo 3",
      status: enums.Status.PENDENTE,
      category: enums.Category.URGENTE,
      descrptn: "lorem",
    },
    {
      id: 4,
      title: "Exemplo 4",
      status: enums.Status.CONCLUIDA,
      category: enums.Category.IMPORTANTE,
      descrptn: "lorem",
    },
    {
      id: 5,
      title: "Exemplo 5",
      status: enums.Status.CONCLUIDA,
      category: enums.Category.URGENTE,
      descrptn: "lorem",
    },
    {
      id: 6,
      title: "Exemplo 6",
      status: enums.Status.CONCLUIDA,
      category: enums.Category.NORMAL,
      descrptn: "lorem",
    },
  ],
};
export const tarefasSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    // addTarefa: (state, action: PayloadAction<Tarefa>) => {
    //   state.push(action.payload);
    // },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (tarefa) => tarefa.id !== action.payload,
      );
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id,
      );
      if (indexTarefa >= 0) {
        state.itens[indexTarefa] = action.payload;
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, "id">>) => {
      const findDuplicate = state.itens.find(
        (tarefa) =>
          tarefa.title.toLowerCase() === action.payload.title.toLowerCase(),
      );
      if (findDuplicate) {
        alert("Tarefa já existe!!!");
      } else {
        const lastTask = {...state.itens[state.itens.length -1]}
        const newTask = {...action.payload,id:lastTask ? lastTask.id + 1 : 1 }
        state.itens.push(newTask);
      }
    },
    alterarStatus: (
      state,
      action: PayloadAction<{ id: Number; finalizado: boolean }>,
    ) => {
      const indexTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id,
      );
      if (indexTarefa >= 0) {
        state.itens[indexTarefa].status = action.payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE;
      }
    },
  },
});

export const { remover, editar, cadastrar, alterarStatus } = tarefasSlice.actions;

export default tarefasSlice.reducer;
