type TaskManagerPopupWindowFormData = {
    task: {
        title: string
        description: string
        id: string
    }
    subtasks: Subtask[]
    column: Column
}