import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type InitialState = {
	value: {
		columns: Column[]
	}
}

const initialState: InitialState = {
	value: {
		columns: [
			{
				name: "Todo",
				id: "z8UHNIXCKV",
				tasks: ["m2HltGANwc", "INkx9CCoeX", "t-Z_mnC_gs", "zzsBAge26I"],
			},
			{
				name: "Doing",
				id: "nLgowJGVMG",
				tasks: [
					"Xx4nI8E7gx",
					"wLvI5rzULs",
					"_GVTTYCfpY",
					"x3vwsAZgF7",
					"YQ5eGXNmaw",
					"bv1PgtRCIh",
				],
			},
			{
				name: "Done",
				id: "fxLoDxr5No",
				tasks: [
					"TX1c_s04fa",
					"FLFIcNw00k",
					"D2QNHgiWI6",
					"Tbtv9x4ZWa",
					"YDkzGoB53X",
					"3jyh7xM48e",
					"opZz1bnspA",
				],
			},
			{
				name: "Todo",
				id: "W-LqSiiKad",
				tasks: ["NpqasglnII", "mrH7RocBFX", "m-SVH6K_-i"],
			},
			{
				name: "Doing",
				id: "3UiGitAZWn",
				tasks: [""],
			},
			{
				name: "Done",
				id: "8YlbhLSPE8",
				tasks: [""],
			},
			{
				name: "Now",
				id: "iT8JB5bqpt",
				tasks: ["4RzlEt_QMj", "xrCLqcTcXz"],
			},
			{
				name: "Next",
				id: "0anclfaunM",
				tasks: [""],
			},
			{
				name: "Later",
				id: "rDWYcYhbuO",
				tasks: [""],
			},
		],
	},
}

const columnsSlice = createSlice({
	name: "columns_slice",
	initialState,
	reducers: {
		addColumn: (state) => {
			return state
		},

		addColumns: (state, action: PayloadAction<Column[]>) => {
			state.value.columns.push(...action.payload)
		},
	},
})

export default columnsSlice.reducer
export const { addColumn, addColumns } = columnsSlice.actions
