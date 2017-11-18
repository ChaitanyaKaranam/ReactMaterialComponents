import React, { Component } from 'react';
import Avatar from './avatar-list';
import ChipFilters from './chips-filters';
import Pagination from './pagination';
import AutoSearch from './auto-search';

export default class App extends Component {
  render() {
    return (
      <div>
          <br/>
          <AutoSearch/>
      </div>
    );
  }
}
