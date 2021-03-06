import React from 'react';
import {render} from 'react-dom';

class ShopperForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = Shopper.DATA;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    // TODO: add form validation
    // event.preventDefault();
  }

  render() {
    // helper renderers
    // TODO: move from here
    const regionRows = [];
    Shopper.REGIONS.forEach((region, index) => {
        regionRows.push(
            <option key={index} value={region}>{region}</option>
        );
    });
    const statusRows = [];
    Shopper.STATUSES.forEach((state, index) => {
        statusRows.push(
            <option key={index} value={state}>{state}</option>
        );
    });

    const editStatusBlock = [];
    if (Shopper.DATA.workflow_state) {
        editStatusBlock.push(
            <div key={String(Math.random()).substr(2,3)} className="form-group">
                <label htmlFor="workflow_state">Workflow State</label>
                <select id="workflow_state" className="form-control"
                    name="workflow_state"
                    value={this.state.workflow_state} onChange={this.handleChange}
                    required>
                    {statusRows}
                </select>
            </div>

        );
    }

    return (
      <form action="/shopper" method="POST" noValidate className="needs-validation" onSubmit={this.handleSubmit}>
        <div className="form-group">
            <h2>Get paid to shop!</h2>
        </div>

        <div className="form-group">
            <label htmlFor="first_name">First Name</label>
            <input id="first_name"
                className="form-control" type="text"
                name="first_name" placeholder="e.g. Jamie"
                value={this.state.first_name}
                onChange={this.handleChange}
                pattern="[A-Za-z]{2,}"
                required />
            <div className="invalid-feedback">
               Please provide a valid first name.
            </div>

        </div>
        <div className="form-group">
            <label htmlFor="last_name">Last Name</label>
            <input id="last_name" className="form-control"
                type="text" name="last_name"
                placeholder="e.g. Adams"
                value={this.state.last_name}
                required
                pattern="[A-Za-z]{2,}"
                onChange={this.handleChange} />
            <div className="invalid-feedback">
               Please provide a valid last name.
            </div>

        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" className="form-control"
                type="email" name="email"
                value={this.state.email}
                placeholder="e.g. example@gmail.com"
                onChange={this.handleChange}
                required />
            <div className="invalid-feedback">
               Please provide a valid email address.
            </div>

        </div>
        <div className="form-group">
            <label htmlFor="phone">Cell Phone Number</label>
            <input id="phone" className="form-control"
                type="tel" name="phone"
                placeholder="e.g. 1-541-754-3010"
                value={this.state.phone}
                onChange={this.handleChange}
                pattern="[0-9\-\+]{7,}"
                required />
             <div className="invalid-feedback">
                Please provide a valid phone number.
             </div>
        </div>
        <div className="form-group">
            <label htmlFor="region">Region</label>
            <select id="region" className="form-control"
                value={this.state.region} onChange={this.handleChange}
                name="region" required>
                {regionRows}
            </select>
        </div>
        {editStatusBlock}
        <input type="submit" className="btn btn-primary btn-success btn--main-cta" value="Apply Now" />
      </form>
    );
  }c
}

render(<ShopperForm />, document.getElementById('form-container'));
