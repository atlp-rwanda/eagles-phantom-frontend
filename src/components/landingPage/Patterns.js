import React,{ Component }  from 'react';
import Pattern from './PatternsCard';
import '../../scss/homeContent.scss';

export default class Patterns extends Component {
    render(){
    return(
        <div className="patterns_with">
        <h3 className="patterns_title">Our Parteners</h3>
        <div className="patterns_card">
        <Pattern
            description="RFTC"
        />
        <Pattern
            description="Royal"
        />
        <Pattern
            description="AC Group ltd"
        />
        </div>
        </div>
    )
    }
}