import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class ListItem extends Component {
  
  _getLocalWeather(event) {
    const { fetchWeather } = this.props;
    event.preventDefault();
    //TODO: need to get users info **DONE
    // passit to function to download local weather and update state. ** DONE
    fetchWeather(this.title.value);
  }
  
  _getLocalWeatherInfo () {
    const { weather } = this.props
    if(!weather) return null;
  }

 _getFormItem = () => {
  const { weather } = this.props
  if (!weather) {
    return (
      <form
       className="form-container"
       onSubmit={(e) => this._getLocalWeather(e)}
       ref={(input) => this.addItemForm = input}
      >      
        <input type='text'
          placeholder='Your f*ck*ng city'
          className='form-text__input'
          onSubmit={(e) => this._getLocalWeather(e)}
          ref={(input) => this.title = input}
        />
        <span className='form-text__title'>Tell us where the f*ck you are.</span>
      </form>
     )
  }

  return (
    <form
      className="form-container"
      onSubmit={(e) => this._getLocalWeather(e)}
      ref={(input) => this.addItemForm = input}
    >
      <input type='text'
        placeholder='Where the f*ck are you?'
        className='form-text__input'
        onSubmit={(e) => this._getLocalWeather(e)}
        ref={(input) => this.title = input}
      />
    </form> 
  )
}

  render () {
    return (
     <div >
       {this._getFormItem()}
     </div>
    )
  }
}
