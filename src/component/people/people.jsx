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
            },
            {
                name: 'Felicia Day',
                role: 'Codex',
                for: 'The Guild'
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
        if (this.state.person.name === '' || this.state.person.for === '' || this.state.person.role === ''){ // validation
            return alert('all the form not fill');
        }
        console.log(this.state);
        let NewFamousPerson = this.state.person; // grab what is on the input
        this.setState( // add person to array
            {
                people: [
                    ...this.state.people,
                    NewFamousPerson
                ]
            }
        )
        this.setState( // clear input
            {
                person: {
                    name: '',
                    role: '',
                    for: ''
                },
            }
        )
    }
    render() {
        return (
            <div>
                <FamousPeople people={this.state.people} person={this.state.person} handleChangeFor={this.handleChangeFor} handleClick={this.handleClick} />
                <PeopleArray people={this.state.people} />
            </div>
        );
    }
}

export default People