import styles from "./LinkButton.module.css";

function LinkButton({ href, children, ...delegated }) {
	//if href provided, create <a> html-tag, <button> if not
  const Tag = typeof href === "string" ? "a" : "button";

  return (
    <Tag href={href} className={styles.button} {...delegated}>
      {children}
    </Tag>
  );
}

export default LinkButton;
