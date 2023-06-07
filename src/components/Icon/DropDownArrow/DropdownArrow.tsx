import StyledDropdownArrow from "./DropdownArrow.styled"
import StyledDropdownArrowBtn from "./DropdownArrowBtn.styled"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/reduxHooks"
import { openPopup } from "../../../features"

const DropdownArrow = () => {
	const dispatch = useAppDispatch()
	const isDropdownActive = useAppSelector((state) => state.dropdownSlice.active)

	return (
		<StyledDropdownArrowBtn onClick={() => dispatch(openPopup({ HOCComponent: "DropdownMenu", editing: false }))}>
			<StyledDropdownArrow
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
			</StyledDropdownArrow>
		</StyledDropdownArrowBtn>
	)
}

export default DropdownArrow
