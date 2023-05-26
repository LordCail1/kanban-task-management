import StyledEmptyBoardAddNewColumnBtn from "./EmptyBoardAddNewColumnBtn/EmptyBoardAddNewColumnBtn.styled"
import StyledEmptyBoardWarningContainer from "./EmptyBoardWarningContainer.styled"
import StyledEmptyBoardWarningText from "./EmptyBoardWarningText.styled"

const EmptyBoardWarningContainer = () => {
  return (
    <StyledEmptyBoardWarningContainer>
        <StyledEmptyBoardWarningText>This board is empty. Create a new column to get started</StyledEmptyBoardWarningText>
        <StyledEmptyBoardAddNewColumnBtn>+ Add New Column</StyledEmptyBoardAddNewColumnBtn>
    </StyledEmptyBoardWarningContainer>
  )
}

export default EmptyBoardWarningContainer