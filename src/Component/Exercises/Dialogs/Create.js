import React, { Fragment, Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/styles';
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Select,
  InputLabel,
  MenuItem
} from '@material-ui/core';

const styles = theme => ({
  FormControl: {
    width: 500
  }
});

export default withStyles(styles)(
  class extends Component {
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

    handleSubmit = () => {
      //TODO validate
      const { exercise } = this.state;
      this.props.onCreate({
        ...exercise,
        id: exercise.title.toLocaleLowerCase.replace(/ /g, '-') //Replace spaces with '-'
      });
      this.setState({
        open: false,
        exercise: {
          title: '',
          description: '',
          muscles: ''
        }
      });
    };

    render() {
      const {
          open,
          exercise: { title, description, muscles }
        } = this.state,
        { classes, muscles: categories } = this.props;
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
              <DialogContentText>
                Please fillout the form below
              </DialogContentText>
              <form>
                <TextField
                  label="Title"
                  margin="normal"
                  value={title}
                  onChange={this.handleChange('title')}
                  className={classes.FormControl}
                />
                <br />
                <FormControl className={classes.FormControl}>
                  <InputLabel htmlFor="muscles">Muscles</InputLabel>
                  <Select
                    value={muscles}
                    onChange={this.handleChange('muscles')}
                  >
                    {categories.map(category => (
                      <MenuItem key={category} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <br />
                <TextField
                  multiline
                  rows="4"
                  label="Description"
                  margin="normal"
                  value={description}
                  onChange={this.handleChange('description')}
                  className={classes.FormControl}
                />
              </form>
            </DialogContent>
            <DialogActions>
              <Button
                variant="outlined"
                color="primary"
                onClick={this.handleSubmit}
              >
                Create
              </Button>
            </DialogActions>
          </Dialog>
        </Fragment>
      );
    }
  }
);
