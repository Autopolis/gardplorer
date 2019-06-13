export const txTypes = {
  transfers: {
    send: 'Send'
  },
  declarations: {
    create_validator: 'Create Validator',
    edit_validator: 'Edit Validator',
    unjail: 'Unjail'
  },
  stakings: {
    delegate: 'Delegate',
    begin_redelegate: 'Redelegate',
    begin_unbonding: 'Unbond',
    set_withdraw_address: 'Set Withdraw Address',
    withdraw_delegator_reward: 'Withdraw Delegation Reward'
  },
  governance: {
    submit_proposal: 'Submit Proposal',
    deposit: 'Deposit',
    vote: 'Vote'
  },
  exchanges: {
    create_order: 'Make Order',
    take_order: 'Take Order',
    withdrawal_order: 'Cancel Order'
  },
  issuances: {
    issue: 'Issue',
    issue_mint: 'Mint',
    issue_burn_owner: 'Burn',
    issue_burn_from: 'Burn From',
    issue_burn_holder: 'Holder Burn',
    issue_freeze: 'Freeze',
    issue_unfreeze: 'Unfreeze',
    issue_description: 'Description',
    issue_transfer_ownership: 'Transfer Ownership',
    issue_disable_feature: 'Disable Feature'
  },
  tokenBoxs: {
    box_create_lock: 'Create LockBox',
    box_create_deposit: 'Create DepositBox',
    box_create_future: 'Create FutureBox',
    box_interest: 'Deposit Interests',
    box_deposit: 'Deposit Capital',
    box_description: 'Box Description',
    box_disable_feature: 'Desable Feature'
  }
};
