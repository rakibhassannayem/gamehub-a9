import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

export default function MyProfile() {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-[70vh] p-6 text-white">
      <title>Gamehub-My Profile</title>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold">My Profile</h1>
            <p className="text-sm opacity-70">
              Manage your account and developer preferences
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <Link
              to={"/profile/update"}
              className="btn btn-sm btn-outline text-lg"
            >
              Update Information
            </Link>
          </div>
        </div>

        <div className="card items-center shadow-2xl p-6">
          <div className="avatar">
            <div className="rounded ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={
                  user.photoURL ||
                  "https://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Actions-im-kick-user-icon.png"
                }
                alt="profile"
              />
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold">
              {user.displayName || "No display name"}
            </h2>
            <p className="text-sm opacity-70">{user.email}</p>
          </div>
        </div>

        <div className="mt-6 text-xs opacity-60 text-center">
          Tip: Click <span className="font-medium">"Update Information"</span>{" "}
          to change your name or profile photo.
        </div>
      </div>
    </div>
  );
}
