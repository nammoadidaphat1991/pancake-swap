import { ChainId } from 'easybakeswap-sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x1605d633E30f430d54162232571475C620c69da5',
  [ChainId.RINKEBY]: '0x1605d633E30f430d54162232571475C620c69da5'

}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
