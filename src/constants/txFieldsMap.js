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
  make_exchange: [...txListFieldsMap.make, ...defaultFields],
  take_exchange: [...txListFieldsMap.take, ...defaultFields],
  cancel_exchange: [...txListFieldsMap['cancel-exchange'], ...defaultFields],

  // issue
  issue_issue: [
    ...txListFieldsMap.issue,
    ...defaultFields,
    {
      name: 'Total Supply',
      field: 'tx.value.msg.0.value.params.total_supply',
      linkType: ''
    },
    {
      name: 'Decimals',
      field: 'tx.value.msg.0.value.params.decimals',
      linkType: ''
    },
    {
      name: 'Description',
      field: 'tx.value.msg.0.value.params.description',
      linkType: ''
    },
    {
      name: 'Owner Burn Disabled',
      field: 'tx.value.msg.0.value.params.burn_owner_disabled',
      linkType: ''
    },
    {
      name: 'Owner Burn From Holder Disabled',
      field: 'tx.value.msg.0.value.params.burn_from_disabled',
      linkType: ''
    },
    {
      name: 'Holder Burn Disabled',
      field: 'tx.value.msg.0.value.params.burn_holder_disabled',
      linkType: ''
    },
    {
      name: 'Freeze Disabled',
      field: 'tx.value.msg.0.value.params.freeze_disabled',
      linkType: ''
    },
    {
      name: 'Minting Finished',
      field: 'tx.value.msg.0.value.params.minting_finished',
      linkType: ''
    }
  ],
  issue_transfer_ownership_issue: [...txListFieldsMap.issue_transfer_ownership, ...defaultFields],
  issue_description_issue: [
    ...txListFieldsMap.issue_description,
    ...defaultFields,
    {
      name: 'Description',
      field: 'tx.value.msg.0.value.description',
      linkType: ''
    }
  ],
  issue_mint_issue: [
    ...txListFieldsMap.issue_mint,
    ...defaultFields,
    {
      name: 'Decimals',
      field: 'tx.value.msg.0.value.decimals',
      linkType: ''
    },
    {
      name: 'To',
      field: 'tx.value.msg.0.value.to',
      linkType: 'address'
    }
  ],
  issue_burn_owner_issue: [...txListFieldsMap.issue_burn_owner, ...defaultFields],
  issue_burn_from_issue: [...txListFieldsMap.issue_burn_from, ...defaultFields],
  issue_burn_holder_issue: [...txListFieldsMap.issue_burn_holder, ...defaultFields],
  issue_freeze_issue: [...txListFieldsMap.issue_freeze, ...defaultFields],
  issue_unfreeze_issue: [...txListFieldsMap.issue_unfreeze, ...defaultFields],
  issue_disable_feature_issue: [...txListFieldsMap.issue_disable_feature, ...defaultFields],

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
      linkType: ''
    },
    {
      name: 'Description',
      field: 'tx.value.msg.0.value.params.description',
      linkType: ''
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
      linkType: ''
    },
    {
      name: 'Description',
      field: 'tx.value.msg.0.value.params.description',
      linkType: ''
    }
  ],
  create_future: [
    ...txListFieldsMap.create,
    ...defaultFields,
    {
      name: 'Total Amount',
      field: 'tx.value.msg.0.value.params.total_amount.token',
      linkType: ''
    },
    {
      name: 'Description',
      field: 'tx.value.msg.0.value.params.description',
      linkType: ''
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
      linkType: ''
    }
  ],
  inject_future: [
    ...txListFieldsMap.inject,
    ...defaultFields,
    {
      name: 'Amount',
      field: 'tx.value.msg.0.value.amount',
      linkType: ''
    }
  ],
  cancel_deposit: [
    ...txListFieldsMap['cancel-deposit'],
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
    }
  ],
  cancel_future: [
    ...txListFieldsMap['cancel-future'],
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
