import { styled, TableRow } from '@mui/material';

export const TableTopHeadCaptionRow = styled(TableRow)(({ theme }) => ({
  '> th': {
    backgroundColor: theme.palette.grey.A100,
    textAlign: 'center',
    fontWeight: 700,
  },
}));
