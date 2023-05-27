import BoardList from '../BoardList/BoardList'
import CreateNewBoardBtn from '../CreateNewBoardBtn/CreateNewBoardBtn'
import NumOfBoardsDisplay from '../NumOfBoards/NumOfBoardsDisplay'
import ThemeControl from '../ThemeControl/ThemeControl'
import StyledDropdownMenu from './DropdownMenu.styled'

const DropdownMenu = () => {
  return (
    <StyledDropdownMenu>
      <NumOfBoardsDisplay />
      <BoardList />
      <CreateNewBoardBtn />
      <ThemeControl />
    </StyledDropdownMenu>
  )
}

export default DropdownMenu