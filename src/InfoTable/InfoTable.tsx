import React, { ReactNode, useMemo } from 'react';
import classNames from 'classnames';
import { InfoTableProps as Props, InfoTableDefaultProps, InfoTableInfo } from './InfoTable.types';
import { ClipboardIconButton, Label, Value, ValueClipboard, ValueEllipsis, ValueWrap } from './InfoTable.style';
import { Grid } from '@mui/material';
import {
  combineSx,
  companyNoAutoDash,
  empty,
  getTelAutoDash,
  notEmpty,
  numberWithThousandSeparator,
  personalNoAutoDash,
  typographyColorToSxColor,
} from '../@util';
import TableIcon from '../TableIcon';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import dayjs from 'dayjs';

interface WithType<T = InfoTableInfo> extends React.FC<Props<T>> {
  <T = InfoTableInfo>(props: Props<T>): ReturnType<React.FC<Props<T>>>;
}

const InfoTable: WithType = ({
  cols,
  spacing,
  columnSpacing,
  rowSpacing,
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
  ellipsis,
  valueUnderline,
  info,
  items,
  onCopyToClipboard,
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
    <Grid
      container
      spacing={spacing}
      columnSpacing={columnSpacing}
      rowSpacing={rowSpacing}
      className={classNames('InfoTable', className)}
      style={style}
      sx={sx}
    >
      {items.map((item, idx) => {
        if (item) {
          const finalLabelColor = typographyColorToSxColor(item.labelColor || labelColor);
          const finalLabelSx = combineSx(labelSx, item.labelSx, !!finalLabelColor && { color: finalLabelColor });
          const finalValueSx = combineSx(valueSx, item.valueSx);
          const valueUnderlineStyle = valueUnderline
            ? { borderBottom: '1px solid #efefef', paddingBottom: 5 }
            : undefined;

          const finalSizeProps = { ...sizeProps };
          if (item.xs) finalSizeProps.xs = item.xs;
          if (item.sm) finalSizeProps.sm = item.sm;
          if (item.md) finalSizeProps.md = item.md;
          if (item.lg) finalSizeProps.lg = item.lg;
          if (item.xl) finalSizeProps.xl = item.xl;

          let data: ReactNode | string | number | undefined = undefined;
          if (item.name !== undefined) {
            if (info[item.name] !== undefined) {
              if (info[item.name] instanceof Date) {
                data = dayjs(info[item.name]).format('YYYY-MM-DD HH:mm:ss');
              } else if (info[item.name] instanceof dayjs) {
                data = info[item.name].format('YYYY-MM-DD HH:mm:ss');
              } else {
                data = info[item.name];
              }
            }
          }

          if (item.onRender) {
            data = item.onRender(info);
          } else if (notEmpty(data)) {
            switch (item.type) {
              case 'number':
                if (typeof data === 'string' || typeof data === 'number') {
                  data = numberWithThousandSeparator(data);

                  if (item.numberPrefix) {
                    data = (
                      <>
                        <span style={{ opacity: 0.5, marginRight: 2 }}>{item.numberPrefix}</span>
                        {data}
                      </>
                    );
                  }
                  if (item.numberSuffix) {
                    data = (
                      <>
                        {data}
                        <span style={{ opacity: 0.5, marginLeft: 2 }}>{item.numberSuffix}</span>
                      </>
                    );
                  }
                }
                break;
              case 'tel':
                if (typeof data === 'string') {
                  data = getTelAutoDash(data);
                }
                break;
              case 'email':
                if (typeof data === 'string') {
                  data = (
                    <>
                      <a href={`mailto:${data}`}>{data}</a>
                    </>
                  );
                }
                break;
              case 'url':
                if (typeof data === 'string' && data.toLowerCase().startsWith('http')) {
                  data = (
                    <>
                      <a href={data} target='_blank'>
                        {data}
                      </a>
                    </>
                  );
                }
                break;
              case 'company_no':
                if (typeof data === 'string') {
                  data = companyNoAutoDash(data);
                }
                break;
              case 'personal_no':
                if (typeof data === 'string') {
                  data = personalNoAutoDash(data);
                }
                break;
              case 'date':
                if (typeof data === 'string' || typeof data === 'number') {
                  data = dayjs(data, item.dateFormat).format('YYYY-MM-DD');
                }
                break;
              case 'datetime':
                if (typeof data === 'string' || typeof data === 'number') {
                  const dt = dayjs(data, item.dateFormat);
                  data = (
                    <>
                      <span>{dt.format('YYYY-MM-DD')}</span>
                      {item.dateTwoLine ? <br /> : ' '}
                      <span style={{ opacity: 0.5 }}>{dt.format('HH:mm:ss')}</span>
                    </>
                  );
                }
                break;
              case 'date-hour':
                if (typeof data === 'string' || typeof data === 'number') {
                  const dt = dayjs(data, item.dateFormat);
                  data = (
                    <>
                      <span>{dt.format('YYYY-MM-DD')}</span>
                      {item.dateTwoLine ? <br /> : ' '}
                      <span style={{ opacity: 0.5 }}>{dt.format('HH시')}</span>
                    </>
                  );
                }
                break;
              case 'date-minute':
                if (typeof data === 'string' || typeof data === 'number') {
                  const dt = dayjs(data, item.dateFormat);
                  data = (
                    <>
                      <span>{dt.format('YYYY-MM-DD')}</span>
                      {item.dateTwoLine ? <br /> : ' '}
                      <span style={{ opacity: 0.5 }}>{dt.format('HH시 MM분')}</span>
                    </>
                  );
                }
                break;
            }
          }
          if (empty(data)) data = item.onRenderEmpty ? item.onRenderEmpty(info) : <>&nbsp;</>;

          const copyToClipboardText =
            item.clipboardText || (typeof data === 'string' ? data : typeof data === 'number' ? data.toString() : '');

          return (
            <Grid key={idx} item {...finalSizeProps} className={item.className} style={item.style} sx={item.sx}>
              <Label
                className={classNames(labelClassName, item.labelClassName)}
                style={{ ...item.labelStyle, ...labelStyle }}
                sx={finalLabelSx}
              >
                {item.label}
              </Label>
              <ValueWrap
                className={classNames(valueClassName, item.valueClassName)}
                style={{ ...valueStyle, ...item.valueStyle, ...valueUnderlineStyle }}
                sx={finalValueSx}
              >
                {item.ellipsis || ellipsis ? <ValueEllipsis>{data}</ValueEllipsis> : <Value>{data}</Value>}
                {item.clipboard && notEmpty(copyToClipboardText) && (
                  <ValueClipboard>
                    <CopyToClipboard
                      text={copyToClipboardText}
                      onCopy={onCopyToClipboard ? () => onCopyToClipboard(item, copyToClipboardText) : undefined}
                    >
                      <ClipboardIconButton size='small' color='primary' {...item.clipboardProps}>
                        <TableIcon>{item.clipboardIcon || 'ContentPaste'}</TableIcon>
                      </ClipboardIconButton>
                    </CopyToClipboard>
                  </ValueClipboard>
                )}
              </ValueWrap>
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
