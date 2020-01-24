import React from 'react';

const ViewBtn = (props) => {
  return (
    <a className="btn btn-warning"
      href={props.result.volumeInfo.previewLink}
      target="_blank"
      rel="noopener noreferrer"
    >View</a>
  );
}

export default ViewBtn;
