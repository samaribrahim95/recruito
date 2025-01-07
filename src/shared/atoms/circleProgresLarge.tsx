type Props = {
  percentage: number;
};

const CircularProgressBarLarge = (props: Props) => {
  return (
    <div className="w-28">
      <svg viewBox="0 0 36 36">
        <path
          fill="none"
          stroke="rgb(var(--color-light-gray))"
          strokeWidth={4.2}
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          fill="none"
          stroke="rgb(var(--color-java))"
          strokeDasharray={`${props.percentage}, 100`}
          strokeWidth={4.2}
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="20.35" textAnchor="middle" className="text-[9px] font-medium">
          {props.percentage}%
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBarLarge;
