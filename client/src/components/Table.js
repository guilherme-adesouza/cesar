import './Table.css'
import React from 'react';

export default function Table({data}) {
    if(!data || data.length === 0) return null;
    return (
        <table className="Table">
          <thead>
            <tr>
              {Object.getOwnPropertyNames(data[0]).map((property, idx) => {
                return (
                  <th key={idx}>{property}</th>
                )}
              )}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
                <tr key={idx}>
                  {Object.values(row).map((value, idx) => (
                      <td key={idx}>{value}</td>
                    )
                  )}
                </tr>
              )
            )}
          </tbody>
        </table>
    )
}
