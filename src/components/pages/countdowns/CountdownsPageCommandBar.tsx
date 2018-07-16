import * as React from 'react';
import Link from 'next/link';
import { Fragment, SFC } from 'react';
import { CommandBar, CommandBarButton } from 'components/common';

type CountdownsPageCommandBarProps = {
  hideEditButton?: boolean;
  isEdition: boolean;
  onClickEdit?: () => void;
  onClickDone?: () => void;
};

export const CountdownsPageCommandBar: SFC<CountdownsPageCommandBarProps> = ({
  hideEditButton,
  isEdition,
  onClickDone,
  onClickEdit }) => (
    <CommandBar>
      {!!isEdition ? (
        <CommandBarButton
          icon="check"
          title="Done"
          onClick={onClickDone}
        />
      ) : (
          <Fragment>
            {!hideEditButton && (
              <CommandBarButton
                icon="checklist"
                title="Edit"
                onClick={onClickEdit}
              />
            )}

            <Link href="/new-countdown" prefetch>
              <CommandBarButton icon="plus" title="New" />
            </Link>
          </Fragment>
        )}
    </CommandBar>
  );

CountdownsPageCommandBar.defaultProps = {
  hideEditButton: true,
  onClickDone: () => null,
  onClickEdit: () => null,
};
