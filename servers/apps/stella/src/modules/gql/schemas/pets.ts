import { objectType, queryType } from 'nexus'

const Pet = objectType({
  name: 'Pet',
  definition(t) {
    t.id('id')
    t.string('name')
    t.string('type')
  },
})

const Owner = objectType({
  name: 'Owner',
  definition(t) {
    t.id('id')
    t.string('name')
  },
})

const Query = queryType({
  definition(t) {
    t.list.field('pets', {
      type: 'Pet',
      resolve: () => [
        {
          id: 1,
          name: 'Ruby',
          type: 'cat',
        },
        {
          id: 2,
          name: 'Tubby',
          type: 'cat',
        },
        {
          id: 3,
          name: 'Folk',
          type: 'dog',
        },
      ],
    })
    t.list.field('owners', {
      type: 'Owner',
      resolve: () => [
        {
          id: 1,
          name: 'IceJi',
        },
        {
          id: 2,
          name: 'Tubby',
          type: 'Mia',
        },
      ],
    })
  },
})

export const PetSchema = [Pet, Owner, Query]
