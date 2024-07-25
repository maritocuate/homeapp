declare module './portfolioData' {
  export interface Project {
    screenshot: string
    title: string
    description: string
    tech: string
    url: string
    source: string
  }

  const projects: Project[]
  export default projects
}

export {}
declare module './portfolioData' {
  const projects: Project[]
  export default projects
}
