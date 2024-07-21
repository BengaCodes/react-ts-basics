import CourseGoal from './CourseGoal'
import { Goal } from '../App'

interface CourseGoalListProps extends Goal {
  deleteGoal: (id: number) => void
}

const CourseGoalList = ({
  title,
  description,
  id,
  deleteGoal
}: CourseGoalListProps) => {
  return (
    <li>
      <CourseGoal title={title}>
        <p>{description}</p>
        <button onClick={() => deleteGoal(id)}>delete</button>
      </CourseGoal>
    </li>
  )
}

export default CourseGoalList
