import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name: "기본 이름",
        children: "기본 요소"
    };

    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    }
  
    render() {
        const { name, children, favoriteNumber } = this.props;

        return (
            <div>
                안녕하세요 제 이름은 {name}입니다.<br />
                children 값은 {children} 입니다. <br />
                제일좋아하는 숫자는 {favoriteNumber}입니다.
            </div>
        );
    }
}


export default MyComponent;