import * as React from 'react';
import { SFC } from 'react';
import { Icon, IconProps } from './Icon';
import { iconStyles } from './styles';

const styles = Object.assign({},
  iconStyles.timerCommandButton.base
);

interface IconPauseProps extends Partial<IconProps> { }

export const IconPause: SFC<IconPauseProps> = (props) => (
  <Icon {...props} name="icon-pause" width={8} height={16}>
    <line x1="1" y1="0.7" x2="1" y2="15.3" />
    <line x1="7" y1="0.7" x2="7" y2="15.3" />
  </Icon>
)
