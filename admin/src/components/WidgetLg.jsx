import React from 'react';
import "./style/WidgetLg.css";

const WidgetLg = () => {


  return (
    <div className='wLg'>
      <span className="widgetLgTitle">Latest Transactions</span>

      <table className="widgetLgTable">
        <thead className="widgetLgTrHeading">
          <tr>
            <td>Customers</td>
            <td>Date</td>
            <td>Amount</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td className='widgetLgUser'>
            <img src="https://cdn.pixabay.com/photo/2018/03/12/12/32/woman-3219507_960_720.jpg" alt="avater" />
            <span>Anan k</span>
          </td>
          <td className='widgetLgDate'>2 Jun 2022</td>
          <td className='widgetLgAmount'>$624.5</td>
          <td className='widgetLgStatus'><Button type="approved"/></td>
        </tr>
        <tr>
          <td className='widgetLgUser'>
            <img src="https://cdn.pixabay.com/photo/2018/03/12/12/32/woman-3219507_960_720.jpg" alt="avater" />
            <span>Anan k</span>
          </td>
          <td className='widgetLgDate'>2 Jun 2022</td>
          <td className='widgetLgAmount'>$624.5</td>
          <td className='widgetLgStatus'><Button type="declined"/></td>
        </tr>
        <tr>
          <td className='widgetLgUser'>
            <img src="https://cdn.pixabay.com/photo/2018/03/12/12/32/woman-3219507_960_720.jpg" alt="avater" />
            <span>Anan k</span>
          </td>
          <td className='widgetLgDate'>2 Jun 2022</td>
          <td className='widgetLgAmount'>$624.5</td>
          <td className='widgetLgStatus'><Button type="pending"/></td>
        </tr>
        <tr>
          <td className='widgetLgUser'>
            <img src="https://cdn.pixabay.com/photo/2018/03/12/12/32/woman-3219507_960_720.jpg" alt="avater" />
            <span>Anan k</span>
          </td>
          <td className='widgetLgDate'>2 Jun 2022</td>
          <td className='widgetLgAmount'>$624.5</td>
          <td className='widgetLgStatus'><Button type="approved"/></td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default WidgetLg;



const Button = ({type}) => {
  return (
    <button className={"widgetLgStatusButton " + type}>{type}</button>
  )
}
