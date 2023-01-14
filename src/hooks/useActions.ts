import { useTypedDispatch, actionCreators } from '../state'
import { bindActionCreators } from 'redux'

export const useActions = () => {
  const dispatch = useTypedDispatch()

  return bindActionCreators(actionCreators, dispatch)
}
