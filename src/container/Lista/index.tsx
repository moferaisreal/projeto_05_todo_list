import { useSelector } from "react-redux";
import { RootReducer } from "../../store";
import Task from "components/Task";
import { Container, Results } from "./styles";
import { Category } from "utils/enums/Tarefa";

const ListaTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks);
  const { termo, criterio, valor} = useSelector((state: RootReducer) => state.filter);

  const filterTasks = () =>{
    let filtered = itens
    if(termo !== undefined){
      filtered = filtered.filter(itens=>itens.title.toLowerCase().search(termo.toLowerCase()) >= 0)

      if(criterio==="category"){
        filtered = filtered.filter(itens=>itens.category === valor)
      } else if (criterio === "status"){
        filtered = filtered.filter(itens=>itens.status === valor)
      }
      return filtered
    } else{
      return itens
    }
}
const showResults = (qtd: number) => {
  let message = ''
  const messageTermo = termo !== undefined && termo.length > 0 ? ` e "${termo}"`: ''
if(criterio === 'todas'){
  message = `${qtd} são todas as tarefa(s) ${messageTermo}`
} else {
  message = `${qtd} tarefa(s) marcadas como: "${`${criterio}=${valor}`}"${messageTermo}`
}
  return message
}
const tarefas = filterTasks()
const mensagem = showResults(tarefas.length)

  return (
    <Container>
      <Results>{mensagem}
      </Results>
      <ul>
        {tarefas.map((t) => (
          <li key={t.title}>
            <Task
              id={t.id}
              category={t.category}
              status={t.status}
              title={t.title}
              descrptn={t.descrptn}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
};
export default ListaTarefas;
