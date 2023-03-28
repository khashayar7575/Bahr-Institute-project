type mockApiBlogData = {
  _id: string
  title: string
  text: string
  category: string
  image: string
  __v: number
  writer: string
  createdDate: string
  subjectCategory: string
  visitorMembers: string[]
}

type newsExtendData = {
  id: string
  writer: string
  createdDate: string
  subjectCategory: string
  visitorMembers: string[]
}

export type { mockApiBlogData, newsExtendData }
