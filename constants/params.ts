import BigNumber from 'bignumber.js';

export const INIT_CONTRACT_PARAMS = {
  chainId: 'tDVW',
  rpcUrl: 'https://tdvw-test-node.aelf.io',
  contractAddress: '238X6iw1j8YKcHvkDYVtYVbuYk2gJnK8UoNpVCtssynSpVC8hb',
};

export const TRANSFER_PARAMS = {
  symbol: 'ELF',
  to: 'ELF_2LxtGrAkbzAgcBEqfPUuNNxeKsy5hmKFuySshoWwDBhb4iAZ6n_tDVW',
  amount: new BigNumber(1).times(1e5).toFixed(),
  memo: 'transfer',
  caHash: 'xxxxxx',
};