import { useAppSelector } from "../../hooks/reduxHooks"
import BoardButton from "../Board/BoardButton"

const BoardList = () => {
	const boards = useAppSelector((state) => state.boardSlice.value.boards)

	return (
		<>
			{boards.map((board, i) => (
				<BoardButton
					key={i}
					{...board}
				></BoardButton>
			))}
		</>
	)
}

export default BoardList
