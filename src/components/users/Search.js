import React, { Component } from 'react'

export class Search extends Component {
  state = {
    text: ''
  }

  // static propTypes = {
  //   searchUsers : PropTypes.func.isRequired,
  //   clearUsers : PropTypes.func.isRequired,
  //   showClear : PropTypes.bool.isRequired
  // }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === ''){
      this.props.showAlert('Enter the name of the user', 'light');
    }
    else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' })
    }
  };

  render() {
    return (
      <div>
        {/* 'this' bound since we're not using arrow function */}
        <form onSubmit={this.onSubmit.bind(this)} className="form">
          <input type="text" className="text" value={this.state.text} onChange={this.onChange} name="text" placeholder="Search users ..." />
          <input type="submit" className="btn btn-dark btn-block" value="Search" />
        </form>

        {this.props.showClear && <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button>}

      </div>
    )
  }
}

export default Search
