import { Provider } from "react-redux";
import GlobalStyles, { Container } from "styles";
import store from "./store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/novo',
    element: <Cadastro />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Container>
        <RouterProvider router={router} />
      </Container>
    </Provider>
  );
}

export default App;
