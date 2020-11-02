import small_chart from '../assets/small chart.svg';
import big__graph from '../assets/big grapgh.svg';
import arrow_down from '../assets/arrow_down.svg';
import Search_icon   from '../assets/Search_icon.svg';
import range_icon from '../assets/range_icon.svg';
import blue_dropdown from '../assets/blue dropdown.svg';
import React, { Component } from 'react'

function SmallGraph() {
  const datas = [
    {
      id: 1,
      title: 'Daily Transaction Volume',
      digit: '2,342',
    },
    {
      id: 2,
      title: 'Daily Transaction Volume',
      digit: '₦4,000,000',
    },
    {
      id: 3,
      title: 'Total Transaction Volume',
      digit: '452,000',
    },
    {
      id: 4,
      title: 'Total Transaction Value',
      digit: '₦4,000,000',
    },
  ]
  const dataList = datas.map( (data) => (
    <section className="small__graph-card">
      <div>
        <small key={ data.id }>
          { data.title }
        </small>
        <p key={ data.id }>
          { data.digit }
        </p>
      </div>
      
      <img src={small_chart} alt="small chart"/>
    </section>
  ))
  return <section className="small__graph">{ dataList }</section>
};

function LedgerDetails() {
  const ledgers = [
    {
      id: 1,
      title: 'Orders',
      PO: 'Pending Orders: ',
      RO: 'Reconcilled Orders: ',
      TO: 'Total Orders: '
    },
    {
      id: 2,
      title: 'Payments',
      PO: 'Un-reconcilled Payments: ',
      RO: 'Reconcilled Payments: ',
      TO: 'Total Payments: '
    },
    
  ]
  const ledgerList = ledgers.map( (ledger) => (
    <section className="card">
      <ul>
        <li className="card-title"><b>{ledger.title}</b></li>
        <img src={range_icon} alt="small chart"/>
        <li>
          {ledger.PO}
          <small>20</small>
        </li>
        <li>
          {ledger.RO}
          <small>80</small>
        </li>
        <li>
          {ledger.TO}
          <small>100</small>
        </li>
      </ul>
    </section>
  ))
  return <section className="ledger">{ ledgerList }</section>
}

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'All'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Show
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="All" className="option">All</option>
            <option value="Reconcilled">Reconcilled</option>
            <option value="Un-reconcilled">Un-reconcilled</option>
            <option value="Settled">Settled</option>
            <option value="Unsettled">Unsettled</option>
          </select>
        </label>
      </form>
    );
  }
}

class Main extends Component {
  render() {
    return ( 
      <section className="main-content">

        <section className="first-section">
          <SmallGraph />
        </section>

        <section className="second-section d-flex">

          <section className="big__graph col-lg-8 ">

            <section className="big__graph-topContent d-flex">
              <h3><b>Today: 5, Aug 2018</b></h3>

              <div className="d-flex big__graph-topContent-btn">

                <button className="btn btn-select">
                 1 Jan - 1 Jun
                 <img src={ arrow_down} alt="arrow down" />
                </button>

                <div>
                  <button className="btn btn-arrow"><img src={ arrow_down} alt="arrow down" className="arrow_left"/></button>

                  <button className="btn btn-arrow"><img src={ arrow_down} alt="arrow down" className="arrow_right"/></button>
                </div>
              </div>
            </section>

            <section className="big__graph-bottomContent">
              <div className="d-flex">
                <p><b>Jan</b></p>
                <p><b>Feb</b></p>
                <p><b>Mar</b></p>
                <p><b>Apr</b></p>
                <p><b>May</b></p>
                <p><b>Jun</b></p>
              </div>

              <img src={ big__graph } alt="big chart" className="big-chart"/>
            </section>
          </section>

          <section className="big__graph-details col-lg-4">
            <LedgerDetails />
          </section>
        </section>

        <article>
          <section className="top__content">
            <h2>Payments</h2>
            <section className="top__content-options d-flex">
              <p className="mr-3">Showing</p>
              <div className="mr-2 ml-2 dropdown__one">
                20
                <img src={ blue_dropdown } alt="" className="ml-2"/>
              </div>
              <p className="mr-5">out of 500 payments</p>
              <section className="search">
                <img src={ Search_icon } className="Search-logo" alt="Search"/>
                <input className="search__input ml-2" placeholder="Search payments"/>
              </section>
              <section>
                <FlavorForm />
              </section>
            </section>
          </section>
          <section className="bottom__content">

          </section>
        </article>

      </section>

    )
  };
};

export default Main