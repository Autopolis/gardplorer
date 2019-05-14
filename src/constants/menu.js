export const menu = [
  {
    name: 'Transactions',
    children: [
      { name: 'transfers', link: '/txs/transfer' },
      { name: 'declarations', link: '/txs/declaration' },
      { name: 'stakings', link: '/txs/staking' },
      { name: 'governance', link: '/txs/proposal' },
      { name: 'token exchanges', link: '/txs/exchange' },
      { name: 'issuances', link: '/txs/issue' }
    ]
  },
  { name: 'Blocks', link: '/block' },
  { name: 'Proposals', link: '/proposal' },
  { name: 'Tokens', link: '/token' },
  { name: 'Validators', link: '/validator' }
];
