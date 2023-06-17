function ResultDiv({ result }) {
  return (
    <div>
      <input
        style={{ width: 200, height: 30 }}
        type="text"
        value={result}
        readOnly
      />
    </div>
  );
}

export default ResultDiv;
