export const txTypes = {
  transfer: {
    send: 'Send'
  },
  declaration: {
    create_validator: 'Create Validator',
    edit_validator: 'Edit Validator',
    unjail: 'Unjail'
  },
  staking: {
    delegate: 'Delegate',
    begin_redelegate: 'Redelegate',
    begin_unbonding: 'Unbond',
    set_withdraw_address: 'Set Withdraw Address',
    withdraw_delegator_reward: 'Withdraw Delegation Reward'
  },
  proposal: {
    submit_proposal: 'Submit Proposal',
    deposit: 'Deposit',
    vote: 'Vote'
  },
  exchange: {
    create_order: 'Create Order',
    take_order: 'Take Order',
    withdrawal_order: 'Withdrawal Order'
  },
  issue: {
    issue: 'Issue',
    issue_mint: 'Issue Mint',
    issue_burn: 'Issue Burn',
    issue_burn_from: 'Issue Burn From',
    issue_burn_any: 'Issue Burn Any',
    issue_finish_minting: 'Issue Finish Minting',
    issue_description: 'Issue Description',
    issue_transfer_ownership: 'Issue Transfer Ownership',
    issue_burn_off: 'Issue Burn Off',
    issue_burn_from_off: 'Issue Burn From Off',
    issue_burn_any_off: 'Issue Burn Any Off'
  }
};
