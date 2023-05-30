import { useAppDispatch } from "../../hooks/redux/reduxHooks"
import StyledNewColumnBtn from "./NewColumnBtn.styled"

const NewColumnBtn = () => {
	const dispatch = useAppDispatch()
	return (
		<StyledNewColumnBtn
			onClick={() => {
				console.log("you clicked to add a new Column")
			}}
		>
			+ New Column
		</StyledNewColumnBtn>
	)
}

export default NewColumnBtn
