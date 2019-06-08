import React, { useState, useContext } from 'react'

import GithubContext from '../../context/github/github.context'
import AlertContext from '../../context/alert/alert.context'

const Search = () => {
  const githubContext = useContext(GithubContext)
  const alertContext = useContext(AlertContext)

  const { searchUsers, clearUsers, users } = githubContext

  const [search, setSearch] = useState('')

  const onChange = event => setSearch(event.target.value)

  const onSubmit = event => {
    event.preventDefault();

    if(search === '') {
      alertContext.setAlert('Please enter something', 'light');
    } else {
      searchUsers(search)
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input type="text" name="search" placeholder="Search Users..." value={search} onChange={onChange} />
        <button type="submit" className="btn btn-dark btn-block">Search</button>
      </form>
      { users.length > 0 && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
    </div>
  )
}

export default Search
