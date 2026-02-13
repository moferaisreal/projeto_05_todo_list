import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Tarefa'

export type FilterState ={
  termo:string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Category | enums.Status

}
const initialState: FilterState={
  termo:'',
  criterio:'todas'
}
const filtroSlice = createSlice(
  {
    name:'filter',
    initialState,
    reducers:{
      alterarTermo:(state,action: PayloadAction<string>) =>{
        state.termo = action.payload
      }
    }
  }
)


export const { alterarTermo} = filtroSlice.actions

export default filtroSlice.reducer
