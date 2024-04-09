import React from 'react'

function ResultTable() {
  return (
    <div>
      <table>
         <thead className='table-header'>
            <tr className='table-row'>
               <td>Name</td>
               <td>Attempts</td>
               <td>Earned points</td>
               <td>Result</td>
            </tr>
         </thead>
         <tbody>
            <tr className='table-body'>
               <td>Daily tution</td>
               <td>03</td>
               <td>20</td>
               <td>Pass</td>
            </tr>
         </tbody>
      </table>
    </div>
  )
}

export default ResultTable