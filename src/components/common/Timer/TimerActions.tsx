import * as React from 'react';
import { SFC } from 'react';
import { TimerMainButton } from './TimerMainButton';
import { TimerMainButtonType } from './TimerMainButtonType';
import { TimerButton } from './TimerButton';

type TimerActionsProps = {
  disableMainButton?: boolean;
  hideExpandButton?: boolean;
  hideResetButton?: boolean;
  hideShrinkButton?: boolean;
  percentageProgress?: number;
  mainButton: TimerMainButtonType;
  onClickResetButton: () => void;
  onClickMainButton: () => void;
  onToggleExpandButton: () => void;
};

export const TimerActions: SFC<TimerActionsProps> = ({
  children,
  disableMainButton,
  hideExpandButton,
  hideResetButton,
  hideShrinkButton,
  percentageProgress,
  mainButton,
  onClickResetButton,
  onClickMainButton,
  onToggleExpandButton,
}) => (
    <div className="timer-actions">
      {children}

      {mainButton !== 'stop' && (
        <TimerButton
          className="reset"
          icon="reset"
          title="Reset"
          hideButton={hideResetButton}
          onClick={onClickResetButton}
        />
      )}

      <TimerMainButton
        disabled={disableMainButton}
        icon={mainButton}
        percentageProgress={percentageProgress}
        onClick={onClickMainButton}
      />

      <TimerButton
        className="expand"
        icon="expand"
        title="Expand"
        hideButton={hideExpandButton}
        position="right"
        onClick={onToggleExpandButton}
      />

      <TimerButton
        className="shrink"
        icon="compress"
        title="Shrink"
        hideButton={hideShrinkButton}
        position="right"
        onClick={onToggleExpandButton}
      />
    </div>
  );

TimerActions.defaultProps = {
  disableMainButton: false,
  hideExpandButton: false,
  hideShrinkButton: true,
  percentageProgress: 0,
};
