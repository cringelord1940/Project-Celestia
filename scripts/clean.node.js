/* eslint-disable @typescript-eslint/no-var-requires */
const { rimraf } = require('rimraf')
const { glob } = require('glob')

const directoriesToRemove = [
  'pnpm-lock.yaml',
  'node_modules',
  'apps/**/node_modules',
  'packages/**/node_modules',
  'servers/node_modules',
]

directoriesToRemove.forEach(async (pattern) => {
  const dir = await glob(pattern, {
    ignore: {
      childrenIgnored: (p) => p.isNamed('node_modules'),
    },
  })
  rimraf(dir)
    .then(() => console.log(`Removed: ${dir}`))
    .catch((err) => console.error(`Error removing ${dir}: ${err}`))
})
