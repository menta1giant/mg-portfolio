interface IProject {
  name: string
  link: string
}

export interface ISkill {
  name: string
  logo: string
  projectsUsed: IProject[]
  id: string
}
