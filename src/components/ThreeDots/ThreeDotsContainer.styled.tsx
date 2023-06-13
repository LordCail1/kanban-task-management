import styled from "styled-components"

const StyledThreeDotsContainer = styled.a<{ position: "static" | "absolute" } & Direction>`
	bottom: ${({ bottom }) => bottom};
	cursor: pointer;
	display: flex;
	flex-direction: column;
	justify-content: center;
	left: ${({ left }) => left};
	padding: 10px 32px 10px 24px;
	position: ${({ position }) => position};
	right: ${({ right }) => right};
	top: ${({ top }) => top};
`

export default StyledThreeDotsContainer
