import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// this is a component for handling lost routing
export default function NotFound() {
  // this is a 'useNavigate' hook
  // Custom Hook for(creating workout)
  const navigate = useNavigate();
  //  this is a 'useEffect hook'
  // life cycle:used as a function to maintain...
  // ..sync with the system
  useEffect(() => {
    //this is used to ensure page 'authorization' routing...
    // routing is maintained

    // seTimeout function for countdown
    setTimeout(() => {
      navigate(-1); // route back to previous page
    }, [500]); // after 0.5s
  });

  //   render jsx(ui)
  return <div>NotFound</div>;
}
