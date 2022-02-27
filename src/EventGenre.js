import React, {useEffect, useState} from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

function EventGenre({ events }){
  const [ data, setData ] = useState([]);
  
  useEffect(()=>{
    setData(()=> getData(events));
  },[events]);
  
  function getData(events){
        const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
        const data = genres.map((genre)=>{
            const value = events.filter((e)=> e.summary.split(' ').includes(genre)).length 
              return { name: genre, value };
        });
        const cleanData = data.filter((data)=> data.value > 0);
        return cleanData;
    }
    // const COLORS = ['#17DBFF', '#1C74E6', '#2B32F9', '#6C1CEB', '#D31FFF'];
    const COLORS = ['#2626F0', '#5832F0', '#7939DA', '#A432F0', '#C82BF0'];
    return(
      <ResponsiveContainer height={300}>
          <PieChart width={200} height={200}>
              <Pie
                data={ data }
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent })=>`${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
              {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
              </Pie>
          </PieChart>
      </ResponsiveContainer>

    );
}

export default EventGenre;