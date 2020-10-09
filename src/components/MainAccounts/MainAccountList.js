import React from 'react';
import MainAccountItem from './MainAccountItem';


const AccountList = ({
  authUser,
  accounts,
  onEditAccount,
  onRemoveAccount,
}) => (
  <ul>
    {accounts.map(account => (
      <MainAccountItem
        authUser={authUser}
        key={account.uid}
        account={account}
        onEditAccount={onEditAccount}
        onRemoveAccount={onRemoveAccount}
      />
    ))}
  </ul>
);

export default AccountList;
