import React, { useRef, useState } from "react";
import "./card.css";
import { BsChevronDown } from "react-icons/bs";
import { MdOutlinePendingActions } from "react-icons/md";
import { FiAlertTriangle } from "react-icons/fi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";

const Card = (props) => {
  const [active, setActive] = useState("");
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState("card__btn");
  const content = useRef(null);

  function toggleCard() {
    setActive(active === "" ? "active" : "");
    setHeight(active === "" ? "0px" : `${content.current.scrollHeight}px`);
    setRotate(active === "" ? "card__btn" : "card__btn rotate");
  }

  return (
    <div className="card__section">
      <div className="card">
        {props.icon === "alert" && <FiAlertTriangle size="2rem" color="grey" />}
        {props.icon === "pending" && (
          <MdOutlinePendingActions size="2rem" color="grey" />
        )}
        {props.icon === "check" && (
          <AiOutlineCheckCircle size="2rem" color="grey" />
        )}
        {props.icon === "questionmark" && (
          <HiOutlineQuestionMarkCircle size="2rem" color="grey" />
        )}

        <div>
          <p className="card__title">{props.title}</p>
          <AiOutlineInfoCircle
            color="grey"
            size={"1rem"}
            className="card__info_icon"
          />
        </div>
        <div>
          <p className="card_name">{props.description}</p>
        </div>
        <div>
          <p className="card__date">{props.date}</p>
        </div>

        <button className={`card__btn ${active}`} onClick={toggleCard}>
          <BsChevronDown className={`${rotate}`} color="gray" />
        </button>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="card__content"
      >
        <div className="class__content_heading">
          <p>
            <strong>{props.content.heading.title}:</strong>{" "}
            {props.content.heading.data}
          </p>
        </div>
        <div className="card__content_table">
          <p>
            <strong>{props.content.table.head1}:</strong>{" "}
            {props.content.table.value1}
          </p>
          <p>
            <strong>{props.content.table.head2}:</strong>{" "}
            {props.content.table.value2}
          </p>
          <p>
            <strong>{props.content.table.head3}:</strong>{" "}
            {props.content.table.value3}
          </p>
          <p>
            <strong>{props.content.table.head4}:</strong>{" "}
            {props.content.table.value4}
          </p>
          <p>
            <strong>{props.content.table.head5}:</strong>{" "}
            {props.content.table.value5}
          </p>
          <p>
            <strong>{props.content.table.head6}:</strong>{" "}
            {props.content.table.value6}
          </p>
          <p>
            <strong>{props.content.table.head7}:</strong>{" "}
            {props.content.table.value7}
          </p>
          <p>
            <strong>{props.content.table.head8}:</strong>{" "}
            {props.content.table.value8}
          </p>
          <p>
            <strong>{props.content.table.head9}:</strong>{" "}
            {props.content.table.value9}
          </p>
        </div>
        <div className="content__bottom">
          <h6>{props.content.bottom.heading}</h6>
          <div>
            <p>{props.content.bottom.row1} </p>
            <BsChevronDown color="gray" />
          </div>
          <div>
            <p>{props.content.bottom.row2}</p>
            <BsChevronDown color="gray" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
