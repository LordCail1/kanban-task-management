import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type InitialState = {
	value: {
		subtasks: Subtask[]
	}
}

const initialState: InitialState = {
	value: {
		subtasks: [
			{
				title: "Sign up page",
				id: "n8D4RZZQ2j",
				isCompleted: true,
			},
			{
				title: "Sign in page",
				id: "0wuNHPBrXF",
				isCompleted: false,
			},
			{
				title: "Welcome page",
				id: "q_SiwPj0YX",
				isCompleted: false,
			},
			{
				title: "Search page",
				id: "m_MfnV5_aY",
				isCompleted: false,
			},
			{
				title: "Account page",
				id: "0ZY500Kk-n",
				isCompleted: false,
			},
			{
				title: "Billing page",
				id: "EClNAu4T96",
				isCompleted: false,
			},
			{
				title: "Internal testing",
				id: "M2HjJRJkYs",
				isCompleted: false,
			},
			{
				title: "External testing",
				id: "AU3-251Xpt",
				isCompleted: false,
			},
			{
				title: "Settings - Account page",
				id: "bxRO3u5-9w",
				isCompleted: true,
			},
			{
				title: "Settings - Billing page",
				id: "xnm9vVWt99",
				isCompleted: true,
			},
			{
				title: "Search page",
				id: "iT22GYbfOa",
				isCompleted: false,
			},
			{
				title: "Upgrade plan",
				id: "M8Luxqwdpi",
				isCompleted: true,
			},
			{
				title: "Cancel plan",
				id: "GLYAElSckE",
				isCompleted: true,
			},
			{
				title: "Update payment method",
				id: "XWf8fT5HGO",
				isCompleted: false,
			},
			{
				title: "Sign up page",
				id: "QPUxCvU8HO",
				isCompleted: true,
			},
			{
				title: "Sign in page",
				id: "n5CXXLdpbf",
				isCompleted: false,
			},
			{
				title: "Welcome page",
				id: "QRDgRT-zo4",
				isCompleted: false,
			},
			{
				title: "Add search endpoint",
				id: "d3OslmM1s3",
				isCompleted: true,
			},
			{
				title: "Define search filters",
				id: "1lPwiIH4Ty",
				isCompleted: false,
			},
			{
				title: "Define user model",
				id: "bS6n-cHMlH",
				isCompleted: true,
			},
			{
				title: "Add auth endpoints",
				id: "5MBZc5cMvS",
				isCompleted: false,
			},
			{
				title: "Research competitor pricing and business models",
				id: "JjwEVAvL6l",
				isCompleted: true,
			},
			{
				title: "Outline a business model that works for our solution",
				id: "43PcAZIjo2",
				isCompleted: false,
			},
			{
				title: "Talk to potential customers about our proposed solution and ask for fair price expectancy",
				id: "ZPoGinxY1D",
				isCompleted: false,
			},
			{
				title: "Complete 5 wireframe prototype tests",
				id: "K0UEEDiGWM",
				isCompleted: true,
			},
			{
				title: "Create clickable wireframe prototype in Balsamiq",
				id: "JGB8F5gKaq",
				isCompleted: true,
			},
			{
				title: "Meet to review notes from previous tests and plan changes",
				id: "D2QNHgiWI6",
				isCompleted: true,
			},
			{
				title: "Make changes to paper prototypes",
				id: "allAAfQJQi",
				isCompleted: true,
			},
			{
				title: "Conduct 5 usability tests",
				id: "vlbk_eqUJH",
				isCompleted: true,
			},
			{
				title: "Create paper prototypes for version one",
				id: "-gPc6xMiGT",
				isCompleted: true,
			},
			{
				title: "Complete 10 usability tests",
				id: "u8-_FntkT1",
				isCompleted: true,
			},
			{
				title: "Interview 10 prospective customers",
				id: "VcXQD9e-CO",
				isCompleted: true,
			},
			{
				title: "Find direct and indirect competitors",
				id: "w6AY-F-hA6",
				isCompleted: true,
			},
			{
				title: "SWOT analysis for each competitor",
				id: "9lNNR4bOyF",
				isCompleted: true,
			},
			{
				title: "Write up research analysis",
				id: "dSG7hY-nNR",
				isCompleted: true,
			},
			{
				title: "Calculate TAM",
				id: "ghMuzBbQn4",
				isCompleted: true,
			},
			{
				title: "Find hunter",
				id: "P3YeKEOcFD",
				isCompleted: false,
			},
			{
				title: "Gather assets",
				id: "-X8QB_5HKT",
				isCompleted: false,
			},
			{
				title: "Draft product page",
				id: "N0Ws5TbLtz",
				isCompleted: false,
			},
			{
				title: "Notify customers",
				id: "Lr3k-xtDrm",
				isCompleted: false,
			},
			{
				title: "Notify network",
				id: "gfOlpPFoqv",
				isCompleted: false,
			},
			{
				title: "Launch!",
				id: "I_aZM7ufwx",
				isCompleted: false,
			},
			{
				title: "Draft out HN post",
				id: "sQD_tJg3JX",
				isCompleted: false,
			},
			{
				title: "Get feedback and refine",
				id: "jm8APDx22e",
				isCompleted: false,
			},
			{
				title: "Publish post",
				id: "xOEM7tdrBL",
				isCompleted: false,
			},
			{
				title: "Write article",
				id: "PrW8CQz3Bq",
				isCompleted: false,
			},
			{
				title: "Publish on LinkedIn",
				id: "txi0OYYOn7",
				isCompleted: false,
			},
			{
				title: "Publish on Inndie Hackers",
				id: "yinEsLGYGo",
				isCompleted: false,
			},
			{
				title: "Publish on Medium",
				id: "EUR9_8iEzx",
				isCompleted: false,
			},
			{
				title: "Launch privately to our waitlist",
				id: "RNEsmVGQ8n",
				isCompleted: false,
			},
			{
				title: "Launch publicly on PH, HN, etc.",
				id: "EDpbXcz60A",
				isCompleted: false,
			},
			{
				title: "Interview 10 customers",
				id: "wQYU4Z7DLx",
				isCompleted: false,
			},
			{
				title: "Review common customer pain points and suggestions",
				id: "NfR3r86D_O",
				isCompleted: false,
			},
			{
				title: "Outline next steps for our roadmap",
				id: "SyixquakCn",
				isCompleted: false,
			},
		],
	},
}

