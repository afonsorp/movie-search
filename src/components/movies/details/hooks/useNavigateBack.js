import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const useNavigateBack = () => {
  const navigate = useNavigate();
  const navigateBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return { navigateBack };
};

export default useNavigateBack;
