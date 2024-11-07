import { TaskFetch } from '@/utils/TaskformInterface'
export const filteredTasks = (
  allTasks: TaskFetch[],
  statusFilter: string,
  timeFilter: string,
  priorityFilter: string,
  monthFilter: number, // New parameter for month filtering as a number
  selectedUser: String
) =>
  allTasks.filter((task) => {
    const matchesTimeFilter =
      timeFilter === 'All' || task.TaskType === timeFilter

    const matchesStatusFilter =
      statusFilter === 'All' || task.progress === statusFilter

    const matchesPriorityFilter =
      priorityFilter === 'All' || task.priority === priorityFilter

    const selectedUserFilter =
      selectedUser === 'All' || task.assignedTo === selectedUser

    // Month filtering logic
    const taskDate = new Date(task.createdAt)
    const taskMonth = taskDate.getMonth() // Get month as a number (0-11)
    const matchesMonthFilter = monthFilter === -1 || taskMonth === monthFilter // -1 can be used for "All"

    return (
      matchesTimeFilter &&
      matchesStatusFilter &&
      matchesPriorityFilter &&
      matchesMonthFilter &&
      selectedUserFilter
    )
  })
