import { Grid, styled } from '@mui/material';

export const StyledItemLabelWrap = styled(Grid)`
  display: flex;
  flex-direction: column;
`;

export const StyledItemLabel = styled('div')`
  flex: 1;
  background-color: #dfdfdf;
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  font-weight: 500;
`;

export const StyledItemValueWrap = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledItemValue = styled('div')`
  flex: 1;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
`;

export const StyledEllipsisValue = styled('div')`
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
