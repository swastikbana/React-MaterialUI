import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
import { muscles, exercises } from '../store';

export default class extends Component {
  state = {
    exercises,
    exercise: {}
  };

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, {})
    );
  }

  handleCategorySelection = category => {
    this.setState({
      category
    });
  };

  handleExerciseSelection = id => {
    this.setState(prevState => ({
      exercise: prevState.exercises.find(ex => ex.id === id)
    }));
  };

  render() {
    const exercises = this.getExercisesByMuscles(),
      { category, exercise } = this.state;
    return (
      <Fragment>
        <Header />
        <Exercises
          exercises={exercises}
          category={category}
          exercise={exercise}
          onSelect={this.handleExerciseSelection}
        />
        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelection}
        />
      </Fragment>
    );
  }
}
