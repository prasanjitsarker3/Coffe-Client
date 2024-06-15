import { jwtDecode } from "jwt-decode";
import { useAppSelector } from "../Redux/Provider/hook";
import { useCurrentToken } from "../Redux/authSlice";

const useAuthUser = () => {
  const token = useAppSelector(useCurrentToken);
  let user: any = null;
  if (token) {
    user = jwtDecode(token);
  }

  return user;
};

export default useAuthUser;
