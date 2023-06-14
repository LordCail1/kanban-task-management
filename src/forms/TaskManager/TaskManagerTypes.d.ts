type TaskManagerPopupWindowFormData = {
    task: {
        title: string
        description: string
        id: string
    }
    subtasks: Subtask[]
    columns: Column[]
}