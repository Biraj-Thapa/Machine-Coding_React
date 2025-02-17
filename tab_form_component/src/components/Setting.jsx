const Setting = ({ data, setData }) => {
  const { theme } = data;

  const handleDataChange = (e) => {
    setData((prevSate) => ({ ...prevSate, theme: e.target.name }));
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            name="dark"
            checked={theme === "dark"}
            onChange={handleDataChange}
          />
          dark
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="Light"
            checked={theme === "Light"}
            onChange={handleDataChange}
          />
          Light
        </label>
      </div>
    </div>
  );
};
export default Setting;
