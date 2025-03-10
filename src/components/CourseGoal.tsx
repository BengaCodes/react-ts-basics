// type CourseGoalProps = {
//   title: string
//   description: string
// }

import { type PropsWithChildren } from 'react'

type CourseGoalProps = PropsWithChildren<{ title: string }>

const CourseGoal = ({ title, children }: CourseGoalProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    </article>
  )
}

export default CourseGoal
