export default function InputBox({ value, onChange }) {
  return (
    <textarea
      placeholder="type something..."
      value={value}
      onChange={onChange}
    ></textarea>
  );
}
