const MetricCard = ({ title, value, change }) => {
    return (
      <div className="metric-card">
        <h3>{title}</h3>
        <h2>{value}</h2>
        <p>{change}</p>
      </div>
    );
  };
  
  export default MetricCard;
  