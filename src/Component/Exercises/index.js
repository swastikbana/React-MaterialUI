import React, { Fragment } from 'react';
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: 'auto'
  }
};

export default ({
  exercises,
  category,
  onSelect,
  exercise: {
    id,
    title = 'Welcome',
    description = 'Please select an exercise from the list on the left.'
  }
}) => (
  <Grid container>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {exercises.map(([group, exercises]) =>
          !category || category === group ? (
            <Fragment>
              <Typography variant="h6" style={{ textTransform: 'capitalize' }}>
                {group}
              </Typography>
              <List component="ul">
                {exercises.map(exercise => (
                  <ListItem button onClick={() => onSelect(exercise.id)}>
                    <ListItemText primary={exercise.title} />
                  </ListItem>
                ))}
              </List>
            </Fragment>
          ) : null
        )}
      </Paper>
    </Grid>

    <Grid item sm>
      <Paper style={styles.Paper}>
        <Typography variant="h6" style={{ marginBottom: 20 }}>
          {title}
        </Typography>
        <Typography variant="caption">{description}</Typography>
      </Paper>
    </Grid>
  </Grid>
);
