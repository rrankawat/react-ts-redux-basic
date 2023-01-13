import { useState } from 'react'
import { useTypedDispatch, actionCreators } from '../state'

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('')
  const dispatch = useTypedDispatch()

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(actionCreators.searchRepositories(term))
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  )
}

export default RepositoriesList
