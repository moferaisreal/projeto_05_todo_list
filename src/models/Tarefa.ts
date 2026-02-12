import * as enums from '../utils/enums/Tarefa'

class Task{
  title: string
    category: enums.Category
    status: enums.Status
    descrptn: string
    id: number

    constructor(title: string,
    category: enums.Category,
    status: enums.Status,
    descrptn: string,
    id: number){
      this.title = title
      this.category = category
      this.status = status
      this.descrptn = descrptn
      this.id = id
    }
}

export default Task
