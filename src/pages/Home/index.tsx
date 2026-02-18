import BtnAdd from "components/Botao";
import ListaTarefas from "container/Lista";
import Sidebar from "container/SideBar";

const Home = () => (
  <>
    <Sidebar />
    <ListaTarefas />
    <BtnAdd />
  </>
);
export default Home;
