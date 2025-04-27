type UserProps = {
  user: {
    firstName: string;
    lastName: string;
  };
};

const UserAsFc: React.FC<UserProps> = ({ user }) => {
  return (
    <h2>
      Name {user.firstName} : - LastName {user.lastName}
    </h2>
  );
};

export default UserAsFc;
