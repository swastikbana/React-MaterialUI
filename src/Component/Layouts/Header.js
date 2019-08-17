import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import CreateDialogue from '../Exercises/Dialogs/Create';

export default ({ muscles, onExerciseCreate }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h5" color="inherit" style={{ flex: 1 }}>
        Exercicse Database
      </Typography>

      <CreateDialogue muscles={muscles} onCreate={onExerciseCreate} />
    </Toolbar>
  </AppBar>
);
