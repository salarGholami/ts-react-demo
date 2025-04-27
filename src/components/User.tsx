type UserProps = {
  user: {
    firstName: string;
    lastName: string;
  };
};
function User({ user }: UserProps) {
  return (
    <h2>
      Name {user.firstName} : - LastName {user.lastName}
    </h2>
  );
}

export default User;
