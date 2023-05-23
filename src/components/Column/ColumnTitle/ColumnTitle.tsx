import StyledColumnTitle from "./ColumnTitle.styled"
import StyledColumnTitleColorCircle from "./ColumnTitleColorCircle/ColumnTitleColorCircle.styled"
import StyledColumnTitleContainer from "./ColumnTitleContainer/ColumnTitleContainer.styled"

const ColumnTitle = ({
	name,
	color,
	quantity
}: {
	name: string | undefined
	color: string
	quantity: number
}) => {
	return (
		<StyledColumnTitleContainer>
			<StyledColumnTitleColorCircle itemColor={color}></StyledColumnTitleColorCircle>
			<StyledColumnTitle>{name} ( {quantity} )</StyledColumnTitle>
		</StyledColumnTitleContainer>
	)
}

export default ColumnTitle
