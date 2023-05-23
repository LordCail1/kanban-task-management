import { useAppSelector } from "../../hooks/redux/reduxHooks"
import Task from "../Task/Task"
import StyledColumn from "./Column.styled"

const Column = ({ id }: { id: string }) => {

  const thisColumn = useAppSelector(state => state.columnsSlice.value.columns.find(column => column.id === id))
  const allTasks = useAppSelector(state => state.tasksSlice.value.tasks)
  const thisColumnTasks: Task[] = []



  if (thisColumn) {
    allTasks.forEach(task => {
      thisColumn.tasks.forEach(currentColumnTask => {
        if (currentColumnTask === task.id) thisColumnTasks.push(task)
      })
    })
  }

  console.log(thisColumnTasks)




	return (
		<StyledColumn>
      {thisColumnTasks.map(task => (
        <Task key={task.id}/>
      ))}
		</StyledColumn>
	)
}

export default Column
