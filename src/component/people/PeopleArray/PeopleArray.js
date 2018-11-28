import React, { Component } from 'react';

class PeopleArray extends Component {
    render(){
        let peopleItemArray = this.props.people.map((person, i) => <li key={i}>{person.name} is famous for {person.for} as the {person.role}</li>);
        return(
            <div>
                {peopleItemArray}
            </div>
        )
    }
}

export default PeopleArray;