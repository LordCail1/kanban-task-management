import StyledEmptyBoardAddNewColumnBtn from "./EmptyBoardAddNewColumnBtn/EmptyBoardAddNewColumnBtn.styled"
import StyledEmptyBoardWarningContainer from "./EmptyBoardWarningContainer.styled"
import StyledEmptyBoardWarningText from "./EmptyBoardWarningText.styled"
import { openPopup } from "../../features"
import { useAppDispatch } from "../../hooks/redux/reduxHooks"

const EmptyBoardWarningContainer = () => {
  const dispatch = useAppDispatch()
  
  return (
    <StyledEmptyBoardWarningContainer>
        <StyledEmptyBoardWarningText>This board is empty. Create a new column to get started</StyledEmptyBoardWarningText>
        <StyledEmptyBoardAddNewColumnBtn onClick={() => dispatch(openPopup({HOCComponent: "BoardManagerPopupWindow", editing: true}))}>+ Add New Column</StyledEmptyBoardAddNewColumnBtn>
    </StyledEmptyBoardWarningContainer>
  )
}

export default EmptyBoardWarningContainer