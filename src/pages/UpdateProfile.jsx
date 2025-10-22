import { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { updateUser, user, setUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photoUrl.value;

    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        navigate("/my-profile");
        toast.success("Profile Updated.");
      })
      .catch((error) => {
        setUser(user);
        toast.error(error.message);
      });
  };
  return (
    <div className="text-white flex justify-center my-8">
      <title>Gamehub-Update Profile</title>
      <div className="card bg-gray-800 rounded-xl w-full max-w-sm shrink-0 shadow-2xl pt-4">
        <h2 className="font-semibold text-2xl text-center">
          Update your profile
        </h2>
        <form onSubmit={handleUpdate} className="card-body">
          <fieldset className="fieldset">
            <label className="label text-lg font-semibold">Name</label>
            <input
              name="name"
              type="text"
              className="input border w-full"
              placeholder="Enter your name"
              required
            />
            <label className="label text-lg font-semibold">Photo URL</label>
            <input
              name="photoUrl"
              type="text"
              className="input border w-full"
              placeholder="Enter your photo url"
              required
            />

            <button type="submit" className="btn text-xl bg-purple-800 mt-4">
              Update
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
