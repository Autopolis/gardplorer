/**
 * The mapping between the elements displayed in the transaction page and the tx data.
 * linkType has 5 options: '', 'tx', 'block', 'address', 'validator', 'token'. (default = '', for no link)
 */
export const defaultListFields = [{
    name: 'Time',
    field: 'timestamp',
    linkType: ''
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

export const txListFieldsMap = {
  // bank
  send: [
    ...defaultListFields,
    {
      name: 'From',
      field: 'tx.value.msg.0.value.from_address',
      linkType: 'address'
    },
    {
      name: 'To',
      field: 'tx.value.msg.0.value.to_address',
      linkType: 'address'
    }
  ],
  multisend: [
    ...defaultListFields,
    {
      name: 'Inputs',
      field: 'tx.value.msg.0.value.inputs',
      linkType: 'address'
    },
    {
      name: 'Outputs',
      field: 'tx.value.msg.0.value.outputs',
      linkType: 'address'
    }
  ],

  // staking
  delegate: [
    ...defaultListFields,
    {
      name: 'Delegator',
      field: 'tx.value.msg.0.value.delegator_address',
      linkType: 'address'
    },
    {
      name: 'Destination Validator',
      field: 'tx.value.msg.0.value.validator_address',
      linkType: 'validator'
    },
    {
      name: 'Delegation',
      field: 'tx.value.msg.0.value.amount',
      linkType: ''
    }
  ],
  begin_redelegate: [
    ...defaultListFields,
    {
      name: 'Validator From',
      field: 'tx.value.msg.0.value.validator_src_address',
      linkType: 'validator'
    },
    {
      name: 'Validator To',
      field: 'tx.value.msg.0.value.validator_dst_address',
      linkType: 'validator'
    },
    {
      name: 'Delegator',
      field: 'tx.value.msg.0.value.delegator_address',
      linkType: 'address'
    },
    {
      name: 'Shares Amount',
      field: 'tx.value.msg.0.value.amount',
      linkType: ''
    }
  ],
  begin_unbonding: [
    ...defaultListFields,
    {
      name: 'Validator',
      field: 'tx.value.msg.0.value.validator_address',
      linkType: 'validator'
    },
    {
      name: 'Delegator',
      field: 'tx.value.msg.0.value.delegator_address',
      linkType: 'address'
    },
    {
      name: 'Amount',
      field: 'tx.value.msg.0.value.amount',
      linkType: ''
    }
  ],
  create_validator: [
    ...defaultListFields,
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
      field: 'tx.value.msg.0.value.value',
      linkType: ''
    }
  ],
  edit_validator: [
    ...defaultListFields,
    {
      name: 'Validator',
      field: 'tx.value.msg.0.value.address',
      linkType: 'validator'
    },
    {
      name: 'Moniker',
      field: 'tx.value.msg.0.value.Description.moniker',
      linkType: ''
    }
  ],

  // slashing
  unjail: [
    ...defaultListFields,
    {
      name: 'Validator',
      field: 'tx.value.msg.0.value.address',
      linkType: 'validator'
    }
  ],

  // distribution
  set_withdraw_address: [
    ...defaultListFields,
    {
      name: 'Delegator Address',
      field: 'tx.value.msg.0.value.delegator_address',
      linkType: 'address'
    },
    {
      name: 'Withdraw Address',
      field: 'tx.value.msg.0.value.withdraw_address',
      linkType: 'address'
    }
  ],
  withdraw_delegator_reward: [
    ...defaultListFields,
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
      name: 'Rewards',
      field: 'tags.4.value',
      linkType: ''
    }
  ],
  withdraw_validator_rewards_all: [
    ...defaultListFields,
    {
      name: 'Validator Address',
      field: 'tags.2.value',
      linkType: 'validator'
    },
    {
      name: 'Commission',
      field: 'tags.3.value',
      linkType: ''
    }
  ],

  // gov
  submit_proposal: [
    ...defaultListFields,
    {
      name: 'Proposal Id',
      field: 'tags.1.value',
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
    }
  ],
  deposit: [
    ...defaultListFields,
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
      field: 'tx.value.msg.0.value.amount',
      linkType: ''
    }
  ],
  vote: [
    ...defaultListFields,
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
    }
  ],

  // exchange
  make: [
    ...defaultListFields,
    {
      name: 'Order ID',
      field: 'tags.2.value',
      linkType: ''
    },
    {
      name: 'Seller',
      field: 'tags.3.value',
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
    }
  ],
  'cancel-exchange': [
    ...defaultListFields,
    {
      name: 'Order ID',
      field: 'tags.2.value',
      linkType: ''
    },
    {
      name: 'Sender',
      field: 'tags.3.value',
      linkType: 'address'
    }
  ],
  take: [
    ...defaultListFields,
    {
      name: 'Order ID',
      field: 'tags.2.value',
      linkType: ''
    },
    {
      name: 'Buyer',
      field: 'tags.3.value',
      linkType: 'address'
    },
    {
      name: 'Value',
      field: 'tx.value.msg.0.value.value',
      linkType: ''
    }
  ],

  // issue
  issue: [
    ...defaultListFields,
    {
      name: 'Issue ID',
      field: 'tags.2.value',
      linkType: 'token'
    },
    {
      name: 'Issuer',
      field: 'tx.value.msg.0.value.sender',
      linkType: 'address'
    },
    {
      name: 'Token Name',
      field: 'tx.value.msg.0.value.params.name',
      linkType: ''
    },
    {
      name: 'Token Symbol',
      field: 'tx.value.msg.0.value.params.symbol',
      linkType: ''
    }
  ],
  issue_transfer_ownership: [
    ...defaultListFields,
    {
      name: 'Issue ID',
      field: 'tx.value.msg.0.value.issue_id',
      linkType: 'token'
    },
    {
      name: 'Operator',
      field: 'tx.value.msg.0.value.sender',
      linkType: 'address'
    },
    {
      name: 'New Owner',
      field: 'tx.value.msg.0.value.to',
      linkType: 'address'
    }
  ],
  issue_description: [
    ...defaultListFields,
    {
      name: 'Issue ID',
      field: 'tx.value.msg.0.value.issue_id',
      linkType: 'token'
    },
    {
      name: 'Operator',
      field: 'tx.value.msg.0.value.sender',
      linkType: 'address'
    }
  ],
  issue_mint: [
    ...defaultListFields,
    {
      name: 'Issue ID',
      field: 'tx.value.msg.0.value.issue_id',
      linkType: 'token'
    },
    {
      name: 'Operator',
      field: 'tx.value.msg.0.value.sender',
      linkType: 'address'
    },
    {
      name: 'Amount',
      field: 'tx.value.msg.0.value.amount',
      linkType: ''
    }
  ],
  issue_burn_owner: [
    ...defaultListFields,
    {
      name: 'Issue ID',
      field: 'tx.value.msg.0.value.issue_id',
      linkType: 'token'
    },
    {
      name: 'Operator',
      field: 'tx.value.msg.0.value.sender',
      linkType: 'address'
    },
    {
      name: 'Amount',
      field: 'tx.value.msg.0.value.amount',
      linkType: ''
    }
  ],
  issue_burn_from: [
    ...defaultListFields,
    {
      name: 'Issue ID',
      field: 'tx.value.msg.0.value.issue_id',
      linkType: 'token'
    },
    {
      name: 'Operator',
      field: 'tx.value.msg.0.value.sender',
      linkType: 'address'
    },
    {
      name: 'Burn From',
      field: 'tx.value.msg.0.value.holder',
      linkType: 'address'
    },
    {
      name: 'Amount',
      field: 'tx.value.msg.0.value.amount',
      linkType: ''
    }
  ],
  issue_burn_holder: [
    ...defaultListFields,
    {
      name: 'Issue ID',
      field: 'tx.value.msg.0.value.issue_id',
      linkType: 'token'
    },
    {
      name: 'Operator',
      field: 'tx.value.msg.0.value.sender',
      linkType: 'address'
    },
    {
      name: 'Amount',
      field: 'tx.value.msg.0.value.amount',
      linkType: ''
    }
  ],
  issue_freeze: [
    ...defaultListFields,
    {
      name: 'Issue ID',
      field: 'tx.value.msg.0.value.issue_id',
      linkType: 'token'
    },
    {
      name: 'Operator',
      field: 'tx.value.msg.0.value.sender',
      linkType: 'address'
    },
    {
      name: 'Freeze Address',
      field: 'tx.value.msg.0.value.accAddress',
      linkType: 'address'
    },
    {
      name: 'Freeze Type',
      field: 'tx.value.msg.0.value.freeze_type',
      linkType: ''
    },
    {
      name: 'End Time',
      field: 'tx.value.msg.0.value.end_time',
      linkType: ''
    }
  ],
  issue_unfreeze: [
    ...defaultListFields,
    {
      name: 'Issue ID',
      field: 'tx.value.msg.0.value.issue_id',
      linkType: 'token'
    },
    {
      name: 'Operator',
      field: 'tx.value.msg.0.value.sender',
      linkType: 'address'
    },
    {
      name: 'Unfreeze Address',
      field: 'tx.value.msg.0.value.accAddress',
      linkType: 'address'
    },
    {
      name: 'Freeze Type',
      field: 'tx.value.msg.0.value.freeze_type',
      linkType: ''
    }
  ],
  issue_disable_feature: [
    ...defaultListFields,
    {
      name: 'Issue ID',
      field: 'tx.value.msg.0.value.issue_id',
      linkType: 'token'
    },
    {
      name: 'Operator',
      field: 'tx.value.msg.0.value.sender',
      linkType: 'address'
    },
    {
      name: 'Feature',
      field: 'tx.value.msg.0.value.feature',
      linkType: ''
    }
  ],

  // box
  create: [
    ...defaultListFields,
    {
      name: 'Box ID',
      field: 'tags.2.value',
      linkType: ''
    },
    {
      name: 'Creator',
      field: 'tags.3.value',
      linkType: 'address'
    },
    {
      name: 'Box Name',
      field: 'tx.value.msg.0.value.params.name',
      linkType: ''
    },
    {
      name: 'Box Category',
      field: 'tags.1.value',
      linkType: ''
    }
  ],
  withdraw: [
    ...defaultListFields,
    {
      name: 'Box ID',
      field: 'tags.2.value',
      linkType: ''
    },
    {
      name: 'Operator',
      field: 'tags.3.value',
      linkType: 'address'
    },
    {
      name: 'Box Category',
      field: 'tags.1.value',
      linkType: ''
    }
  ],
  inject: [
    ...defaultListFields,
    {
      name: 'Box ID',
      field: 'tags.2.value',
      linkType: ''
    },
    {
      name: 'Operator',
      field: 'tags.3.value',
      linkType: 'address'
    },
    {
      name: 'Box Category',
      field: 'tags.1.value',
      linkType: ''
    }
  ],
  'cancel-deposit': [
    ...defaultListFields,
    {
      name: 'Box ID',
      field: 'tags.2.value',
      linkType: ''
    },
    {
      name: 'Sender',
      field: 'tags.3.value',
      linkType: 'address'
    }
  ],
  'cancel-future': [
    ...defaultListFields,
    {
      name: 'Box ID',
      field: 'tags.2.value',
      linkType: ''
    },
    {
      name: 'Sender',
      field: 'tags.3.value',
      linkType: 'address'
    }
  ],
  describe: [
    ...defaultListFields,
    {
      name: 'Box ID',
      field: 'tags.2.value',
      linkType: ''
    },
    {
      name: 'Sender',
      field: 'tags.3.value',
      linkType: 'address'
    }
  ],
  disable_feature: [
    ...defaultListFields,
    {
      name: 'Box ID',
      field: 'tx.value.msg.0.value.box_id',
      linkType: ''
    },
    {
      name: 'Operator',
      field: 'tx.value.msg.0.value.sender',
      linkType: 'address'
    },
    {
      name: 'Feature',
      field: 'tx.value.msg.0.value.feature',
      linkType: ''
    }
  ],

  all: [
    ...defaultListFields,
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
