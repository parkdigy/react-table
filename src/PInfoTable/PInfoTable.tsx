import React, { ReactNode, useMemo } from 'react';
import classNames from 'classnames';
import { PInfoTableProps as Props, PInfoTableInfo, PInfoTableItem } from './PInfoTable.types';
import {
  ClipboardIconButton,
  Label,
  Line,
  Value,
  ValueClipboard,
  ValueEllipsis,
  ValueWrap,
} from './PInfoTable.style.private';
import { Grid, Stack } from '@mui/material';
import { combineSx, typographyColorToSxColor } from '../@util.private';
import dayjs from 'dayjs';
import { empty, notEmpty } from '@pdg/compare';
import { formatBusinessNo, formatNumber, formatPersonalNo, formatTelNo } from '@pdg/formatting';
import { PCopyToClipboard, PIcon } from '@pdg/react-component';

interface WithType<T = PInfoTableInfo> extends React.FC<Props<T>> {
  <T = PInfoTableInfo>(props: Props<T>): ReturnType<React.FC<Props<T>>>;
}

const PInfoTable: WithType = ({
  cols,
  spacing = 2,
  columnSpacing,
  rowSpacing = 3,
  className,
  style,
  sx,
  labelClassName,
  labelColor = 'primary',
  labelStyle,
  labelSx,
  dividerColor = 'gray',
  valueClassName,
  valueStyle,
  valueSx,
  ellipsis,
  valueUnderline,
  info,
  items,
  onCopyToClipboard,
}: Props) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const renderItems: {
    item: PInfoTableItem;
    data: ReactNode | string | number | undefined;
    copyToClipboardText: string;
    sizeProps: { xs?: number; sm?: number; md?: number; lg?: number; xl?: number };
  }[] = useMemo(
    () =>
      (items.filter((item) => !!item && (!item.onHide || !item.onHide(info))) as PInfoTableItem[]).map((item) => {
        /** data */
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
                data = formatNumber(data);

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
                data = formatTelNo(data);
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
            case 'business_no':
              if (typeof data === 'string') {
                data = formatBusinessNo(data);
              }
              break;
            case 'personal_no':
              if (typeof data === 'string') {
                data = formatPersonalNo(data);
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

        /** copyToClipboardText */
        const copyToClipboardText =
          item.clipboardText || (typeof data === 'string' ? data : typeof data === 'number' ? data.toString() : '');

        /** sizeProps */
        const sizeProps: { xs?: number; sm?: number; md?: number; lg?: number; xl?: number } = {};
        if (typeof cols === 'number') {
          sizeProps.xs = 12 / cols;
        } else {
          if (cols.xs) sizeProps.xs = 12 / cols.xs;
          if (cols.sm) sizeProps.sm = 12 / cols.sm;
          if (cols.md) sizeProps.md = 12 / cols.md;
          if (cols.lg) sizeProps.lg = 12 / cols.lg;
          if (cols.xl) sizeProps.xl = 12 / cols.xl;
        }

        if (item.xs) sizeProps.xs = item.xs;
        if (item.sm) sizeProps.sm = item.sm;
        if (item.md) sizeProps.md = item.md;
        if (item.lg) sizeProps.lg = item.lg;
        if (item.xl) sizeProps.xl = item.xl;

        if (item.onXs) sizeProps.xs = item.onXs(info);
        if (item.onSm) sizeProps.sm = item.onSm(info);
        if (item.onMd) sizeProps.md = item.onMd(info);
        if (item.onLg) sizeProps.lg = item.onLg(info);
        if (item.onXl) sizeProps.xl = item.onXl(info);

        return { item, data, copyToClipboardText, sizeProps };
      }),
    [info, items, cols]
  );

  const content = useMemo(
    () =>
      renderItems.map(({ item, data, copyToClipboardText, sizeProps }, idx) => {
        const finalLabelColor = typographyColorToSxColor(
          item.type === 'divider' ? item.dividerColor || dividerColor : item.labelColor || labelColor
        );
        const finalLabelSx = combineSx(labelSx, item.labelSx, !!finalLabelColor && { color: finalLabelColor });
        const finalValueSx = combineSx(valueSx, item.valueSx);
        const valueUnderlineStyle = valueUnderline
          ? { borderBottom: '1px solid #efefef', paddingBottom: 5 }
          : undefined;

        return item.type === 'divider' ? (
          <Grid key={idx} size={{ xs: 12 }}>
            <Stack direction='row' spacing={0.5} alignItems='center'>
              {item.icon && (
                <PIcon sx={{ color: item.dividerColor || dividerColor }} size='small'>
                  {item.icon}
                </PIcon>
              )}
              {item.label && (
                <Label
                  className={classNames(labelClassName, item.labelClassName)}
                  style={{ ...item.labelStyle, ...labelStyle }}
                  sx={finalLabelSx}
                >
                  {item.label}
                </Label>
              )}
              {item.dividerLine && (
                <>
                  {item.icon || item.label ? (
                    <div style={{ flex: 1, paddingLeft: 5 }}>
                      <Line />
                    </div>
                  ) : (
                    <Line />
                  )}
                </>
              )}
            </Stack>
          </Grid>
        ) : (
          <Grid key={idx} size={sizeProps} className={item.className} style={item.style} sx={item.sx}>
            <Stack direction='row' spacing={0.5} alignItems='center'>
              {item.icon && (
                <PIcon sx={{ color: finalLabelColor }} size='small'>
                  CalendarMonth
                </PIcon>
              )}
              <Label
                className={classNames(labelClassName, item.labelClassName)}
                style={{ ...item.labelStyle, ...labelStyle }}
                sx={finalLabelSx}
              >
                {item.label}
              </Label>
            </Stack>
            <ValueWrap
              className={classNames(valueClassName, item.valueClassName)}
              style={{ ...valueStyle, ...item.valueStyle, ...valueUnderlineStyle }}
              sx={finalValueSx}
            >
              {item.ellipsis || ellipsis ? <ValueEllipsis>{data}</ValueEllipsis> : <Value>{data}</Value>}
              {item.clipboard && notEmpty(copyToClipboardText) && (
                <ValueClipboard>
                  <PCopyToClipboard
                    text={copyToClipboardText}
                    onCopy={onCopyToClipboard ? () => onCopyToClipboard(item, copyToClipboardText) : undefined}
                  >
                    <ClipboardIconButton size='small' color='primary' {...item.clipboardProps}>
                      <PIcon>{item.clipboardIcon || 'ContentPaste'}</PIcon>
                    </ClipboardIconButton>
                  </PCopyToClipboard>
                </ValueClipboard>
              )}
            </ValueWrap>
          </Grid>
        );
      }),
    [
      dividerColor,
      ellipsis,
      labelClassName,
      labelColor,
      labelStyle,
      labelSx,
      onCopyToClipboard,
      renderItems,
      valueClassName,
      valueStyle,
      valueSx,
      valueUnderline,
    ]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Grid
      container
      spacing={spacing}
      columnSpacing={columnSpacing}
      rowSpacing={rowSpacing}
      className={classNames('PInfoTable', className)}
      style={style}
      sx={sx}
    >
      {content}
    </Grid>
  );
};

export default PInfoTable;
