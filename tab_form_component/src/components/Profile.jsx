const Profile = ({ data, setData , errors }) => {
  const { name, age, email } = data;

  const handleDataChange = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };

  return (
    <div>
      <div>
        <label>Name :</label>
        <input
          placeholder="Enter Name here"
          name="Name"
          type="text"
          value={name}
          onChange={(e) => handleDataChange(e, "name")}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Age :</label>
        <input
          placeholder="Enter Age here"
          name="age"
          type="number"
          value={age}
          onChange={(e) => handleDataChange(e, "age")}
        />
        {errors.age && <span>{errors.age}</span>}
      </div>
      <div>
        <label>Email :</label>
        <input
          placeholder="Enter Email here"
          name="age"
          type="email"
          value={email}
          onChange={(e) => handleDataChange(e, "email")}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
    </div>
  );
};
export default Profile;
