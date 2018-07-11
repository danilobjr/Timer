import * as React from 'react';
import { SFC } from 'react';
import { Icon } from './Icon';

export const IconSquareDouble: SFC<{}> = () => (
  <Icon name="icon-square-double" width={10} height={10}>
    <polyline points="2.5,2.5 2.5,0.5 9.5,0.5 9.5,7.5 7.5,7.5" fill="none" />
    <rect x="0.5" y="2.5" width="7" height="7" fill="none" />
  </Icon>
)
