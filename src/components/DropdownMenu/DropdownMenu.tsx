import { useAppSelector } from '../../hooks/redux/reduxHooks'
import BoardList from '../BoardList/BoardList'
import CreateNewBoardBtn from '../CreateNewBoardBtn/CreateNewBoardBtn'
import NumOfBoardsDisplay from '../NumOfBoards/NumOfBoardsDisplay'
import ThemeControl from '../ThemeControl/ThemeControl'
import StyledDropdownMenu from './DropdownMenu.styled'

const DropdownMenu = ({active}: Active) => {
  const isDropdownActive = useAppSelector(state => state.dropdownSlice.active)
  return (
    <StyledDropdownMenu active={isDropdownActive}>
      <NumOfBoardsDisplay menuArea='dropdown'/>
      <BoardList menuArea='dropdown'/>
      <CreateNewBoardBtn menuArea='dropdown'/>
      <ThemeControl menuArea='dropdown' />
    </StyledDropdownMenu>
  )
}

export default DropdownMenu