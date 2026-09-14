function Badge({ text, type = 'info' }) {
  const supportedTypes = ['success', 'warning', 'error', 'info'];
  const badgeType = supportedTypes.includes(type) ? type : 'info';
  return <span className={'badge badge--' + badgeType}>{text}</span>;
}

export default Badge;
