import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function BasicButtonGroup(props) {
  const { path, buttonLabel } = props;
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button href={path}>{buttonLabel}</Button>
    </ButtonGroup>
  );
}
