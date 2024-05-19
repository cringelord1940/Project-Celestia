import { useReducer, useEffect } from 'react'
import { useMemoCompare } from '../utils/useMemoCompare'

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'idle':
      return { status: 'idle', data: undefined, error: undefined }
    case 'loading':
      return { status: 'loading', data: undefined, error: undefined }
    case 'success':
      return { status: 'success', data: action.payload, error: undefined }
    case 'error':
      return { status: 'error', data: undefined, error: action.payload }
    default:
      throw new Error('invalid action')
  }
}

function useFirestoreQuery(query: any) {
  const initialState = {
    status: query ? 'loading' : 'idle',
    data: undefined,
    error: undefined,
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  const queryCached = useMemoCompare(query, (prevQuery) => {
    return prevQuery && query && query.isEqual(prevQuery)
  })
  useEffect(() => {
    if (!queryCached) {
      dispatch({ type: 'idle' })
      return
    }
    dispatch({ type: 'loading' })

    return queryCached.onSnapshot(
      (response: any) => {
        const data = response.docs
          ? getCollectionData(response)
          : getDocData(response)
        dispatch({ type: 'success', payload: data })
      },
      (error: Error) => {
        dispatch({ type: 'error', payload: error })
      },
    )
  }, [queryCached])
  return state
}
function getDocData(doc: any) {
  return doc.exists === true ? { id: doc.id, ...doc.data() } : null
}

function getCollectionData(collection: any) {
  return collection.docs.map(getDocData)
}

export { useFirestoreQuery }
