import * as React from "react"
import ProjectCard from "@lekoarts/gatsby-theme-cara/src/components/project-card"
import InsertScript from "../insertScript"

const components = {
  // eslint-disable-next-line react/display-name
  ProjectCard: ({ link, title, bg, children, ...props }) => (
    <ProjectCard {...props} link={link} title={title} bg={bg}>
      {children}
    </ProjectCard>
  ),
  InsertScript: () => (
    <InsertScript />
  )
}

export default components
