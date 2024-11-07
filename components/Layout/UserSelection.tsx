import React from 'react'
import DropDown from './DropDown'
import TaskPage from '../Tasks/TaskPage'
import AttendancePage from '../Attendance/AttendancePage'
export interface UserFetched {
  Email: string
  JobTitle: string
  Name: string
  Salary: string
  createdAt: string
  imageUrl: string
}

const UserSelection = ({
  type,
  Users,
}: {
  type: string
  Users: UserFetched[]
}) => {
  return (
    <>
      <div className="my-4">
        <DropDown type={type} Users={Users} />
        {type === 'Attendance' ? <AttendancePage type={type} /> : <TaskPage />}
      </div>
    </>
  )
}
export default UserSelection
