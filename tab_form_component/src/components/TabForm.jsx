import { useState } from "react";
import "../App.css";
import Profile from "./Profile";
import Interests from "./Interests";
import Setting from "./Setting";

const TabForm = () => {
  const [data, setData] = useState({
    name: "Biraj",
    age: 23,
    email: "biraj123@gmail.com",
    interests: ["coding", "chess", "music"],
    theme: "dark",
  });

  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Name is not valid";
        }
        if (!data.age || data.age < 18) {
          err.age = "Age is not valid";
        }
        if (!data.email || data.email.length < 2) {
          err.age = "Email is not valid";
        }

        setErrors(err)
        return err.name || err.age || err.email ? false : true 
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate:()=>{
        const err={}
        if(data.interests.length<1){
          err.interests="select at least one interest"
        }
        setErrors(err)
        return err.interests ?false:true

      }
    },
    {
      name: "Setting",
      component: Setting,

    },
  ];
  const ActiveTabComponents = tabs[activeTab].component;
  const handleNextClick = () => {
    if(tabs[activeTab].validate()){
    setActiveTab((prev) => prev + 1);
    }
  };

  const handlePrevClick = () => {
    if(tabs[activeTab].validate()){
    setActiveTab((prev) => prev - 1);
  };
}

  const handleSubmitClick = () => {};
  return (
    <div>
      <div className="Heading_Container">
        {tabs.map((item, index) => (
          <div
            key={index}
            className="Heading"
            onClick={() => setActiveTab(index)}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="tab_body">
        <ActiveTabComponents data={data} setData={setData} errors={errors} />
      </div>
      <div>
        {activeTab > 0 && <button onClick={handlePrevClick}> Prev</button>}
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNextClick}>Next</button>
        )}

        {activeTab === tabs.length - 1 && <button>Submit</button>}
      </div>
    </div>
  );
};

export default TabForm;
