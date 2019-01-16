import React from 'react';
import Composer from '../shared/composer/composer';

class WriteArticle extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Composer />
            </div>
        );
    }
}

export default WriteArticle;
