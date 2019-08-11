import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

export default ({ muscles }) => (
  <Paper>
    <Tabs indicatorColor="primary" value={0} textColor="primary" centered>
      <Tab label="All" />
      {muscles.map(muscle => (
        <Tab label={muscle} />
      ))}
    </Tabs>
  </Paper>
);
