import React from 'react'

class SearchBar extends React.Component {
  state = {term: ''}


  onFormSubmit = event => {
    event.preventDefault()
    this.props.onSubmit(this.state.term)
  }

  render () {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label> Image Search </label>
            {/*leaving the () off of onInputChange will make this a callback function to an event handler*/}
            <input type="text"
                   value={this.state.term}
              // onChange={e => this.setState({term: e.target.value.toUpperCase()})}/> controlled input
                   onChange={e => this.setState({term: e.target.value})}/>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar