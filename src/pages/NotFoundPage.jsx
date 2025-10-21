import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        className="w-[80vh]"
        src="https://cdn.sanity.io/images/599r6htc/regionalized/dd4fc49d62e53911409d96f8b1cf11731279b813-2800x2800.png?w=540&q=75&fit=max&auto=format&dpr=1.5"
      />

      <Link className="btn text-4xl p-10 animate-bounce" to={-1}>
        <FaArrowLeft />
        Go Back
      </Link>
    </div>
  );
};

export default NotFoundPage;
