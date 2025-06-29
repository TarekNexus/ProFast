import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";
import useAxios from "../../../Hooks/useAxios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [profilePic, setProfilePic] = useState("");
  const axiosInstance = useAxios();

  const { createUser, updateUsersProfile } = useAuth();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then(async (result) => {
        console.log(result.user);

        // update userinfo in the database

        const userInfo = {
          email: data.email,
          role: "user",
          created_at: new Date().toISOString(),
          Last_Log_in: new Date().toISOString(),
        };
        
        const userRes = await axiosInstance.post("/users", userInfo);
        console.log(userRes.data);



        // update user profile in firebase
        const userProfile = {
          displayName: data.name,
          photoURL: profilePic,
        };
        updateUsersProfile(userProfile)
          .then(() => {
            console.log("Profile Name picture Updated");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // image uploder
  const handleImageUpload = async (e) => {
    const image = e.target.files[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);

    const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_image_upload_key
    }`;

    const res = await axios.post(imageUploadUrl, formData);
    setProfilePic(res.data.data.url);
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Create an Account</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset">
            {/* name feild  */}
            <label className="label">Your Name</label>
            <input
              type="text"
              autoComplete="username"
              {...register("name", { required: true })}
              className="input"
              placeholder="Your Name"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500">Your Name is required</p>
            )}
            {/* Image feild  */}
            <label className="label">Your Photo</label>
            <input
              onChange={handleImageUpload}
              type="file"
              autoComplete="username"
              className="input"
              placeholder="Your Profile Picture "
            />

            {/* email feild  */}
            <label className="label">Email</label>
            <input
              type="email"
              autoComplete="username"
              {...register("email", { required: true })}
              className="input"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is required</p>
            )}
            {/* password feild  */}
            <label className="label">Password</label>
            <input
              type="password"
              autoComplete="current-password"
              {...register("password", { required: true, minLength: 6 })}
              className="input"
              placeholder="Password"
            />

            {errors.password?.type === "required" && (
              <p className="text-red-500">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">
                Password Must be 6 characters or longer
              </p>
            )}

            <button className="btn btn-primary mt-4 text-black">
              Register
            </button>
          </fieldset>
          <p>
            <small>
              Already have an account?
              <Link className="btn btn-link -ml-4" to="/login">
                Login
              </Link>{" "}
            </small>
          </p>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
