/* istanbul ignore file */
/* eslint-disable import/no-default-export, react-hooks/rules-of-hooks */
import React from 'react';
import { useValue } from 'react-cosmos/fixture';

import { Button } from './index';

const async = () =>
  new Promise(resolve => {
    setTimeout(resolve, 1000);
  });

export default {
  Primary: (
    <Button primary disabled={false} loading={false}>
      Click me
    </Button>
  ),
  Secondary: (
    <Button secondary disabled={false} loading={false}>
      Click me
    </Button>
  ),
  'Async onClick': (
    <Button primary disabled={false} onClick={async}>
      Click me
    </Button>
  ),
};
