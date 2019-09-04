import {
  txListFieldsMap
} from './txListFieldsMap';
const defaultFields = [{
    name: 'Action',
    field: '',
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
  send_bank: [
    ...txListFieldsMap.send,
    ...defaultFields,
    {
      name: 'Amount',
      field: 'tx.value.msg.0.value.amount',
      linkType: ''
    }
  ],
  multisend_bank: [...txListFieldsMap.multisend, ...defaultFields],

  // staking
  delegate_staking: [...txListFieldsMap.delegate, ...defaultFields],
  begin_redelegate_staking: [
    ...txListFieldsMap.begin_redelegate,
    ...defaultFields,
    {
      name: 'End Time',
      field: 'tags.5.value',
      linkType: ''
    }
  ],
  begin_unbonding_staking: [
    ...txListFieldsMap.begin_unbonding,
    ...defaultFields,
    {
      name: 'End Time',
      field: '',
      linkType: ''
    }
  ],
  create_validator_staking: [
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
  edit_validator_staking: [
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
  unjail_slashing: [...txListFieldsMap.unjail, ...defaultFields],

  // distribution
  set_withdraw_address_distribution: [...txListFieldsMap.set_withdraw_address, ...defaultFields],
  withdraw_delegator_reward_distribution: [
    ...txListFieldsMap.withdraw_delegator_reward,
    ...defaultFields
  ],
  withdraw_validator_rewards_all_distribution: [
    ...txListFieldsMap.withdraw_validator_rewards_all,
    ...defaultFields
  ],

  // gov
  submit_proposal_governance: [
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
  deposit_governance: [...txListFieldsMap.deposit, ...defaultFields],
  vote_governance: [...txListFieldsMap.vote, ...defaultFields]
};
