import { Network, Alchemy } from 'alchemy-sdk'

const settings = {
  apiKey: 'FwisCZzhoLixNDsNRbJgQD4DIheJrIvC',
  network: Network.MATIC_MAINNET,
}

const alchemy = new Alchemy(settings)

// get the latest block
const latestBlock = alchemy.core.getBlock('latest').then(console.log)
