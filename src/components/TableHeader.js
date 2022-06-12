import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsArrowDownUp } from "react-icons/bs";
import "./tableHeader.css";

const TableHeader = () => {
  return (
    <div className="table__container">
      <div className="table__row1">
        <div className="table__personinfo">
          <p>
            Person: <strong>Helene Fischer(w)</strong>
          </p>
          <p>
            SV-Nr: <strong>4258 201289</strong>
          </p>
        </div>
        <div className="table__search">
          <div>
            <AiOutlineSearch
              color="white"
              className="table__search_icon"
              fontSize="1.2em"
            />
          </div>
          <div>
            <input
              className="table__search_input"
              placeholder="Eintrag suchen"
            />
          </div>
        </div>
      </div>
      <div className="table__row2">
        <div className="table__row2_left">
          <p>Eintrage</p>
          <BsArrowDownUp color="white" />
        </div>
        <div className="table__row2_middle">
          <p>Handlungsvorschlag</p>
        </div>
        <div className="table__row2_right">
          <p>Empfohlener Impfzeitraum</p>
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
