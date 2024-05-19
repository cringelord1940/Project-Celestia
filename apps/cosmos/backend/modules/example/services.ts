import type { exampleInput } from './schema'
import type { Context } from '@backend/trpc/trpc.context'

export const example = async ({
  ctx,
  input,
}: {
  ctx: Context
  input: exampleInput
}) => {
  return {
    greeting: `Hello, I'm ${input.text}`,
  }
}
