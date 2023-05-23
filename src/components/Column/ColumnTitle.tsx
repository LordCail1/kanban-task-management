import StyledColumnTitle from "./ColumnTitle.styled"

const ColumnTitle = ({ name }: { name: string | undefined }) => {
	return <StyledColumnTitle>{name}</StyledColumnTitle>
}

export default ColumnTitle
