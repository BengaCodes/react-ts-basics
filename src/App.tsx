import goalsImg from './assets/goals.jpg'
import Header from './components/Header'
import { useState } from 'react'
import CourseGoalList from './components/CourseGoalList'
import NewGoalForm from './components/NewGoalForm'

export interface Goal {
  title: string
  description: string
  id: number
}

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([])

  const handleAddGoal = (goal: Goal) => {
    setGoals((prevGoals) => {
      return [
        ...prevGoals,
        {
          ...goal
        }
      ]
    })
  }

  const handleGoalDelete = (id: number) => {
    setGoals((prevGoals) => {
      return prevGoals?.filter((goal) => goal?.id !== id)
    })
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your course Goals</h1>
      </Header>
      <NewGoalForm addGoal={handleAddGoal} />
      <ul>
        {goals?.map((goal) => (
          <CourseGoalList
            {...goal}
            key={goal?.id}
            deleteGoal={handleGoalDelete}
          />
        ))}
      </ul>
    </main>
  )
}
