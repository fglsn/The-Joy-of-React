// List
import React from "react";
import styles from "./List.module.css";

const VALID_TAGS = ["ul", "ol"];

// rendering <List as="ol">

function List({
  // ol | ul
  as: Tag = "ul", //rename, set default
  className = "",
  children,
  ...delegated
}) {
  if (!VALID_TAGS.includes(Tag)) {
    throw new Error(`Unrecognized tag: ${Tag}. Expected: ${VALID_TAGS}`);
  }

  return (
    <Tag {...delegated} className={`${styles.wrapper} ${className}`}>
      {children}
    </Tag>
  );
}

export default List;
