import FiltroCard from "components/FiltroCard/index";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "store";
import { alterarTermo } from "store/reducers/filtro";
import * as enums from '../../utils/enums/Tarefa';
import * as S from "./styles";
import { Campo} from "../../styles";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { termo } = useSelector((state: RootReducer) => state.filter);

  return (
    <S.Aside>
      <div>
        <Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(e) => dispatch(alterarTermo(e.target.value))}
        />
        <S.Filter>
          <FiltroCard
          valor={enums.Status.PENDENTE} criterio="status" legenda="pendentes" />
          <FiltroCard
          valor={enums.Status.CONCLUIDA} criterio="status" legenda="concluídas" />
          <FiltroCard
          valor={enums.Category.URGENTE} criterio="category" legenda="urgentes" />
          <FiltroCard
          valor={enums.Category.IMPORTANTE}  criterio="category" legenda="importantes" />
          <FiltroCard
          valor={enums.Category.NORMAL}  criterio="category" legenda="normal" />
          <FiltroCard  criterio="todas" legenda="todas"  />
        </S.Filter>
      </div>
    </S.Aside>
  );
};

export default Sidebar;
