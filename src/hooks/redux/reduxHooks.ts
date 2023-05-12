import { RootState, AppDispatch } from "../../store/configureStore"
import {
	useSelector,
	useDispatch,
	TypedUseSelectorHook,
} from "react-redux"

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
