import { render } from "@testing-library/react"
import BoardBtn from "./BoardBtn"
import { Provider } from "react-redux"

describe("BoardBtn", () => {
	const board: Board = {
		name: "Platform Launch",
		id: "OLk7-93MkK",
		selected: true,
		columns: ["z8UHNIXCKV", "nLgowJGVMG", "fxLoDxr5No"],
	}
	const menuChoice: "dropdown" | "sidebar" = "dropdown"

	test("renders correctly", () => {
		render( <BoardBtn {...board} menuArea={menuChoice}/>, {wrapper: Provider}
		)
	})
})
