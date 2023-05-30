import { useOutletContext } from "react-router-dom";

export default function Profile() {
  const { user } = useOutletContext();

  return (
    <div>
      <h1>Profile</h1>
      {Object.keys(user).map((key) => {
        return (
          <p key={key}>
            <strong>{key}</strong>: {user[key]}
          </p>
        );
      })}
    </div>
  );
}
