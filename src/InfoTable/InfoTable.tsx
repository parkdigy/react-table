import React from 'react';
import { InfoTableProps as Props, InfoTableDefaultProps, InfoTableInfo } from './InfoTable.types';
import {
  StyledEllipsisValue,
  StyledItemLabel,
  StyledItemLabelWrap,
  StyledItemValue,
  StyledItemValueWrap,
} from './InfoTable.style';
import { Grid } from '@mui/material';

interface WithType<T = InfoTableInfo> extends React.FC<Props<T>> {
  <T = InfoTableInfo>(props: Props<T>): ReturnType<React.FC<Props<T>>>;
}

const InfoTable: WithType = ({ labelXs, valueXs, info, items }: Props) => {
  return (
    <Grid container spacing={1}>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <StyledItemLabelWrap item xs={labelXs}>
            <StyledItemLabel>{item.label}</StyledItemLabel>
          </StyledItemLabelWrap>
          <StyledItemValueWrap item xs={valueXs}>
            <StyledItemValue>
              {item.ellipsis ? <StyledEllipsisValue>{info[item.name]}</StyledEllipsisValue> : info[item.name]}
            </StyledItemValue>
          </StyledItemValueWrap>
        </React.Fragment>
      ))}
    </Grid>
  );
};

InfoTable.displayName = 'InfoTable';
InfoTable.defaultProps = InfoTableDefaultProps;

export default InfoTable;
