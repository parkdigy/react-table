import React, { ReactNode, useMemo } from 'react';
import classNames from 'classnames';
import { InfoTableProps as Props, InfoTableDefaultProps, InfoTableInfo } from './InfoTable.types';
import { Label, Value, ValueEllipsis } from './InfoTable.style';
import { Grid } from '@mui/material';
import { combineSx, typographyColorToSxColor } from '../@util';

interface WithType<T = InfoTableInfo> extends React.FC<Props<T>> {
  <T = InfoTableInfo>(props: Props<T>): ReturnType<React.FC<Props<T>>>;
}

const InfoTable: WithType = ({
  cols,
  spacing,
  className,
  style,
  sx,
  labelClassName,
  labelColor,
  labelStyle,
  labelSx,
  info,
  items,
}: Props) => {
  const xs = useMemo(() => 12 / cols, [cols]);

  return (
    <Grid container spacing={spacing} className={classNames('InfoTable', className)} style={style} sx={sx}>
      {items.map((item, idx) => {
        const finalLabelColor = typographyColorToSxColor(item.labelColor || labelColor);
        const finalLabelSx = combineSx(labelSx, item.labelSx, !!finalLabelColor && { color: finalLabelColor });

        let data: ReactNode = info[item.name];
        if (item.onRender) data = item.onRender(info);

        return (
          <Grid key={idx} item xs={item.xs || xs}>
            <Label
              className={classNames(labelClassName, item.labelClassName)}
              style={{ ...item.labelStyle, ...labelStyle }}
              sx={finalLabelSx}
            >
              {item.label}
            </Label>
            <Value className={item.valueClassName} style={item.valueStyle} sx={item.valueSx}>
              {item.ellipsis ? <ValueEllipsis>{data}</ValueEllipsis> : data}
            </Value>
          </Grid>
        );
      })}
    </Grid>
  );
};

InfoTable.displayName = 'InfoTable';
InfoTable.defaultProps = InfoTableDefaultProps;

export default InfoTable;
