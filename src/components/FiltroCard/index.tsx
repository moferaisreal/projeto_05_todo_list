import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { updateFilter } from 'store/reducers/filtro'
import * as enums from '../../utils/enums/Tarefa'
import { RootReducer } from '../../store'

export type Props ={
  legenda: string
  criterio: 'category' | 'status' | 'todas'
  valor?: enums.Category | enums.Status
}

const FiltroCard = ({ legenda, criterio, valor}:Props) =>{
  const dispatch = useDispatch()
  const { filter, tasks } = useSelector((state: RootReducer) => state)
  const checkActive = () => {
   const sameCriterio = filter.criterio === criterio
   const sameValor = filter.valor=== valor
   return sameCriterio && sameValor
  }
  const countTasks = () => {
    if (criterio === 'todas') return tasks.itens.length
    if (criterio === 'category'){
     return tasks.itens.filter((item)=> item.category === valor).length
    }
    if (criterio === 'status'){
     return tasks.itens.filter((item)=> item.status === valor).length
    }
  }
  const filtrar = () => {
    dispatch(
      updateFilter({
        criterio,
        valor
      })
    )
  }
  const ativo = checkActive()
  const counter = countTasks()
  return(
  <S.Card ativo={ativo} onClick={filtrar}>
    <S.Counter>{counter}</S.Counter>
    <S.Label>{legenda}</S.Label>
  </S.Card>
  )
}
export default FiltroCard
