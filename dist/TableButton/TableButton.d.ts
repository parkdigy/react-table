import React from 'react';
import { TableButtonProps as Props } from './TableButton.types';
declare const TableButton: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export default TableButton;
