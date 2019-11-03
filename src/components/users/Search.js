import React, {useState} from 'react'

const Search = ({ searchUsers, showAlert, showClear, clearUsers }) => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value)
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      showAlert('Enter the name of the user', 'light');
    }
    else {
      searchUsers(text);
      setText('')
    }
  };

  return (
    <div>
      {/* 'this' bound since we're not using arrow function */}
      <form onSubmit={onSubmit} className="form">
        <input type="text" className="text" value={text} onChange={onChange} name="text" placeholder="Search users ..." />
        <input type="submit" className="btn btn-dark btn-block" value="Search" />
      </form>

      {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}

    </div>
  )
}

export default Search
