import React from 'react';
import PropTypes from 'prop-types';


const ContestPreview =(contest) =>{
    return(
        <div className="ContestPreview">
            <div className="category-name">
                {contest.categoryName}
            </div>
            <div className="contest-name">
                {contest.contestName}
            </div>
        </div>
    );
};


ContestPreview.propTypes = {
    message: PropTypes.string
};


ContestPreview.defaultProps = {
    message: "Hello"
}


export default ContestPreview;