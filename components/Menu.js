import React from 'react';
import { Table } from 'reactstrap';

const Menu = (props) => {
  return (
      <div className = 'container'>
            <Table responsive  >
            <tbody>

                <tr className="menuSegment text-white">
                    <th><h4>Plates</h4></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>Small </th>
                    <td>2 choices of hummus, 2 choices of veggies, 2 pitas  </td>
                    <td className="prices">$ 6.99</td>
                    
                </tr>
                <tr>
                    <th>Medium</th>
                    <td>3 choices of hummus, 4 choices of veggies, 3 pitas  </td>
                    <td className="prices">$ 8.99</td>
                    
                </tr>
                <tr>
                    <th>Large</th>
                    <td>5 choices of hummus, 5 choices of veggies, 5 pitas  </td>
                    <td className="prices">$11.99</td>    
                </tr>

                {/* By Weight */}
                <tr className="menuSegment text-white">
                    <th><h4>By Weight</h4></th>
                    <th></th>
                    <th></th>
                </tr> 

                {/* Juices */}
                <tr>
                    <th >Juices</th>
                    <td>32 oz jar of fesh juice</td>
                    <td className="prices">$12.99</td>
                </tr>       
                <tr className="menuSegment text-white">
                    <th ><h4>Juices</h4></th>
                    <th></th>
                    <th></th>
                    
                </tr>
                <tr>
                    <th>Medium</th>
                    <td></td>
                    <td className="prices">$4.99</td>
                </tr>
                <tr>
                    <th>Large</th>
                    <td></td>
                    <td className="prices">$6.99</td>
                </tr>
                <tr>
                    <th>Virgin Bloody Mary</th>
                    <td></td>
                    <td className="prices">$7.99</td>
                </tr>

            </tbody>

            </Table>
    </div>
  );
}

export default Menu;