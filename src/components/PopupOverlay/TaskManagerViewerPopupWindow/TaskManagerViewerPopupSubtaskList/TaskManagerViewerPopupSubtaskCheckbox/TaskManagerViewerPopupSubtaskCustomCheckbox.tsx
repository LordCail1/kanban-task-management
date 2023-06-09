import StyledTaskManagerViewerPopupSubtaskCustomCheckbox from "./TaskManagerViewerPopupSubtaskCustomCheckbox.styled"

const TaskManagerViewerPopupSubtaskCustomCheckbox = ({ checked }: { checked: boolean }) => {
	return (
		<>
			<StyledTaskManagerViewerPopupSubtaskCustomCheckbox checked={checked}>
				{checked ? (
					<svg
						width="10"
						height="8"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke="#FFF"
							strokeWidth="2"
							fill="none"
							d="m1.276 3.066 2.756 2.756 5-5"
						/>
					</svg>
				) : null}
			</StyledTaskManagerViewerPopupSubtaskCustomCheckbox>
		</>
	)
}

export default TaskManagerViewerPopupSubtaskCustomCheckbox
