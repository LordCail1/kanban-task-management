import { useAppSelector } from "../../hooks/redux/reduxHooks"
import BoardBtn from "../BoardButton/BoardBtn"

const BoardList = () => {
	const boards = useAppSelector((state) => state.boardsSlice.value.boards)

	return (
		<>
			{boards.map((board, i) => (
				<BoardBtn
					key={board.id}
					{...board}
				></BoardBtn>
			))}
		</>
	)
}

export default BoardList
