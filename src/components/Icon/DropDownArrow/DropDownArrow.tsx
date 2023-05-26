import StyledDropDownArrow from "./DropDownArrow.styled"
import StyledDropDownArrowBtn from "./DropDownArrowBtn.styled"

const DropDownArrow = () => {
	return (
		<StyledDropDownArrowBtn onClick={() => console.log('you clicked on the dropdown arrow')}>
			<StyledDropDownArrow
				width="9"
				height="7"
				viewBox="0 0 9 7"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M1 1L5 5L9 1"
					stroke="#635FC7"
					strokeWidth="2"
				/>
			</StyledDropDownArrow>
		</StyledDropDownArrowBtn>
	)
}

export default DropDownArrow
