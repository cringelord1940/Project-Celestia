import { objectType, queryType } from 'nexus'

const Post = objectType({
  name: 'Post',
  definition(t) {
    t.id('id')
    t.string('title')
    t.string('body')
  },
})

const Query = queryType({
  definition(t) {
    t.list.field('posts', {
      type: 'Post',
      resolve: () => [
        {
          id: '1',
          title: 'My first GraphQL server',
          body: 'How I wrote my first GraphQL server',
        },
      ],
    })
  },
})

export const PostSchema = [Post /*, Query*/]
