import goalsImg from './assets/goals.jpg'
import Header from './components/Header'
import { useState } from 'react'
import CourseGoalList from './components/CourseGoalList'
import NewGoalForm from './components/NewGoalForm'
import InfoBox from './components/InfoBox'

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

  const warnings = () => {
    if (goals?.length === 0) {
      return (
        <InfoBox mode='hint'>
          You have no course goals yet. Start setting some.
        </InfoBox>
      )
    } else if (goals?.length >= 6) {
      return (
        <InfoBox mode='warning' severity='medium'>
          You are collecting too many goals. Dont put too much on your plate
        </InfoBox>
      )
    }
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your course Goals</h1>
      </Header>
      <NewGoalForm addGoal={handleAddGoal} />
      {goals?.length === 0 ? (
        warnings()
      ) : (
        <ul>
          {goals?.map((goal) => (
            <CourseGoalList
              {...goal}
              key={goal?.id}
              deleteGoal={handleGoalDelete}
            />
          ))}
        </ul>
      )}
    </main>
  )
}
