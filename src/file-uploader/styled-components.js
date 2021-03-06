/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import {styled} from '../styles/index.js';
import type {StylePropsT} from './types.js';

export const StyledFileDragAndDrop = styled<StylePropsT>('div', props => {
  const borderColor = props.$isDragActive
    ? props.$theme.colors.fileUploaderBorderColorActive
    : props.$theme.colors.fileUploaderBorderColorDefault;
  const borderStyle = props.$afterFileDrop ? 'none' : 'dashed';
  return ({
    alignItems: 'center',
    backgroundColor: props.$isDragActive
      ? props.$theme.colors.fileUploaderBackgroundColorActive
      : props.$theme.colors.fileUploaderBackgroundColor,
    borderLeftColor: borderColor,
    borderRightColor: borderColor,
    borderTopColor: borderColor,
    borderBottomColor: borderColor,
    borderLeftStyle: borderStyle,
    borderRightStyle: borderStyle,
    borderTopStyle: borderStyle,
    borderBottomStyle: borderStyle,
    borderLeftWidth: props.$theme.sizing.scale0,
    borderRightWidth: props.$theme.sizing.scale0,
    borderTopWidth: props.$theme.sizing.scale0,
    borderBottomWidth: props.$theme.sizing.scale0,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    outline: 'none',
    paddingTop: props.$theme.sizing.scale900,
    paddingRight: props.$theme.sizing.scale800,
    paddingBottom: props.$afterFileDrop
      ? props.$theme.sizing.scale300
      : props.$theme.sizing.scale900,
    paddingLeft: props.$theme.sizing.scale800,
    width: '100%',
  }: {});
});

export const StyledContentMessage = styled<StylePropsT>(
  'div',
  props =>
    ({
      ...props.$theme.typography.font300,
      color: props.$afterFileDrop
        ? props.$theme.colors.fileUploaderMessageColor
        : null,
      marginBottom: props.$afterFileDrop ? props.$theme.sizing.scale600 : null,
    }: {}),
);

export const StyledContentSeparator = StyledContentMessage;

export const StyledErrorMessage = styled<StylePropsT>(
  'div',
  props =>
    ({
      ...props.$theme.typography.font300,
      color: props.$theme.colors.negative,
      marginBottom: props.$afterFileDrop ? props.$theme.sizing.scale600 : null,
    }: {}),
);

export const StyledRoot = styled<StylePropsT>('div', props => ({
  ...props.$theme.typography.font300,
  color: props.$theme.colors.fileUploaderMessageColor,
}));

export const StyledHiddenInput = styled('input', {});
