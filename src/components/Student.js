import React from 'react'

export default function Student(props) {
  return (
    <div>
          <h1>Student Information : </h1>
          {
            props.students.map((std)=>(
                //std = {id :101 , name: 'Peter', age:23},

                  <li key={std.id}>
                      {std.id},{std.name},{std.age}
                  </li>
            ))
          }
    </div>
  )
}
