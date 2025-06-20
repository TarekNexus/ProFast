import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            autoComplete="username"
            {...register("email")}
            className="input"
            placeholder="Email"
          />

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

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>

         
        </fieldset>
         <button className="btn btn-neutral mt-4">Login</button>
      </form>
    </div>
  );
};

export default Login;
