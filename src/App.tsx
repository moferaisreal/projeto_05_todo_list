import { Provider } from "react-redux";
import GlobalStyles, { Container } from "styles";
import Sidebar from "container/SideBar";
import ListaTarefas from "container/Lista";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Container>
        <Sidebar />
        <ListaTarefas />
      </Container>
    </Provider>
  );
}

export default App;
