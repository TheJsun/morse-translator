import classes from "./OutputBox.module.scss";

export default function OutputBox({ value }) {
  return (
    <div className={classes.outboxContainer}>
      <textarea value={value} readOnly></textarea>
      <button
        type="button"
        className={classes.copyButton}
        onClick={() => navigator.clipboard.writeText(value)}
        disabled={!value}
      >
        Copy
      </button>
    </div>
  );
}
