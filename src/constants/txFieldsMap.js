/**
 * The mapping between the elements displayed in the transaction page and the tx data.
 * linkType has 5 options: '', 'tx', 'block', 'address', 'validator'. (default = '', for no link)
 */

export const txFieldsMap = {
  send: [
    {
      name: 'Action',
      field: 'tags.0.value',
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
    },
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
      field: ['tx.value.msg.0.value.amount.0.amount', 'tx.value.msg.0.value.amount.0.denom'],
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
      linkType: '',
      hideInTable: true
    }
  ],
  delegate: [
    {
      name: 'Action',
      field: 'tags.0.value',
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
    },
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
      name: 'Delegation',
      field: ['tx.value.msg.0.value.value.amount', 'tx.value.msg.0.value.value.denom'],
      linkType: ''
    },
    {
      name: 'Gas Used',
      field: 'gas_used',
      linkType: ''
    }
  ],
  create_validator: [
    {
      name: 'Action',
      field: 'tags.0.value',
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
    },
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
      name: 'Delegation',
      field: ['tx.value.msg.0.value.value.amount', 'tx.value.msg.0.value.value.denom'],
      linkType: ''
    },
    {
      name: 'Gas Used',
      field: 'gas_used',
      linkType: ''
    }
  ]
};
