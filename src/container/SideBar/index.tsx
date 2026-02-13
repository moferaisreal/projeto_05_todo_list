import { useDispatch, useSelector } from "react-redux";
import FiltroCard from "components/FiltroCard/index";
import * as S from "./styles";
import { RootReducer } from "store";
import { alterarTermo } from "store/reducers/filtro";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { termo } = useSelector((state: RootReducer) => state.filter);

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(e) => dispatch(alterarTermo(e.target.value))}
        />
        <S.Filter>
          <FiltroCard legenda="pendentes" contador={1} />
          <FiltroCard legenda="concluídas" contador={3} />
          <FiltroCard legenda="urgentes" contador={5} />
          <FiltroCard legenda="importantes" contador={6} />
          <FiltroCard legenda="normal" contador={2} />
          <FiltroCard legenda="todas" contador={17} ativo />
        </S.Filter>
      </div>
    </S.Aside>
  );
};

export default Sidebar;
