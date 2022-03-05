import React, {useEffect, useState} from 'react';
import { PieChart, Pie, Legend, Cell, Tooltip, ResponsiveContainer } from 'recharts';

function EventGenre({ events }){
  const [ data, setData ] = useState([]);
  const [ screenWidth, setScreenWidth ] = useState(0);

  useEffect(()=>{
    reportWindowSize();
    setData(()=> getData(events));
  },[events]);
  
  function getData(events){
        const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
        const data = genres.map((genre)=>{
            const value = events.filter((e)=> e.summary.includes(genre)).length 
              return { name: genre, value };
        });
        const cleanData = data.filter((data)=> data.value > 0);
        return cleanData;
    }
 
    const COLORS = ['#F589F3', '#DB86F7', '#A771DE', '#A78DF7', '#8A8AED'];

  function reportWindowSize() {
    let widthOutput = window.innerWidth;
    setScreenWidth(widthOutput);
  }

  window.onresize = reportWindowSize;

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="custom-tooltip" style={{background: payload[0].payload.fill}}>
          <p className="label" >{payload[0].payload.name}</p>
          <p className="label" style={{fontSize: 12}}>Events: {payload[0].payload.value}</p>
        </div>
      );
    }
  
    return null;
  };

    return(
      <ResponsiveContainer height={300}>
          <PieChart width={200} height={200}>
              <Pie
                data={ data }
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(screenWidth < 400) ? false : ({ name, percent })=>`${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                ticks={false}
              >
              {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
              </Pie>
              <Legend verticalAlign="top" height={36}/>
              <Tooltip content={<CustomTooltip />}/>
          </PieChart>
      </ResponsiveContainer>

    );
}

export default EventGenre;