export default function Search() {
  const handleChange = (event) => {
    console.log("value", event.target.value);
  };
  return (
    <div>
      <input type="text" placeholder="search" onChange={handleChange} />
    </div>
  );
}
