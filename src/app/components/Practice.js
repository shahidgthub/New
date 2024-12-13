import React from "react";

const Practice = () => {
  const user = [
    {
      name: "Anil",
      email: "Azgmail.com",
      adress: [
        { hou:2, city: "Swat", country: "Pakistan" },
      ],
    },
    {
        name:"Azam",
        email:"Azgmail.com",
        adress: [
          { hou:2, city: "swabi", country: "Pakistan" },
        ],
      },
      {
        name: "sanaullah",
        email: "Azgmail.com",
        adress: [
          { hou:24, city: "Isl", country: "Pakistan" },
        ],
      },
  ];

  return (
    <div>
      <table className="w-full  border-2 text-left border-collapse">
        <thead>
          <tr className=" border-2 border-red-300">
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item) => (
            <tr className="border-2 border-black">
              <td className="">{item.name}</td>
              <td>{item.email}</td>
              <td>
                {item.adress.map((addr) => (
                  <div key={addr}>
                    House:{addr.hou}, City: {addr.city}, Country: {addr.country}
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Practice;
