import { useSelector } from "react-redux";
import { RootReducer } from "../../store";
import Task from "components/Task";
import { Container } from "./styles";
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

  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria &rdquo; e &quot;{termo}&rdquo;
      </p>
      <ul>
        <li >{termo}</li>
        <li >{criterio}</li>
        <li >{valor}</li>
      </ul>
      <ul>
        {filterTasks().map((t) => (
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
