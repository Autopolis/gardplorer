import { txListFieldsMap } from './txListFieldsMap';

const defaultFields = [
  {
    name: 'Action',
    field: 'tags.0.value',
    linkType: ''
  },
  {
    name: 'Gas Used',
    field: 'gas_used',
    linkType: ''
  },
  {
    name: 'Memo',
    field: 'tx.value.memo',
    linkType: ''
  }
];

export const txFieldsMap = {
  // bank
  send: [
    ...txListFieldsMap.send,
    ...defaultFields,
    {
      name: 'Amount',
      field: 'tx.value.msg.0.value.amount',
      linkType: ''
    }
  ],
  multisend: [...txListFieldsMap.multisend, ...defaultFields],

  // staking
  delegate: [...txListFieldsMap.delegate, ...defaultFields],
  begin_redelegate: [
    ...txListFieldsMap.begin_redelegate,
    ...defaultFields,
    {
      name: 'End Time',
      field: 'tags.5.value',
      linkType: ''
    }
  ],
  begin_unbonding: [
    ...txListFieldsMap.begin_unbonding,
    ...defaultFields,
    {
      name: 'End Time',
      field: 'tags.4.value',
      linkType: ''
    }
  ],
  create_validator: [
    ...txListFieldsMap.create_validator,
    ...defaultFields,
    {
      name: 'Commission Rate',
      field: 'tx.value.msg.0.value.commission',
      linkType: ''
    },
    {
      name: 'Min Self Delegation',
      field: 'tx.value.msg.0.value.min_self_delegation',
      linkType: ''
    },
    {
      name: 'Description',
      field: 'tx.value.msg.0.value.description',
      linkType: ''
    }
  ],
  edit_validator: [
    ...txListFieldsMap.edit_validator,
    ...defaultFields,
    {
      name: 'Identity',
      field: 'tx.value.msg.0.value.Description.identity',
      linkType: ''
    },
    {
      name: 'Website',
      field: 'tx.value.msg.0.value.Description.website',
      linkType: ''
    },
    {
      name: 'Details',
      field: 'tx.value.msg.0.value.Description.details',
      linkType: ''
    },
    {
      name: 'Commission Rate',
      field: 'tx.value.msg.0.value.commission_rate',
      linkType: ''
    },
    {
      name: 'Min Self Delegation',
      field: 'tx.value.msg.0.value.min_self_delegation',
      linkType: ''
    }
  ],

  // slashing
  unjail: [...txListFieldsMap.unjail, ...defaultFields],

  // distribution
  set_withdraw_address: [...txListFieldsMap.set_withdraw_address, ...defaultFields],
  withdraw_delegator_reward: [...txListFieldsMap.withdraw_delegator_reward, ...defaultFields],
  withdraw_validator_rewards_all: [
    ...txListFieldsMap.withdraw_validator_rewards_all,
    ...defaultFields
  ],

  // gov
  submit_proposal: [
    ...txListFieldsMap.submit_proposal,
    ...defaultFields,
    {
      name: 'Description',
      field: 'tx.value.msg.0.value.description',
      linkType: ''
    },
    {
      name: 'Initial Deposit',
      field: 'tx.value.msg.0.value.initial_deposit',
      linkType: ''
    }
  ],
  deposit: [...txListFieldsMap.deposit, ...defaultFields],
  vote: [...txListFieldsMap.vote, ...defaultFields],

  // exchange
  create_order: [...txListFieldsMap.create_order, ...defaultFields],
  withdrawal_order: [...txListFieldsMap.withdrawal_order, ...defaultFields],
  take_order: [...txListFieldsMap.take_order, ...defaultFields],

  // issue
  issue: [
    ...txListFieldsMap.issue,
    ...defaultFields,
    {
      name: 'Owner',
      field: 'tx.value.msg.0.value.CoinIssueInfo.owner',
      linkType: 'address',
      hideInTable: true
    },
    {
      name: 'Total Supply',
      field: 'tx.value.msg.0.value.CoinIssueInfo.total_supply',
      linkType: '',
      hideInTable: true
    },
    {
      name: 'Decimals',
      field: 'tx.value.msg.0.value.CoinIssueInfo.decimals',
      linkType: '',
      hideInTable: true
    },
    {
      name: 'Description',
      field: 'tx.value.msg.0.value.CoinIssueInfo.description',
      linkType: '',
      hideInTable: true
    },
    {
      name: 'Burning Off Function',
      field: 'tx.value.msg.0.value.CoinIssueInfo.burning_off',
      linkType: '',
      hideInTable: true
    },
    {
      name: 'Burning From Off Function',
      field: 'tx.value.msg.0.value.CoinIssueInfo.burning_from_off',
      linkType: '',
      hideInTable: true
    },
    {
      name: 'Burning Any Off Function',
      field: 'tx.value.msg.0.value.CoinIssueInfo.burning_any_off',
      linkType: '',
      hideInTable: true
    },
    {
      name: 'Minting Finished Function',
      field: 'tx.value.msg.0.value.CoinIssueInfo.minting_finished',
      linkType: '',
      hideInTable: true
    }
  ],
  issue_transfer_ownership: [...txListFieldsMap.issue_transfer_ownership, ...defaultFields],
  issue_description: [
    ...txListFieldsMap.issue_description,
    ...defaultFields,
    {
      name: 'Description',
      field: 'tx.value.msg.0.value.description',
      linkType: '',
      hideInTable: true
    }
  ],
  issue_mint: [
    ...txListFieldsMap.issue_mint,
    ...defaultFields,
    {
      name: 'Decimals',
      field: 'tx.value.msg.0.value.decimals',
      linkType: '',
      hideInTable: true
    },
    {
      name: 'To',
      field: 'tx.value.msg.0.value.to',
      linkType: 'address',
      hideInTable: true
    }
  ],
  issue_burn_owner: [...txListFieldsMap.issue_burn_owner, ...defaultFields],
  issue_burn_from: [...txListFieldsMap.issue_burn_from, ...defaultFields],
  issue_burn_holder: [...txListFieldsMap.issue_burn_holder, ...defaultFields],
  issue_freeze: [...txListFieldsMap.issue_freeze, ...defaultFields],
  issue_unfreeze: [...txListFieldsMap.issue_unfreeze, ...defaultFields],
  issue_disable_feature: [...txListFieldsMap.issue_disable_feature, ...defaultFields],

  // box
  create_lock: [
    ...txListFieldsMap.create,
    ...defaultFields,
    {
      name: 'End Time',
      field: 'tx.value.msg.0.value.params.lock.end_time',
      linkType: ''
    },
    {
      name: 'Total Amount',
      field: 'tx.value.msg.0.value.params.total_amount.token',
      linkType: '',
      hideInTable: true
    },
    {
      name: 'Description',
      field: 'tx.value.msg.0.value.params.description',
      linkType: '',
      hideInTable: true
    }
  ],
  create_deposit: [
    ...txListFieldsMap.create,
    ...defaultFields,
    {
      name: 'Start Time',
      field: 'tx.value.msg.0.value.params.deposit.start_time',
      linkType: ''
    },
    {
      name: 'Total Amount',
      field: 'tx.value.msg.0.value.params.total_amount.token',
      linkType: '',
      hideInTable: true
    },
    {
      name: 'Description',
      field: 'tx.value.msg.0.value.params.description',
      linkType: '',
      hideInTable: true
    }
  ],
  create_future: [
    ...txListFieldsMap.create,
    ...defaultFields,
    {
      name: 'Total Amount',
      field: 'tx.value.msg.0.value.params.total_amount.token',
      linkType: '',
      hideInTable: true
    },
    {
      name: 'Description',
      field: 'tx.value.msg.0.value.params.description',
      linkType: '',
      hideInTable: true
    }
  ],
  withdraw_deposit: [...txListFieldsMap.withdraw, ...defaultFields],
  withdraw_future: [...txListFieldsMap.withdraw, ...defaultFields],
  inject_deposit: [
    ...txListFieldsMap.inject,
    ...defaultFields,
    {
      name: 'Amount',
      field: 'tx.value.msg.0.value.amount',
      linkType: '',
      hideInTable: true
    }
  ],
  inject_future: [
    ...txListFieldsMap.inject,
    ...defaultFields,
    {
      name: 'Amount',
      field: 'tx.value.msg.0.value.amount',
      linkType: '',
      hideInTable: true
    }
  ],
  cancel_deposit: [
    ...defaultFields,
    {
      name: 'Box ID',
      field: 'tx.value.msg.0.value.box_id',
      linkType: ''
    },
    {
      name: 'Sender',
      field: 'tx.value.msg.0.value.sender',
      linkType: 'address'
    },
    {
      name: 'Interest',
      field: 'tx.value.msg.0.value.interest',
      linkType: ''
    },
    {
      name: 'Operation',
      field: 'tx.value.msg.0.value.operation',
      linkType: ''
    }
  ],
  describe: [
    ...defaultFields,
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
      name: 'Description',
      field: 'tx.value.msg.0.value.description',
      linkType: ''
    }
  ],
  disable_feature: [
    ...defaultFields,
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
