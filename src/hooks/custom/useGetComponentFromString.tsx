import { ComponentType } from "react"
import AddNewBoardPopupWindow from "../../components/PopupOverlay/AddNewBoardPopupWindow/AddNewBoardPopupWindow"
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu"

//default component is 'AddNewBoardPopupWindow'

const useGetComponentFromString = (component: HOCComponents): ComponentType<{editing: boolean}> => {
    
    switch(component) {
        case "AddNewBoardPopupWindow":
            return AddNewBoardPopupWindow
        case "DropdownMenu": 
            return DropdownMenu
        default :
            return AddNewBoardPopupWindow
    }
}

export default useGetComponentFromString
