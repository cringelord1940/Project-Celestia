import { GraphQLDefinitionsFactory } from '@nestjs/graphql'
import { join } from 'path'

const definitionsFactory = new GraphQLDefinitionsFactory()
definitionsFactory.generate({
  typePaths: ['./graphQL/**/*.graphql'],
  path: join(process.cwd(), 'schema/graphql.schema.ts'),
  outputAs: 'class',
})
