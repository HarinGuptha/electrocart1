import React from 'react';

function Delete(props) {

    function deletedata(index) {
      let copydata = [...props.task];
      copydata.splice(index, 1);
      props.settask(copydata);
    }

    return (
      <div className="d-flex justify-content-center align-items-center mt-3">
        <div className="table-responsive" style={{ width: '50%' }}>
          <h3 className="text-center mb-3">User List</h3>
          <table className="table table-striped table-hover table-bordered text-center">
            <thead className="thead-dark">
              <tr>
                <th style={{ width: '33%' }}>UserName</th>
                <th style={{ width: '33%' }}>Age</th>
                <th style={{ width: '33%' }}>Delete</th>
              </tr>
            </thead>
            <tbody>
              {props.task.map((userOb, index) => (
                <tr key={index}>
                  <td>{userOb.addask}</td>
                  <td>{userOb.addas}</td>
                  <td>
                    <button 
                      className="btn btn-danger btn-sm" 
                      onClick={() => deletedata(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default Delete;


