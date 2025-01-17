import { ComponentProps, ComponentState } from '@fluentui/react-utilities';
import {
  VirtualizerConfigProps,
  VirtualizerConfigState,
  VirtualizerChildRenderFunction,
} from '../Virtualizer/Virtualizer.types';

import { VirtualizerScrollViewSlots } from '../VirtualizerScrollView/VirtualizerScrollView.types';

export type VirtualizerScrollViewDynamicSlots = VirtualizerScrollViewSlots;

export type VirtualizerScrollViewDynamicProps = ComponentProps<Partial<VirtualizerScrollViewDynamicSlots>> &
  Partial<Omit<VirtualizerConfigProps, 'itemSize' | 'numItems' | 'getItemSize' | 'children'>> & {
    /**
     * Set as the minimum item size.
     * Axis: 'vertical' = Height
     * Axis: 'horizontal' = Width
     */
    itemSize: number;
    /**
     * Callback for acquiring size of individual items
     * @param index - the index of the requested size's child
     */
    getItemSize: (index: number) => number;
    /**
     * The total number of items to be virtualized.
     */
    numItems: number;
    /**
     * Child render function.
     * Iteratively called to return current virtualizer DOM children.
     * Will act as a row or column indexer depending on Virtualizer settings.
     */
    children: VirtualizerChildRenderFunction;
  };

export type VirtualizerScrollViewDynamicState = ComponentState<VirtualizerScrollViewDynamicSlots> &
  VirtualizerConfigState;
