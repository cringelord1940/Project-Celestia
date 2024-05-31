import type { PostBlock } from '@types'
import React from 'react'
import { renderBlock } from './renderBlock'

interface SectionsProps {
  blocks: PostBlock.Block[]
}

export const Blocks: React.FC<SectionsProps> = ({ blocks }) => {
  return (
    <>
      {blocks.map((block, index) => (
        <React.Fragment key={index}>{renderBlock(block)}</React.Fragment>
      ))}
    </>
  )
}
