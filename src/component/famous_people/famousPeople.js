import React, { Component } from 'react';

class FamousPeople extends Component {
    state = {
        person: {
            name: 'Flavius Valerius Aurelius Constantinus Augustus',
            role: 'Roman Emperor',
            for: ' Romans conversion to Christianity'
        }
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
    render() {
        return (
            <div>
                <div>
                    <input type='text' id='nameIn' className='form-control' aria-label='Small' aria-describedby='inputGroup-sizing-sm' placeholder='Name' onChange={this.handleChangeFor('name')}/>
                    <input type='text' id='roleIn' className='form-control' aria-label='Small' aria-describedby='inputGroup-sizing-sm' placeholder='Role' onChange={this.handleChangeFor('role')}/>
                    <input type='text' id='forIn' className='form-control' aria-label='Small' aria-describedby='inputGroup-sizing-sm' placeholder='Famous For' onChange={this.handleChangeFor('for')}/>
                    <button type='button' class='btn btn-outline-primary' >Submit</button>
                </div>
                <div id='insertOut'>
                    <p>{this.state.person.name} is famous for {this.state.person.for} as the {this.state.person.role}</p>
                </div>
            </div>
        );
    }
}

export default FamousPeople;