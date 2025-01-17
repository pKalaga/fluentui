import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';
import { DrawerBaseTypes } from '../../util/DrawerBase.types';

export type DrawerInlineSlots = {
  root: Slot<'div'>;
};

/**
 * DrawerInline Props
 */
export type DrawerInlineProps = ComponentProps<DrawerInlineSlots> &
  DrawerBaseTypes & {
    /**
     * Whether the drawer has a separator line.
     *
     * @default false
     */
    separator?: boolean;
  };

/**
 * State used in rendering DrawerInline
 */
export type DrawerInlineState = ComponentState<DrawerInlineSlots> &
  DrawerBaseTypes &
  Pick<DrawerInlineProps, 'open' | 'separator'>;
