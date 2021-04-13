import React from 'react';
import { expectToMatchSnapshot } from '../../../utils/match-snapshot';

import { Button } from '..';

describe('Button', () => {
  it('matches snapshot', () => {
    expectToMatchSnapshot(
      <>
        <Button>Button</Button>
        <Button primary>Button primary</Button>
        <Button secondary>Button secondary</Button>
        <Button tertiary>Button tertiary</Button>
      </>,
    );
  });
});
