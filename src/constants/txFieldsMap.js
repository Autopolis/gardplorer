/**
 * The mapping between the elements displayed in the transaction page and the tx data.
 * linkType has 5 options: '', 'tx', 'block', 'address', 'validator'. (default = '', for no link)
 */
const defaultFields = [
  {
    name: 'Action',
    field: 'tags.0.value',
    linkType: '',
    hideInTable: true
  },
  {
    name: 'Txhash',
    field: 'txhash',
    linkType: 'tx'
  },
  {
    name: 'Block',
    field: 'height',
    linkType: 'block'
  }
];

export const txFieldsMap = {
  // bank
  send: [
    ...defaultFields,
    {
      name: 'From',
      field: 'tx.value.msg.0.value.from_address',
      linkType: 'address'
    },
    {
      name: 'To',
      field: 'tx.value.msg.0.value.to_address',
      linkType: 'address'
    },
    {
      name: 'Amount',
      field: 'tx.value.msg.0.value.amount',
      linkType: '',
      hideInTable: true
    },
    {
      name: 'Gas Used',
      field: 'gas_used',
      linkType: ''
    },
    {
      name: 'Memo',
      field: 'tx.value.memo',
      linkType: '',
      hideInTable: true
    }
  ],

  // staking
  delegate: [
    ...defaultFields,
    {
      name: 'Validator',
      field: 'tx.value.msg.0.value.validator_addr',
      linkType: 'validator'
    },
    {
      name: 'Delegator',
      field: 'tags.1.value',
      linkType: 'address'
    },
    {
      name: 'Destination Validator',
      field: 'tags.2.value',
      linkType: 'validator'
    },
    {
      name: 'Delegation',
      field: ['tx.value.msg.0.value.value.amount', 'tx.value.msg.0.value.value.denom'],
      linkType: ''
    },
    {
      name: 'Gas Used',
      field: 'gas_used',
      linkType: '',
      hideInTable: true
    }
  ],
  begin_redelegate: [
    ...defaultFields,
    {
      name: 'Validator From',
      field: 'tx.value.msg.0.value.validator_src_addr',
      linkType: 'validator'
    },
    {
      name: 'Validator To',
      field: 'tx.value.msg.0.value.validator_dst_addr',
      linkType: 'validator'
    },
    {
      name: 'Delegator',
      field: 'tx.value.msg.0.value.delegator_addr',
      linkType: 'address'
    },
    {
      name: 'Shares Amount',
      field: 'tx.value.msg.0.value.shares_amount',
      linkType: ''
    },
    {
      name: 'End Time',
      field: 'tags.4.value',
      linkType: ''
    },
    {
      name: 'Gas Used',
      field: 'gas_used',
      linkType: '',
      hideInTable: true
    }
  ],
  begin_unbonding: [
    ...defaultFields,
    {
      name: 'Validator',
      field: 'tx.value.msg.0.value.validator_addr',
      linkType: 'validator'
    },
    {
      name: 'Delegator',
      field: 'tx.value.msg.0.value.delegator_addr',
      linkType: 'address'
    },
    {
      name: 'Shares Amount',
      field: 'tx.value.msg.0.value.shares_amount',
      linkType: ''
    },
    {
      name: 'End Time',
      field: 'tags.4.value',
      linkType: ''
    },
    {
      name: 'Gas Used',
      field: 'gas_used',
      linkType: '',
      hideInTable: true
    }
  ],
  create_validator: [
    ...defaultFields,
    {
      name: 'Validator',
      field: 'tx.value.msg.0.value.validator_address',
      linkType: 'validator'
    },
    {
      name: 'Owner',
      field: 'tx.value.msg.0.value.delegator_address',
      linkType: 'address'
    },
    {
      name: 'Self Bond',
      field: ['tx.value.msg.0.value.value.amount', 'tx.value.msg.0.value.value.denom'],
      linkType: ''
    },
    {
      name: 'Moniker',
      field: 'tags.2.value',
      linkType: '',
    },
    {
      name: 'Commission Rate',
      field: 'tx.value.msg.0.value.commission',
      linkType: ''
    },
    {
      name: 'Min Self Delegation',
      field: 'tx.value.msg.0.value.min_self_delegation',
      linkType: '',
    },
    {
      name: 'Identity',
      field: 'tags.3.value',
      linkType: '',
    },
    {
      name: 'Description',
      field: 'tx.value.msg.0.value.description',
      linkType: ''
    },
    {
      name: 'Gas Used',
      field: 'gas_used',
      linkType: '',
      hideInTable: true
    }
  ],
  edit_validator: [
    ...defaultFields,
    {
      name: 'Validator',
      field: 'tx.value.msg.0.value.validator_address',
      linkType: 'validator'
    },
    {
      name: 'Owner',
      field: 'tx.value.msg.0.value.delegator_address',
      linkType: 'address'
    },
    {
      name: 'Moniker',
      field: 'tx.value.msg.0.value.moniker',
      linkType: '',
    },
    {
      name: 'Identity',
      field: 'tx.value.msg.0.value.identity',
      linkType: '',
    },
    {
      name: 'Website',
      field: 'tx.value.msg.0.value.website',
      linkType: '',
    },
    {
      name: 'Details',
      field: 'tx.value.msg.0.value.details',
      linkType: '',
    },
    {
      name: 'Commission Rate',
      field: 'tx.value.msg.0.value.commission_rate',
      linkType: '',
    },
    {
      name: 'Min Self Delegation',
      field: 'tx.value.msg.0.value.min_self_delegation',
      linkType: '',
    },
    {
      name: 'Gas Used',
      field: 'gas_used',
      linkType: '',
      hideInTable: true
    }
  ],

  // slashing
  unjail: [
    ...defaultFields,
    {
      name: 'Validator',
      field: 'tx.value.msg.0.value.address',
      linkType: 'validator'
    },
    {
      name: 'Gas Used',
      field: 'gas_used',
      linkType: ''
    }
  ],

  // distribution
  set_withdraw_address: [
    ...defaultFields,
    {
      name: 'Delegator Address',
      field: 'tx.value.msg.0.value.delegator_address',
      linkType: 'address'
    },
    {
      name: 'Withdraw Address',
      field: 'tx.value.msg.0.value.withdraw_address',
      linkType: 'address'
    },
    {
      name: 'Gas Used',
      field: 'gas_used',
      linkType: ''
    }
  ],
  withdraw_delegator_reward: [
    ...defaultFields,
    {
      name: 'Delegator Address',
      field: 'tx.value.msg.0.value.delegator_address',
      linkType: 'address'
    },
    {
      name: 'Validator Address',
      field: 'tx.value.msg.0.value.validator_address',
      linkType: 'validator'
    },
    {
      name: 'Gas Used',
      field: 'gas_used',
      linkType: ''
    }
  ],
  withdraw_validator_rewards_all: [
    ...defaultFields,
    {
      name: 'Validator Address',
      field: 'tx.value.msg.0.value.validator_address',
      linkType: 'validator'
    },
    {
      name: 'Gas Used',
      field: 'gas_used',
      linkType: ''
    }
  ],

  // gov
  submit_proposal: [
    ...defaultFields,
    {
      name: 'Proposal Id',
      field: 'tags.2.value',
      linkType: ''
    },
    {
      name: 'Proposer',
      field: 'tx.value.msg.0.value.proposer',
      linkType: 'address'
    },
    {
      name: 'Proposal Type',
      field: 'tx.value.msg.0.value.proposal_type',
      linkType: ''
    },
    {
      name: 'Title',
      field: 'tx.value.msg.0.value.title',
      linkType: ''
    },
    {
      name: 'Description',
      field: 'tx.value.msg.0.value.description',
      linkType: '',
      hideInTable: true
    },
    {
      name: 'Initial Deposit',
      field: 'tx.value.msg.0.value.initial_deposit',
      linkType: '',
      hideInTable: true
    },
    {
      name: 'Memo',
      field: 'tx.value.memo',
      linkType: '',
      hideInTable: true
    },
    {
      name: 'Gas Used',
      field: 'gas_used',
      linkType: '',
      hideInTable: true
    }
  ],
  deposit: [
    ...defaultFields,
    {
      name: 'Proposal Id',
      field: 'tx.value.msg.0.value.proposal_id',
      linkType: ''
    },
    {
      name: 'Depositor',
      field: 'tx.value.msg.0.value.depositor',
      linkType: 'address'
    },
    {
      name: 'Amount',
      field: ['tx.value.msg.0.value.amount.0.amount', 'tx.value.msg.0.value.amount.0.denom'],
      linkType: ''
    },
    {
      name: 'Memo',
      field: 'tx.value.memo',
      linkType: '',
      hideInTable: true
    },
    {
      name: 'Gas Used',
      field: 'gas_used',
      linkType: '',
      hideInTable: true
    }
  ],
  vote: [
    ...defaultFields,
    {
      name: 'Proposal Id',
      field: 'tx.value.msg.0.value.proposal_id',
      linkType: ''
    },
    {
      name: 'Option',
      field: 'tx.value.msg.0.value.option',
      linkType: ''
    },
    {
      name: 'Voter',
      field: 'tx.value.msg.0.value.voter',
      linkType: 'address'
    },
    {
      name: 'Memo',
      field: 'tx.value.memo',
      linkType: '',
      hideInTable: true
    },
    {
      name: 'Gas Used',
      field: 'gas_used',
      linkType: '',
      hideInTable: true
    }
  ],

  // exchange
  create_order: [
    ...defaultFields,
    {
      name: 'Seller',
      field: 'tx.value.msg.0.value.seller',
      linkType: 'address'
    },
    {
      name: 'Supply',
      field: 'tx.value.msg.0.value.supply',
      linkType: ''
    },
    {
      name: 'Target',
      field: 'tx.value.msg.0.value.target',
      linkType: ''
    },
    {
      name: 'Memo',
      field: 'tx.value.memo',
      linkType: '',
      hideInTable: true
    },
    {
      name: 'Gas Used',
      field: 'gas_used',
      linkType: '',
      hideInTable: true
    }
  ],
  withdrawal_order: [
    ...defaultFields,
    {
      name: 'Order ID',
      field: 'tx.value.msg.0.value.order_id',
      linkType: ''
    },
    {
      name: 'Seller',
      field: 'tx.value.msg.0.value.seller',
      linkType: 'address'
    },
    {
      name: 'Status',
      field: 'tags.3.value',
      linkType: ''
    },
    {
      name: 'Memo',
      field: 'tx.value.memo',
      linkType: '',
      hideInTable: true
    },
    {
      name: 'Gas Used',
      field: 'gas_used',
      linkType: '',
      hideInTable: true
    }
  ],
  take_order: [
    ...defaultFields,
    {
      name: 'Order ID',
      field: 'tx.value.msg.0.value.order_id',
      linkType: ''
    },
    {
      name: 'Buyer',
      field: 'tx.value.msg.0.value.buyer',
      linkType: 'address'
    },
    {
      name: 'Value',
      field: 'tx.value.msg.0.value.value',
      linkType: ''
    },
    {
      name: 'Status',
      field: 'tags.3.value',
      linkType: ''
    },
    {
      name: 'Memo',
      field: 'tx.value.memo',
      linkType: '',
      hideInTable: true
    },
    {
      name: 'Gas Used',
      field: 'gas_used',
      linkType: '',
      hideInTable: true
    }
  ],

  // issue
  issue: [
    ...defaultFields,
    {
      name: 'Issue ID',
      field: 'tx.value.msg.0.value.issue_id',
      linkType: ''
    },
    {
      name: 'Issuer',
      field: 'tx.value.msg.0.value.issuer',
      linkType: 'address'
    },
    {
      name: 'Owner',
      field: 'tx.value.msg.0.value.owner',
      linkType: 'address'
    },
    {
      name: 'Issue Time',
      field: 'tx.value.msg.0.value.issue_time',
      linkType: ''
    },
    {
      name: 'Token Name',
      field: 'tx.value.msg.0.value.name',
      linkType: ''
    },
    {
      name: 'Issue Time',
      field: 'tx.value.msg.0.value.issue_time',
      linkType: ''
    },
    {
      name: 'Token Symbol',
      field: 'tx.value.msg.0.value.symbol',
      linkType: ''
    },
    {
      name: 'Total Supply',
      field: 'tx.value.msg.0.value.total_supply',
      linkType: ''
    },
    {
      name: 'Decimals',
      field: 'tx.value.msg.0.value.decimals',
      linkType: ''
    },
    {
      name: 'Description',
      field: 'tx.value.msg.0.value.description',
      linkType: ''
    },
    {
      name: 'Burning Off Function',
      field: 'tx.value.msg.0.value.burning_off',
      linkType: ''
    },
    {
      name: 'Burning From Off Function',
      field: 'tx.value.msg.0.value.burning_from_off',
      linkType: ''
    },
    {
      name: 'Burning Any Off Function',
      field: 'tx.value.msg.0.value.burning_any_off',
      linkType: ''
    },
    {
      name: 'Minting Finished Function',
      field: 'tx.value.msg.0.value.minting_finished',
      linkType: ''
    },
    {
      name: 'Memo',
      field: 'tx.value.memo',
      linkType: '',
      hideInTable: true
    },
    {
      name: 'Gas Used',
      field: 'gas_used',
      linkType: '',
      hideInTable: true
    }
  ],
  issue_transfer_ownership: [
    ...defaultFields,
    {
      name: 'Issue ID',
      field: 'tx.value.msg.0.value.issue_id',
      linkType: ''
    },
    {
      name: 'Operator',
      field: 'tx.value.msg.0.value.operator',
      linkType: 'address'
    },
    {
      name: 'New Owner',
      field: 'tx.value.msg.0.value.to',
      linkType: 'address'
    },
    {
      name: 'Memo',
      field: 'tx.value.memo',
      linkType: '',
      hideInTable: true
    },
    {
      name: 'Gas Used',
      field: 'gas_used',
      linkType: '',
      hideInTable: true
    }
  ],
  issue_description: [
    ...defaultFields,
    {
      name: 'Issue ID',
      field: 'tx.value.msg.0.value.issue_id',
      linkType: ''
    },
    {
      name: 'Operator',
      field: 'tx.value.msg.0.value.operator',
      linkType: 'address'
    },
    {
      name: 'Description',
      field: 'tx.value.msg.0.value.description',
      linkType: ''
    },
    {
      name: 'Memo',
      field: 'tx.value.memo',
      linkType: '',
      hideInTable: true
    },
    {
      name: 'Gas Used',
      field: 'gas_used',
      linkType: '',
      hideInTable: true
    }
  ],
  issue_mint: [
    ...defaultFields,
    {
      name: 'Issue ID',
      field: 'tx.value.msg.0.value.issue_id',
      linkType: ''
    },
    {
      name: 'Operator',
      field: 'tx.value.msg.0.value.operator',
      linkType: 'address'
    },
    {
      name: 'Amount',
      field: 'tx.value.msg.0.value.amount',
      linkType: ''
    },
    {
      name: 'Decimals',
      field: 'tx.value.msg.0.value.decimals',
      linkType: ''
    },
    {
      name: 'To',
      field: 'tx.value.msg.0.value.to',
      linkType: 'address'
    },
    {
      name: 'Memo',
      field: 'tx.value.memo',
      linkType: '',
      hideInTable: true
    },
    {
      name: 'Gas Used',
      field: 'gas_used',
      linkType: '',
      hideInTable: true
    }
  ],
  issue_burn: [
    ...defaultFields,
    {
      name: 'Issue ID',
      field: 'tx.value.msg.0.value.issue_id',
      linkType: ''
    },
    {
      name: 'Operator',
      field: 'tx.value.msg.0.value.operator',
      linkType: 'address'
    },
    {
      name: 'Amount',
      field: 'tx.value.msg.0.value.amount',
      linkType: ''
    },
    {
      name: 'Memo',
      field: 'tx.value.memo',
      linkType: '',
      hideInTable: true
    },
    {
      name: 'Gas Used',
      field: 'gas_used',
      linkType: '',
      hideInTable: true
    }
  ],
  issue_burn: [
    ...defaultFields,
    {
      name: 'Issue ID',
      field: 'tx.value.msg.0.value.issue_id',
      linkType: ''
    },
    {
      name: 'Operator',
      field: 'tx.value.msg.0.value.operator',
      linkType: 'address'
    },
    {
      name: 'Burn From',
      field: 'tx.value.msg.0.value.from',
      linkType: 'address'
    },
    {
      name: 'Amount',
      field: 'tx.value.msg.0.value.amount',
      linkType: ''
    },
    {
      name: 'Memo',
      field: 'tx.value.memo',
      linkType: '',
      hideInTable: true
    },
    {
      name: 'Gas Used',
      field: 'gas_used',
      linkType: '',
      hideInTable: true
    }
  ],
  issue_burn_any: [
    ...defaultFields,
    {
      name: 'Issue ID',
      field: 'tx.value.msg.0.value.issue_id',
      linkType: ''
    },
    {
      name: 'Operator',
      field: 'tx.value.msg.0.value.operator',
      linkType: 'address'
    },
    {
      name: 'Burn From',
      field: 'tx.value.msg.0.value.from',
      linkType: 'address'
    },
    {
      name: 'Amount',
      field: 'tx.value.msg.0.value.amount',
      linkType: ''
    },
    {
      name: 'Memo',
      field: 'tx.value.memo',
      linkType: '',
      hideInTable: true
    },
    {
      name: 'Gas Used',
      field: 'gas_used',
      linkType: '',
      hideInTable: true
    }
  ],
  issue_burn_off: [
    ...defaultFields,
    {
      name: 'Issue ID',
      field: 'tx.value.msg.0.value.issue_id',
      linkType: ''
    },
    {
      name: 'Operator',
      field: 'tx.value.msg.0.value.operator',
      linkType: 'address'
    },
    {
      name: 'Memo',
      field: 'tx.value.memo',
      linkType: '',
      hideInTable: true
    },
    {
      name: 'Gas Used',
      field: 'gas_used',
      linkType: '',
      hideInTable: true
    }
  ],
  issue_burn_from_off: [
    ...defaultFields,
    {
      name: 'Issue ID',
      field: 'tx.value.msg.0.value.issue_id',
      linkType: ''
    },
    {
      name: 'Operator',
      field: 'tx.value.msg.0.value.operator',
      linkType: 'address'
    },
    {
      name: 'Memo',
      field: 'tx.value.memo',
      linkType: '',
      hideInTable: true
    },
    {
      name: 'Gas Used',
      field: 'gas_used',
      linkType: '',
      hideInTable: true
    }
  ],
  issue_burn_any_off: [
    ...defaultFields,
    {
      name: 'Issue ID',
      field: 'tx.value.msg.0.value.issue_id',
      linkType: ''
    },
    {
      name: 'Operator',
      field: 'tx.value.msg.0.value.operator',
      linkType: 'address'
    },
    {
      name: 'Memo',
      field: 'tx.value.memo',
      linkType: '',
      hideInTable: true
    },
    {
      name: 'Gas Used',
      field: 'gas_used',
      linkType: '',
      hideInTable: true
    }
  ],
  issue_finish_minting: [
    ...defaultFields,
    {
      name: 'Issue ID',
      field: 'tx.value.msg.0.value.issue_id',
      linkType: ''
    },
    {
      name: 'Operator',
      field: 'tx.value.msg.0.value.operator',
      linkType: 'address'
    },
    {
      name: 'Memo',
      field: 'tx.value.memo',
      linkType: '',
      hideInTable: true
    },
    {
      name: 'Gas Used',
      field: 'gas_used',
      linkType: '',
      hideInTable: true
    }
  ],
  all: [
    ...defaultFields,
    {
      name: 'Memo',
      field: 'tx.value.memo',
      linkType: ''
    },
    {
      name: 'Gas Used',
      field: 'gas_used',
      linkType: ''
    }
  ]
};
