import React from 'react';
import QuestionsAnswers from './QA/QuestionsAnswers.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <QuestionsAnswers />
    );
  }
}

export default App;