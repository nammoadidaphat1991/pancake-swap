// import { MenuEntry, menuStatus } from 'easybake-uikit'
import { MenuEntry } from 'easybake-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://easybake.finance/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://easybake.finance/farms',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: 'https://easybake.finance/sugar',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://easybake.finance/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: 'https://easybake.finance/nft',
  // },
  // {
  //   label: 'Team Battle',
  //   icon: 'TeamBattleIcon',
  //   href: 'https://easybake.finance/competition',
  //   status: menuStatus.SOON,
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: 'https://easybakeswap.finance/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: 'https://easybakeswap.finance/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: 'https://easybakeswap.finance/profile',
  //     },
  //   ],
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://info.easybake.finance',
      },
      {
        label: 'Tokens',
        href: 'https://info.easybake.finance/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://info.easybake.finance/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://info.easybake.finance/accounts',
      },
    ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: 'https://easybake.finance/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Voting',
        href: 'https://snapshot.page/#/easybake.eth',
      },
      {
        label: 'Github',
        href: 'https://github.com/easybakeswap',
      },
      // {
      //   label: 'Docs',
      //   href: 'https://easybake.finance',
      // },
      {
        label: 'Blog',
        href: 'https://easybake.medium.com',
      },
    ],
  },
]

export default config
