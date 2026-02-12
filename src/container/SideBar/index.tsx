import FiltroCard from 'components/FiltroCard/index';
import * as S from './styles';

const Sidebar = () => (
<S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
    <S.Filter>
      <FiltroCard legenda='pendentes' contador={1} />
      <FiltroCard legenda='concluídas'  contador={3}  />
      <FiltroCard legenda='urgentes'  contador={5}  />
      <FiltroCard legenda='importantes'  contador={6}  />
      <FiltroCard legenda='normal'  contador={2}  />
      <FiltroCard legenda='todas' contador={17} ativo />
    </S.Filter>
    </div>
  </S.Aside>
    )

export default Sidebar
