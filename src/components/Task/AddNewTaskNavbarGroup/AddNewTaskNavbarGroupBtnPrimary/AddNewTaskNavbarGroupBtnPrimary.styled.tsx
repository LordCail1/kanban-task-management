import styled, { css } from "styled-components"
import StyledGeneralBtn from "../../../../styles/buttons/GeneralBtn/GeneralBtn.styled"

const StyledAddNewTaskNavbarGroupBtnPrimary = styled(StyledGeneralBtn)<{ disabledBtn: boolean }>`
	padding: 15px 24px;
    align-items: center;
    display: flex;
    justify-content: center;
	${({ disabledBtn }) =>
		disabledBtn &&
		css`
			opacity: 0.25;
			pointer-events: none;
		`}
`

export default StyledAddNewTaskNavbarGroupBtnPrimary
