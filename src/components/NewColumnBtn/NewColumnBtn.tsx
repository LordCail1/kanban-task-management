import { openPopup } from "../../features"
import { useAppDispatch } from "../../hooks/redux/reduxHooks"
import StyledNewColumnBtn from "./NewColumnBtn.styled"

const NewColumnBtn = () => {
	const dispatch = useAppDispatch()
	return (
		<StyledNewColumnBtn
			onClick={() => {
				dispatch(openPopup({ HOCComponent: "BoardManagerPopupWindow", editing: true }))
			}}
		>
			+ New Column
		</StyledNewColumnBtn>
	)
}

export default NewColumnBtn
