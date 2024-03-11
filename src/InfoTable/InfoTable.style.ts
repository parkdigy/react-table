import { Box, IconButton, styled } from '@mui/material';

export const Label = styled(Box)`
  font-size: 12px;
  font-weight: bold;
`;

export const ValueWrap = styled(Box)`
  margin-top: 3px;
  position: relative;
  display: flex;
  flex-direction: row;
`;

export const Value = styled('div')`
  flex: 1;
`;

export const ValueEllipsis = styled('div')`
  flex: 1;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ValueClipboard = styled('div')``;

export const ClipboardIconButton = styled(IconButton)`
  margin-top: -10px;
  margin-bottom: -10px;
`;

export const Line = styled('div')`
  border-top: 1px solid #efefef;
  height: 1px;
  flex: 1;
`;
