import React, { Component } from 'react';

class FamousPeople extends Component {
    render() {
        let insertThisIfFill;
        if (this.props.person.name !== '' && this.props.person.for !== '' && this.props.person.role !== ''){
            insertThisIfFill = (
                <div>
                    <p>{this.props.person.name} is famous for {this.props.person.for} as {this.props.person.role}</p>
                </div>
            )
        }
        return (
            <div>
                <div>
                    <input type='text' value={this.props.person.name} className='form-control' aria-label='Small' aria-describedby='inputGroup-sizing-sm' placeholder='Name' onChange={this.props.handleChangeFor('name')}/>
                    <input type='text' value={this.props.person.role} className='form-control' aria-label='Small' aria-describedby='inputGroup-sizing-sm' placeholder='Role' onChange={this.props.handleChangeFor('role')}/>
                    <input type='text' value={this.props.person.for} className='form-control' aria-label='Small' aria-describedby='inputGroup-sizing-sm' placeholder='Famous For' onChange={this.props.handleChangeFor('for')}/>
                    <button type='button' id='submitBtn' class='btn btn-outline-primary' onClick={this.props.handleClick}>Submit</button>
                </div>
                {insertThisIfFill}
            </div>
        );
    }
}

export default FamousPeople;