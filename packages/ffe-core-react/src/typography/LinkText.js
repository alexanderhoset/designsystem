import React from 'react';
import { bool, func, node, oneOfType, string } from 'prop-types';
import classNames from 'classnames';

const LinkText = (props) => {
    const {
        className,
        element: Element,
        underline,
        ...rest
    } = props;

    return (
        <Element
            className={classNames(
                'ffe-link-text',
                { 'ffe-link-text--no-underline': !underline },
                className,
            )}
            {...rest}
        />
    );
};

LinkText.defaultProps = {
    element: 'a',
    underline: true,
};

LinkText.propTypes = {
    children: node.isRequired,
    className: string,
    /** The rendered element, like a `react-router` `<Link />` */
    element: oneOfType([func, string]),
    underline: bool,
};

export default LinkText
