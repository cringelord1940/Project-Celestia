// import { State } from '@global/store'

const useScrollState = (
  _setNavRouteActiveState: (state: any) => void,
  id: number,
) => {
  return {
    handleScroll: ({ motionValue }: any) => {
      _setNavRouteActiveState({
        id: id,
        scrollable: true,
        motionValue: motionValue,
      })
    },
  }
}

export { useScrollState }
