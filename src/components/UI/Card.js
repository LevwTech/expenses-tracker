import "./Card.css";
function Card(props) {
  const classes = `card ${props.className}`; // to insure other classes are included as well
  return <div className={classes}>{props.children}</div>; // to work as a wrapper
}
export default Card;
