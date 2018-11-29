import React, { Component } from 'react';

class PeopleArray extends Component {
    render() {
        let peopleItemArray = this.props.people.map((person, i) => <li key={i}>{person.name} <b>for:</b> {person.for} <b>role:</b> {person.role}</li>);
        return (
            <div>
                {peopleItemArray}
            </div>
        )
    }
}

export default PeopleArray;