const subtaskSlice = createSlice({
	name: "subtask_slice",
	initialState,
	reducers: {
		addSubtasks: (state, action: PayloadAction<TaskManagerPopupWindowFormData>) => {
			const { subtasks } = action.payload
			state.value.subtasks.push(...subtasks)
		},
		checkSubtask: (state, action: PayloadAction<string>) => {
			const id = action.payload
			const selectedSubtask = state.value.subtasks.find((subtask) => subtask.id === id)
			if (selectedSubtask) {
				selectedSubtask.isCompleted = !selectedSubtask.isCompleted
			}
		},
		updateSubtasks: (
			state,
			action: PayloadAction<{ taskManagerPopupWindowFormData: TaskManagerPopupWindowFormData; subtasksBeforeDispatch: Subtask[] }>
		) => {
			const { taskManagerPopupWindowFormData, subtasksBeforeDispatch } = action.payload
			const { task, subtasks: subtasksAfterDispatch, column } = taskManagerPopupWindowFormData

			const deletedSubtaskIds = findDeletedSubtasks(subtasksBeforeDispatch, subtasksAfterDispatch)
			const addedSubtaskIds = findAddedSubtasks(subtasksBeforeDispatch, subtasksAfterDispatch)
			const modifiedSubtaskIds = findModifiedSubtasks(subtasksBeforeDispatch, subtasksAfterDispatch)





			deleteSubTasks(deletedSubtaskIds)
			addSubtasks(addedSubtaskIds)











			function deleteSubTasks(idArray: (string | undefined)[]) {
				const deleteSetOfIds = new Set(idArray)
				state.value.subtasks = state.value.subtasks.filter((subtask) => !deleteSetOfIds.has(subtask.id))
			}
			function addSubtasks(subtasks: (Subtask | undefined)[]) {
				console.log('you ran this')
				subtasks.forEach(subtask => {
					if (subtask) {
						state.value.subtasks.push(subtask)
					}
				})
			}

			function modifySubtasks() {}





























			console.log("deleted subtasks: ", deletedSubtaskIds)
			console.log("added subtasks: ", addedSubtaskIds)
			console.log("modified subtasks: ", modifiedSubtaskIds)

			function findDeletedSubtasks(subtasksBeforeDispatch: Subtask[], subtasksAfterDispatch: Subtask[]): (string | undefined)[] {
				const subtasksAfterDispatchRecord: Record<string, Subtask> = {}
				subtasksAfterDispatch.forEach((subtask: Subtask) => (subtasksAfterDispatchRecord[subtask.id] = subtask))

				return subtasksBeforeDispatch
					.map((subtask: Subtask) => {
						if (!subtasksAfterDispatchRecord[subtask.id]) {
							return subtask.id
						}
					})
					.filter((id: string | undefined) => Boolean(id))
			}
			function findAddedSubtasks(subtasksBeforeDispatch: Subtask[], subtasksAfterDispatch: Subtask[]): (Subtask | undefined)[] {
				const subtasksBeforeDispatchRecord: Record<string, Subtask> = {}
				subtasksBeforeDispatch.forEach((subtask: Subtask) => (subtasksBeforeDispatchRecord[subtask.id] = subtask))

				return subtasksAfterDispatch
					.map((subtask: Subtask) => {
						if (!subtasksBeforeDispatchRecord[subtask.id]) {
							return subtask
						}
					})
					.filter((subtask: Subtask | undefined) => Boolean(subtask))
			}
			function findModifiedSubtasks(subtasksBeforeDispatch: Subtask[], subtasksAfterDispatch: Subtask[]) {
				const subtasksAfterDispatchRecord: Record<string, Subtask> = {}
				subtasksAfterDispatch.forEach((subtask: Subtask) => (subtasksAfterDispatchRecord[subtask.id] = subtask))

				return subtasksBeforeDispatch
					.map((subtask: Subtask) => {
						if (subtasksAfterDispatchRecord[subtask.id]) {
							return subtask.id
						}
					})
					.filter((id: string | undefined) => Boolean(id))
			}
		},
	},
})

export default subtaskSlice.reducer
export const { addSubtasks, checkSubtask, updateSubtasks } = subtaskSlice.actions
