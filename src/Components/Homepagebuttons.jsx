import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';

export default function BasicButtonGroup(props) {
  const { path, buttonLabel } = props;
  const navigate = useNavigate()

  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button onClick={() => navigate(path)}>{buttonLabel}</Button>
    </ButtonGroup>
  );
}
