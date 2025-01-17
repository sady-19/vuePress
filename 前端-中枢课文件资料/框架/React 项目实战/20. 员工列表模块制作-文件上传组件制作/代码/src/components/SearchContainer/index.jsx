import React, { useState } from 'react';
import classNames from 'classnames';
import iconMap from '../IconMap';
import './index.less';

const SearchContainer = ({ render }) => {
  const [closeStatus, setCloseStatus] = useState(false);

  //- 清空表单
  const clearForm = () => {
    //todo
    console.log('clearForm');
  };

  return (
    <div className={classNames('filter-wrapper', { close: closeStatus })}>
      <div className="filter-title-wrapper">
        <span>字段过滤</span>
        <span className="c-r" onClick={clearForm}>
          {iconMap.reload}
        </span>
      </div>
      <div
        className={classNames('filter-form-wrapper', { opacity: closeStatus })}
      >
        {render()}
      </div>
      <div className="close-tip" onClick={() => setCloseStatus(!closeStatus)}>
        {closeStatus ? iconMap.right : iconMap.left}
      </div>
    </div>
  );
};

export default SearchContainer;
