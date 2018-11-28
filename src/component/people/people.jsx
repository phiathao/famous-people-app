import React, { Component } from 'react';
import FamousPeople from './famous_people/famousPeople';
import PeopleArray from './PeopleArray/PeopleArray';

class People extends Component {
    state = {
        person: {
            name: '',
            role: '',
            for: ''
        },
        people: [
            {
                name: 'Flavius Valerius Aurelius Constantinus Augustus',
                role: 'Roman Emperor',
                for: ' Romans conversion to Christianity'
            }
        ]
    }
    handleChangeFor = (propertyName) => {
        return (event) => {
            this.setState(
                {
                    person: {
                        ...this.state.person,
                        [propertyName]: event.target.value
                    }
                }
            )
        }
    }
    handleClick = (event) => {
        console.log(this.state);
        let NewFamousPerson = this.state.person;
        this.setState(
            {
                people: [
                    ...this.state.people,
                    NewFamousPerson
                ]
            }
        )
    }
    render() {
        return (
            <div>
                <FamousPeople person={this.state.person} handleChangeFor={this.handleChangeFor} handleClick={this.handleClick} />
                <PeopleArray people={this.state.people}/>
            </div>
        );
    }
}

export default People