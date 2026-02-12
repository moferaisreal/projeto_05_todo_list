import { useSelector } from "react-redux";
import { RootReducer } from "../../store";
import Task from "components/Task";
import { Container } from "./styles";

const ListaTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks);
  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria &rdquo; e &quot;termo&rdquo;
      </p>
      <ul>
        {itens.map((t) => (
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
