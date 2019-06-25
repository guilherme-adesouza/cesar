import './Table.css'
import React from 'react';
import PropTypes from 'prop-types';
import Utils from '../utils/Utils';

class Table extends React.Component {

  static propTypes = {
    data: PropTypes.array,
    header: PropTypes.array
  };

  static defaultProps = {
    data: []
  }

  render () {
    const {data, object} = this.props;

    if(!data || data.length === 0) {
      return <EmptyTable object={object} />;
    }

    const header = this.props.header || Object.getOwnPropertyNames(data[0]);

    return (
        <table className="Table">
          <thead className="ThemeBackground">
            <tr>
              {header.map((header, idx) => {
                return (
                  <th key={idx}>{header}</th>
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
}

export default Table;

const EmptyTable = (props) => {
  const isFeminineWord = Utils.isFeminineWord(props.object);
  return (
    <p>Não existe nenhum{isFeminineWord ? 'a' : ''} <span className="EmptyObject">{props.object}</span> criad{isFeminineWord ? 'a' : 'o'}</p>
  )
}
