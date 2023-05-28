import { useAppSelector } from "../../hooks/redux/reduxHooks"
import BoardBtn from "../BoardButton/BoardBtn"

const BoardList = ({ menuArea }: MenuArea) => {
	const boards = useAppSelector((state) => state.boardsSlice.value.boards)

	return (
		<>
			{boards.map((board, i) => (
				<BoardBtn
					key={board.id}
					{...board}
					menuArea={menuArea}
				></BoardBtn>
			))}
		</>
	)
}

export default BoardList
