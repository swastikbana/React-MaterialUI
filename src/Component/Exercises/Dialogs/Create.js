import React, { Fragment, Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';

export default class extends Component {
  state = {
    open: false,
    exercise: {
      title: '',
      description: '',
      muscles: ''
    }
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleChange = name => event => {
    this.setState({
      exercise: {
        ...this.state.exercise,
        [name]: event.target.value
      }
    });
  };

  render() {
    const {
      open,
      exercise: { title, description, muscles }
    } = this.state;
    return (
      <Fragment>
        <Fab aria-label="add" size="small" onClick={this.handleToggle}>
          <AddIcon />
        </Fab>
        <Dialog open={open} onClose={this.handleToggle}>
          <DialogTitle id="form-dialog-title">
            Create a new exercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>Please fillout the form below</DialogContentText>
            <form>
              <TextField
                label="Title"
                margin="normal"
                value={title}
                onChange={this.handleChange('title')}
              />
              <br />
              <TextField
                multiline
                rows="4"
                label="Description"
                margin="normal"
                value={description}
                onChange={this.handleChange('description')}
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}
