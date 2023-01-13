import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { createStore, applyMiddleware, AnyAction } from 'redux'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import reducers from './reducers'

export const store = createStore(reducers, {}, applyMiddleware(thunk))

export type AppDispatch = typeof store.dispatch
export type ReduxState = ReturnType<typeof reducers>
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  AnyAction
>

export const useTypedDispatch = () => useDispatch<TypedDispatch>()
export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector
