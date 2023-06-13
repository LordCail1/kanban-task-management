import StyledIndividualDot from "./IndividualDot.styled"
import StyledThreeDotsContainer from "./ThreeDotsContainer.styled"

const ThreeDots = ({
	bottom,
	handleThreeDotsClick,
	left,
	position,
	right,
	top,
}: {
	handleThreeDotsClick: () => void
	position: "static" | "absolute"
} & Direction) => {
	return (
		<StyledThreeDotsContainer
			bottom={bottom}
			left={left}
			onClick={handleThreeDotsClick}
			position={position}
			right={right}
			top={top}
		>
			<StyledIndividualDot />
			<StyledIndividualDot />
			<StyledIndividualDot />
		</StyledThreeDotsContainer>
	)
}

export default ThreeDots
