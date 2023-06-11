type TaskManagerPopupWindowFormData = {
    task: {
        title: string
        description: string
    }
    subtasks: Subtask[]
    columns: Column[]
}