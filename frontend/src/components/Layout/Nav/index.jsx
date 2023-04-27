import { Link,  NavLink,  useNavigate } from "react-router-dom";
import SearchBar from "../../SearchBar";

export const Nav = () => {
  let navigate = useNavigate();
  
  return (
    <div className="flex flex-col items-center justify-center py-4 border-b border-gray-300 mx-3 gap-6">
      
      <div className="w-1/3">
        <SearchBar />
      </div>
      <div className="flex items-center justify-evenly w-full">
        <Link to="/">Go to main</Link>
      </div>
    </div>
  );
};
