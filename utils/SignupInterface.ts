export const APIURL = 'https://charag-din-backend.vercel.app'
export interface InputValues {
  email: string
  password: string
  Name: string
  Image: File | null
}

export interface UserData {
  _id: string
  name: string
  email: string
  createdAt: string
  imageUrl: string
}

export interface UserFetched {
  Email: string
  JobTitle: string
  Name: string
  Salary: string
  createdAt: string
  imageUrl: string
}
