import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

export default ({ muscles, onSelect, category }) => {
  const index = category
    ? muscles.findIndex(group => group === category) + 1
    : 0;
  const onIndexSelect = (e, index) =>
    onSelect(index === 0 ? '' : muscles[index - 1]);

  return (
    <Paper>
      <Tabs
        indicatorColor="primary"
        value={index}
        textColor="primary"
        centered
        onChange={onIndexSelect}
      >
        <Tab label="All" />
        {muscles.map(muscle => (
          <Tab key={muscle} label={muscle} />
        ))}
      </Tabs>
    </Paper>
  );
};
