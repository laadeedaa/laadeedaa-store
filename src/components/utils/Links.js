import { Link } from "react-router-dom";

const Link1 = ({ className, to, text }) => {
  return (
    <Link className={className} to={to}>
      {text}
    </Link>
  );
};

export { Link1 };
