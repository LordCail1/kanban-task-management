import StyledNewColumnBtn from "./NewColumnBtn.styled"

const NewColumnBtn = () => {
	return <StyledNewColumnBtn onClick={() => console.log('you clicked to add a new Column')}>+ New Column</StyledNewColumnBtn>
}

export default NewColumnBtn
