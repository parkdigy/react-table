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
  valueClassName,
  valueStyle,
  valueSx,
  valueUnderline,
  info,
  items,
}: Props) => {
  const sizeProps = useMemo(() => {
    const value: { xs?: number; sm?: number; md?: number; lg?: number; xl?: number } = {};
    if (typeof cols === 'number') {
      value.xs = 12 / cols;
    } else {
      if (cols.xs) value.xs = 12 / cols.xs;
      if (cols.sm) value.sm = 12 / cols.sm;
      if (cols.md) value.md = 12 / cols.md;
      if (cols.lg) value.lg = 12 / cols.lg;
      if (cols.xl) value.xl = 12 / cols.xl;
    }
    return value;
  }, [cols]);

  return (
    <Grid container spacing={spacing} className={classNames('InfoTable', className)} style={style} sx={sx}>
      {items.map((item, idx) => {
        if (item) {
          const finalLabelColor = typographyColorToSxColor(item.labelColor || labelColor);
          const finalLabelSx = combineSx(labelSx, item.labelSx, !!finalLabelColor && { color: finalLabelColor });
          const finalValueSx = combineSx(valueSx, item.valueSx);
          const valueUnderlineStyle = valueUnderline
            ? { borderBottom: '1px solid #efefef', paddingBottom: 5 }
            : undefined;

          let data: ReactNode = item.name !== undefined ? info[item.name] : undefined;
          if (item.onRender) data = item.onRender(info);

          return (
            <Grid key={idx} item {...sizeProps} className={item.className} style={item.style} sx={item.sx}>
              <Label
                className={classNames(labelClassName, item.labelClassName)}
                style={{ ...item.labelStyle, ...labelStyle }}
                sx={finalLabelSx}
              >
                {item.label}
              </Label>
              <Value
                className={classNames(valueClassName, item.valueClassName)}
                style={{ ...valueStyle, ...item.valueStyle, ...valueUnderlineStyle }}
                sx={finalValueSx}
              >
                {item.ellipsis ? <ValueEllipsis>{data}</ValueEllipsis> : data}
              </Value>
            </Grid>
          );
        }
      })}
    </Grid>
  );
};

InfoTable.displayName = 'InfoTable';
InfoTable.defaultProps = InfoTableDefaultProps;

export default InfoTable;
