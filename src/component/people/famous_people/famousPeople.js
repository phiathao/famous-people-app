import React, { Component } from 'react';

class FamousPeople extends Component {
    render() {
        return (
            <div>
                <div>
                    <input type='text' id='nameIn' className='form-control' aria-label='Small' aria-describedby='inputGroup-sizing-sm' placeholder='Name' onChange={this.props.handleChangeFor('name')}/>
                    <input type='text' id='roleIn' className='form-control' aria-label='Small' aria-describedby='inputGroup-sizing-sm' placeholder='Role' onChange={this.props.handleChangeFor('role')}/>
                    <input type='text' id='forIn' className='form-control' aria-label='Small' aria-describedby='inputGroup-sizing-sm' placeholder='Famous For' onChange={this.props.handleChangeFor('for')}/>
                    <button type='button' id='submitBtn' class='btn btn-outline-primary' onClick={this.props.handleClick}>Submit</button>
                </div>
            </div>
        );
    }
}

export default FamousPeople;