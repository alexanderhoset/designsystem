import React, { Component, PropTypes } from 'react';
import Suggestion from './suggestion-item';

export default class SuggestionList extends Component {

  render() {
    const {
      suggestions,
      onSelect,
      highlightedIndex,
      renderSuggestion,
      renderNoMatches,
      refHighlightedSuggestion
    } = this.props;
    return (
      <ul
        className='container-suggestion-list'
        role='listbox'
      >
        { suggestions.length > 0 ?
          suggestions.map((item, index) => {
            return <Suggestion
              key={index}
              item={item}
              isHighlighted={index === highlightedIndex}
              refHighlightedSuggestion={refHighlightedSuggestion}
              render={renderSuggestion}
              onSelect={onSelect}
            />
          }) :
          <li>{renderNoMatches()}</li>
        }
      </ul>
    );
  }
}

SuggestionList.propTypes = {
  suggestions: PropTypes.arrayOf(React.PropTypes.object).isRequired,
  highlightedIndex: PropTypes.number.isRequired,
  renderNoMatches: PropTypes.func,
};

SuggestionList.defaultProps = {
  renderNoMatches: ()=> {}
};
