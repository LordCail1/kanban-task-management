import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type InitialState = {
	value: {
		tasks: Task[]
	}
}

const initialState: InitialState = {
	value: {
		tasks: [
			{
				title: "Build UI for onboarding flow",
				id: "m2HltGANwc",
				description: "",
				status: "Todo",
				subtasks: ["n8D4RZZQ2j", "0wuNHPBrXF", "q_SiwPj0YX"],
			},
			{
				title: "Build UI for search",
				id: "INkx9CCoeX",
				description: "",
				status: "Todo",
				subtasks: ["m_MfnV5_aY"],
			},
			{
				title: "Build settings UI",
				id: "t-Z_mnC_gs",
				description: "",
				status: "Todo",
				subtasks: ["0ZY500Kk-n", "EClNAu4T96"],
			},
			{
				title: "QA and test all major user journeys",
				id: "zzsBAge26I",
				description: "Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.",
				status: "Todo",
				subtasks: ["M2HjJRJkYs", "AU3-251Xpt"],
			},
			{
				title: "Design settings and search pages",
				id: "Xx4nI8E7gx",
				description: "",
				status: "Doing",
				subtasks: ["bxRO3u5-9w", "xnm9vVWt99", "iT22GYbfOa"],
			},
			{
				title: "Add account management endpoints",
				id: "wLvI5rzULs",
				description: "",
				status: "Doing",
				subtasks: ["M8Luxqwdpi", "GLYAElSckE", "XWf8fT5HGO"],
			},
			{
				title: "Design onboarding flow",
				id: "_GVTTYCfpY",
				description: "",
				status: "Doing",
				subtasks: ["QPUxCvU8HO", "n5CXXLdpbf", "QRDgRT-zo4"],
			},
			{
				title: "Add search enpoints",
				id: "x3vwsAZgF7",
				description: "",
				status: "Doing",
				subtasks: ["d3OslmM1s3", "1lPwiIH4Ty"],
			},
			{
				title: "Add authentication endpoints",
				id: "YQ5eGXNmaw",
				description: "",
				status: "Doing",
				subtasks: ["bS6n-cHMlH", "5MBZc5cMvS"],
			},
			{
				title: "Research pricing points of various competitors and trial different business models",
				id: "bv1PgtRCIh",
				description:
					"We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
				status: "Doing",
				subtasks: ["JjwEVAvL6l", "43PcAZIjo2", "ZPoGinxY1D"],
			},
			{
				title: "Conduct 5 wireframe tests",
				id: "TX1c_s04fa",
				description: "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
				status: "Done",
				subtasks: ["K0UEEDiGWM"],
			},
			{
				title: "Create wireframe prototype",
				id: "FLFIcNw00k",
				description: "Create a greyscale clickable wireframe prototype to test our asssumptions so far.",
				status: "Done",
				subtasks: ["JGB8F5gKaq"],
			},
			{
				title: "Review results of usability tests and iterate",
				id: "D2QNHgiWI6",
				description: "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
				status: "Done",
				subtasks: ["D2QNHgiWI6", "allAAfQJQi", "vlbk_eqUJH"],
			},
			{
				title: "Create paper prototypes and conduct 10 usability tests with potential customers",
				id: "Tbtv9x4ZWa",
				description: "",
				status: "Done",
				subtasks: ["-gPc6xMiGT", "u8-_FntkT1"],
			},
			{
				title: "Market discovery",
				id: "YDkzGoB53X",
				description:
					"We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.",
				status: "Done",
				subtasks: ["VcXQD9e-CO"],
			},
			{
				title: "Competitor analysis",
				id: "3jyh7xM48e",
				description: "",
				status: "Done",
				subtasks: ["w6AY-F-hA6", "9lNNR4bOyF"],
			},
			{
				title: "Research the market",
				id: "opZz1bnspA",
				description: "We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.",
				status: "Done",
				subtasks: ["dSG7hY-nNR", "ghMuzBbQn4"],
			},
			{
				title: "Plan Product Hunt launch",
				id: "NpqasglnII",
				description: "",
				status: "Todo",
				subtasks: ["P3YeKEOcFD", "-X8QB_5HKT", "N0Ws5TbLtz", "Lr3k-xtDrm", "gfOlpPFoqv", "I_aZM7ufwx"],
			},
			{
				title: "Share on Show HN",
				id: "mrH7RocBFX",
				description: "",
				status: "",
				subtasks: ["sQD_tJg3JX", "jm8APDx22e", "xOEM7tdrBL"],
			},
			{
				title: "Write launch article to publish on multiple channels",
				id: "m-SVH6K_-i",
				description: "",
				status: "",
				subtasks: ["PrW8CQz3Bq", "txi0OYYOn7", "yinEsLGYGo", "EUR9_8iEzx"],
			},
			{
				title: "Launch version one",
				id: "4RzlEt_QMj",
				description: "",
				status: "",
				subtasks: ["RNEsmVGQ8n", "EDpbXcz60A"],
			},
			{
				title: "Review early feedback and plan next steps for roadmap",
				id: "xrCLqcTcXz",
				description:
					"Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.",
				status: "",
				subtasks: ["wQYU4Z7DLx", "NfR3r86D_O", "SyixquakCn"],
			},
		],
	},
}

const tasksSlice = createSlice({
	name: "tasks_slice",
	initialState,
	reducers: {
		addTask: (state, action: PayloadAction<TaskManagerPopupWindowFormData>) => {
			const { task, column, subtasks } = action.payload
			state.value.tasks.push({
				title: task.title,
				id: task.id,
				description: task.description,
				status: column.name,
				subtasks: subtasks.map((subtask: Subtask) => subtask.id),
			})
		},
		deleteTask: (state) => {
			return state
		},
	},
})

export default tasksSlice.reducer
export const { addTask, deleteTask } = tasksSlice.actions
