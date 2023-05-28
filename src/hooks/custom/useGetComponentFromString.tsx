import { ComponentType } from "react"
import AddNewBoardPopupWindow from "../../components/PopupOverlay/AddNewBoardPopupWindow/AddNewBoardPopupWindow"

//default component is 'AddNewBoardPopupWindow'

const useGetComponentFromString = (component: HOCComponents): ComponentType<any> => {
    
    switch(component) {
        case "AddNewBoardPopupWindow":
            return AddNewBoardPopupWindow
        default :
            return AddNewBoardPopupWindow
    }
}

export default useGetComponentFromString
