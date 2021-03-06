export interface User {
  _id: string,
  username: string,
  password: string,
  email: string,
  name: string,
  image?: string,
  permissions?: boolean,
  pdfReport?: any[],
  patientProfile?: any[]
  events?: any[]
}