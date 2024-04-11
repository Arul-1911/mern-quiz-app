import React, {useEffect, useState} from 'react';
import { getServerData } from '../helper/helper';
import { backend_url } from '../URL';

function ResultTable() {

   const [data,setData] = useState([])

   useEffect(() => {
      getServerData(`${backend_url}/api/result`, (res) => {
         setData(res)
      })
   },[data])

  return (
    <div>
      <table>
        <thead className="table-header">
          <tr className="table-row">
            <td>Name</td>
            <td>Attempts</td>
            <td>Earned points</td>
            <td>Result</td>
          </tr>
        </thead>
        <tbody>
          {!data ?? <div>No data found..</div>}
          {data.map((v, i) => (
            <tr className="table-body" key={i}>
              <td>{v?.username || ""}</td>
              <td>{v?.attempts || 0}</td>
              <td>{v?.points || 0}</td>
              <td>{v?.achieved || ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResultTable