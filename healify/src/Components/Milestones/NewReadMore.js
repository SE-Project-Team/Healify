import React ,{useState} from "react";
export const NewReadMore = ({ children }) => {
  const text = children;
  const [isNewReadMore, setIsNewReadMore] = useState(true);
  const toggleNewReadMore = () => {
    setIsNewReadMore(!isNewReadMore);
  };
  return (
    <p className="text">
      {isNewReadMore ? text.slice(0, 87) : text}
      . . .
     {/*<span onClick={toggleNewReadMore} className="read-or-hide">
        {isNewReadMore ? "...read more" : " show less"}
  </span>*/}
    </p>
  );
};
export default  NewReadMore;