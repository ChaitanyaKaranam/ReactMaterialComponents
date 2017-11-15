import React, { Component } from 'react';
import Avatar from './avatar-list';
import ChipFilters from './chips-filters';
import Pagination from './pagination';

export default class App extends Component {
  render() {
    return (
      <div>
          <Pagination/>
      </div>
    );
  }
}
