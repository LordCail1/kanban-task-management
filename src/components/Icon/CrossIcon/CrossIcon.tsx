import { UseFieldArrayRemove } from "react-hook-form"
import StyledCrossIcon from "./CrossIcon.styled"

/**
 * This svg acts as a 'delete' button on the side of an input
 * @param height the height in pixels
 * @param width the width in pixels
 * @param remove a function provided by 'react-hook-form' that allows to delete
 * a field item using an index as argument
 * @param index index being passes to specify which field we would want to delete if clicked
 */
const CrossIcon = ({
	height,
	remove,
	width,
	index,
}: {
	index: number
	width: number
	height: number
	remove: UseFieldArrayRemove
}) => {
	return (
		<StyledCrossIcon
			onClick={() => remove(index)}
			width={width}
			height={height}
			xmlns="http://www.w3.org/2000/svg"
		>
			<g fillRule="evenodd">
				<path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z" />
				<path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z" />
			</g>
		</StyledCrossIcon>
	)
}

export default CrossIcon
