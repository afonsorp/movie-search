import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useNavigateBack = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { key } = location;

  const navigateBack = useCallback(() => {
    if (key !== "default") {
      navigate(-1);
    } else {
      navigate("/home");
    }
  }, [navigate, key]);

  return { navigateBack };
};

export default useNavigateBack;
