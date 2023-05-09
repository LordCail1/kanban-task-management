import { useAppSelector } from "../../hooks/reduxHooks"
import BoardBtn from "../BoardButton/BoardBtn"

const BoardList = () => {
	const boards = useAppSelector((state) => state.boardSlice.value.boards)

	return (
		<>
			{boards.map((board, i) => (
				<BoardBtn
					key={i}
					{...board}
				></BoardBtn>
			))}
		</>
	)
}

export default BoardList
