import { Box, styled } from '@mui/material';

export const Label = styled(Box)`
  font-size: 12px;
  font-weight: bold;
`;

export const Value = styled(Box)`
  margin-top: 3px;
`;

export const ValueEllipsis = styled('div')`
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
