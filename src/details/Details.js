import React, { useEffect, useState } from "react";
import mockData from "../Data.json";

const Details = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
    
        setData(mockData[0].data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Details Page</h1>
      {data ? (
        <div>
          {data.map((item, index) => {
            const profile = item.parseData?.data?.profile?.basics || {};
            return (
              <div key={index}>
                <h2>{item.first_name} {item.last_name}</h2>
                <p>Skills: {profile.skills ? profile.skills.join(", ") : "N/A"}</p>
                <p>Experience: {profile.total_experience_in_years || "N/A"} years</p>
              </div>
            );
          })}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Details;
