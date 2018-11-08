import React from "react";

class DepartmentRow extends React.Component {
  render() {
    const { data, selectHandler } = this.props;
    return (
      <tr>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>
          <input
            name="dept"
            type="radio"
            onClick={() => {
              selectHandler(data.id);
            }}
          />
        </td>
      </tr>
    );
  }
}

export default DepartmentRow;
