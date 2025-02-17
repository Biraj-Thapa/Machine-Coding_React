const Interests = ({ data, setData,errors}) => {
    const { interests = [] } = data || {}; 
  
    const handleDataChange = (e) => {
      const { name, checked } = e.target;
  
      setData((prevState) => ({
        ...prevState,
        interests: checked
          ? [...prevState.interests, name] // Add interest if checked
          : prevState.interests.filter((i) => i !== name), // Remove if unchecked
      }));
    };
  
    return (
      <div>
        <div>
          <label>
            <input
              type="checkbox"
              name="coding"
              checked={interests.includes("coding")}
              onChange={handleDataChange}
            />
            Coding
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="music"
              checked={interests.includes("music")}
              onChange={handleDataChange}
            />
            Music
          </label>
        </div>
        {errors.interests && <span>{errors.interests}</span>}
      </div>
    );
  };
  
  export default Interests;
  