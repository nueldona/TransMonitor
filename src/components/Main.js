import small_chart from '../assets/small chart.svg';
import big__graph from '../assets/big grapgh.svg';
import arrow_down from '../assets/arrow_down.svg';
import Search_icon   from '../assets/Search_icon.svg';
import range_icon from '../assets/range_icon.svg';
import blue_dropdown from '../assets/blue dropdown.svg';
import React, { Component, useMemo } from 'react'
import { useTable, useGlobalFilter } from 'react-table'
import items_data from '../Data/items.json'
import viwers_img from '../assets/vw symbol.jpg'

// TRANSACTION DETAILS FOR THE SMALL CHART
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


// TRANSACTION DETAILS
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


// SELECT FORM
class SelectForm extends React.Component {
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


// PAYMENTS TRANSACTION TABLE AND DATA using table instance
const PaymentTrans = () => {

  const COLUMNS = [
    {
      Header: 'Item Type',
      accessor: 'item_Name'
    },
    {
      Header: 'Price',
      accessor: 'price_tag'
    },
    {
      Header: 'Transaction No',
      accessor: 'Transaction_No'
    },
    {
      Header: 'Time',
      accessor: 'Time_tag'
    },
    {
      Header: 'Status',
      accessor: 'Status'
    }
  ]

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => items_data, [])

  const tableInstance = useTable({
    columns,
    data
  }, useGlobalFilter)

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    // state,
    // setGlobalFilter,
  } = tableInstance 

  // const { globalFilter } = state
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {
              headerGroup.headers.map( column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))
            } 
          </tr>
        ))} 
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>
                  <img src={ viwers_img } alt="contact"/>
                  {cell.render('Cell')}
                  </td>
              })}   
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

// GLOBAL FILTER
// const Filter = ({filter, setFilter}) => {
//   return (
//     <span>
//       <input className="search__input ml-2" placeholder="Search payments" value={ filter || ''} onChange={ e => setFilter(e.target.value)}/>
//     </span>
//   )
// }



// MAIN COMPONENTS
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
                {/* <Filter filter={globalFilter} setFilter={setGlobalFilter} /> */}
              </section>
              <section className="select">
                <SelectForm />
              </section>
            </section>
          </section>
          <section className="bottom__content">
            <PaymentTrans />
            {/* <Table /> */}
          </section>
        </article>

      </section>

    )
  };
};

export default Main