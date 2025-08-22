import { Avatar } from "./Avatar";

export function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}
