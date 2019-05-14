export const txTypes = {
  // bank
  send: 'Send',

  // staking
  delegate: 'Delegate',
  begin_redelegate: 'Redelegate',
  begin_unbonding: 'Unbond',
  create_validator: 'Create Validator',
  edit_validator: 'Edit Validator', // new

  // slashing
  unjail: 'Unjail',

  // distribution
  set_withdraw_address: 'Set Withdraw Address', // new
  withdraw_delegator_reward: 'Withdraw Delegation Reward', // new

  // gov
  submit_proposal: 'Submit Proposal',
  deposit: 'Deposit',
  vote: 'Vote',

  // exchange
  create_order: 'Create Order', // new
  take_order: 'Take Order', // new
  withdrawal_order: 'Withdrawal Order', // new

  // issue
  issue: 'Issue', // new
  issue_mint: 'Issue Mint', // new
  issue_burn: 'Issue Burn', // new
  issue_burn_from: 'Issue Burn From', // new
  issue_burn_any: 'Issue Burn Any', // new
  issue_finish_minting: 'Issue Finish Minting', // new
  issue_description: 'Issue Description', // new
  issue_transfer_ownership: 'Issue Transfer Ownership', // new
  issue_burn_off: 'Issue Burn Off', // new
  issue_burn_from_off: 'Issue Burn From Off', // new
  issue_burn_any_off: 'Issue Burn Any Off' // new
};
