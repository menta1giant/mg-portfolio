interface IProject {
  name: string;
  link: string;
}

export interface ISkill {
  name: string;
  description: string;
  logo: string;
  projectsUsed: IProject[]
}