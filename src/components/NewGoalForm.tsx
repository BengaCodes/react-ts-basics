import { FormEvent, useState } from 'react'
import { Goal } from '../App'

type NewGoalFormProp = {
  addGoal: (goal: Goal) => void
}

const NewGoalForm = ({ addGoal }: NewGoalFormProp) => {
  const [formInputs, setFormInputs] = useState({
    goal: '',
    summary: ''
  })
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { goal, summary } = formInputs
    addGoal({ title: goal, description: summary, id: Math.random() })
    setFormInputs({ goal: '', summary: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name)
    console.log(e.target.value)
    setFormInputs({ ...formInputs, [e.target.name]: e.target.value })
  }

  return (
    <form action='' onSubmit={handleSubmit}>
      <p>
        <label htmlFor='goal'>Your goal</label>
        <input
          type='text'
          id='goal'
          name='goal'
          value={formInputs?.goal}
          onChange={handleChange}
        />
        <label htmlFor='summary'>Short Summary</label>
        <input
          type='text'
          id='summary'
          name='summary'
          value={formInputs?.summary}
          onChange={handleChange}
        />
      </p>
      <button>Add Goal</button>
    </form>
  )
}

export default NewGoalForm
