function ProgressBar({ label, percentage, color }) {
  const safePercentage = Math.min(100, Math.max(0, Number(percentage) || 0));

  return (
    <div className="progress-bar">
      <div className="progress-bar__labels"><span>{label}</span><strong>{safePercentage}%</strong></div>
      <div className="progress-bar__track" role="progressbar" aria-label={label} aria-valuemin="0" aria-valuemax="100" aria-valuenow={safePercentage}>
        <div className="progress-bar__fill" style={{ width: safePercentage + '%', backgroundColor: color }} />
      </div>
    </div>
  );
}

export default ProgressBar;
