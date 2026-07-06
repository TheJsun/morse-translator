export default function InputBox({ value, onChange }) {
  return (
    <div>
      <textarea
        placeholder="type text or morse code..."
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
}
