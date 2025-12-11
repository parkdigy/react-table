import { styled, TableRow, lighten } from '@mui/material';

export const StyledBodyRow = styled(TableRow)(({ theme }) => ({
  '&.odd-color:nth-of-type(odd):not(:hover)': {
    backgroundColor: lighten(theme.palette.action.hover, 0.4),
  },
  '&.even-color:nth-of-type(even):not(:hover)': {
    backgroundColor: lighten(theme.palette.action.hover, 0.4),
  },
}));

export const StyledNoDataDiv = styled('div')`
  text-align: center;
  padding: 30px 0;
  font-weight: 500;
  font-size: 13px;
  color: #94a0b2;
  opacity: 0.8;

  .material-icons {
    font-size: 40px;
    margin-bottom: 5px;
  }
`;
