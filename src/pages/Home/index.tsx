import BtnAdd from "components/Botao";
import ListaTarefas from "container/Lista";
import Sidebar from "container/SideBar";

const Home = () => (
  <>
    <Sidebar showFilter />
    <ListaTarefas />
    <BtnAdd />
  </>
);
export default Home;
