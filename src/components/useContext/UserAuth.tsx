import { useUser } from "./UserContext";

const UserAuth: React.FC = ({}) => {
  const { setUser } = useUser();

  const handleLogin = () => {
    setUser({
      user: "salar",
      email: "salargholami021@gmail.com",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};

export default UserAuth;
