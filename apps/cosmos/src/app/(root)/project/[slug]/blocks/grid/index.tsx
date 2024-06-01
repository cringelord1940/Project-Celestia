import { GridBlockProps } from './grid.common'
import { PROJECT } from '@/enums'
import { MinimalGrid } from './grid.minimal'

export const GridBlock: React.FC<GridBlockProps> = ({ grid }) => {
  switch (grid.gridType) {
    case PROJECT.GRID.MINIMAL:
      return <MinimalGrid grid={grid} />
    default:
      return null
  }
}
