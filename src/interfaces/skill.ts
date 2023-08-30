interface IProject {
  name: string
  link: string | null
}

export interface ISkill {
  name: string
  logo: string
  projectsUsed: IProject[]
  id: string
}
