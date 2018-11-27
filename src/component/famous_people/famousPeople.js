import React, { Component } from 'react';

class FamousPeople extends Component {
    state = {
        person: {
            name: 'Flavius Valerius Aurelius Constantinus Augustus',
            role: 'Roman Emperor',
            for: ' the first Roman emperor to claim conversion to Christianity'
        }
    }
    render(){
        return (
            <div>
                <div>
                  <input type='text' className='form-control' aria-label='Small' aria-describedby='inputGroup-sizing-sm' placeholder='Name' />
                  <input type='text' className='form-control' aria-label='Small' aria-describedby='inputGroup-sizing-sm' placeholder='Role' />
                  <input type='text' className='form-control' aria-label='Small' aria-describedby='inputGroup-sizing-sm' placeholder='Famous For' />
                  <button type="button" class="btn btn-outline-primary">Submit</button>
                </div>
                <div id='insertOut'>
                    <p>{this.state.person.name} is famous for{this.state.person.for} as the {this.state.person.role}</p>
                </div>
            </div>
        );
    }
}

export default FamousPeople;