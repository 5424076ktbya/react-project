export default function App() {
  const width = 400;
  const height = 400;
  const rect = [
    {x: 100, y: 100, w: 250, h: 30, color: 'orange', label: 'A'},
    {x: 100, y: 200, w: 200, h: 30, color: 'purple', label: 'B'},
    {x: 100, y: 300, w: 100, h: 30, color: 'pink', label: 'C'},
    {x: 100, y: 350, w: 50, h: 30, color: 'blue', label: 'D'}
  ];

  return (
    <svg width={width} height={height}>
        <line x1="100" y1="0" x2="100" y2="400" stroke="black" />

        {rect.map(({x,y,w, h, color,label}, i) => (
          <g key={i}>
            <text x={x-15} y={y+5} textAnchor="end" >
              {label}
            </text>

            <line x1="90" y1={y} x2="100" y2={y} stroke="black" />

            <rect
                x={x}
                y={y-h/2}
                width={w}
                height={h}
                fill={color}
            />
          </g>
        ))}
    </svg>
  );
};