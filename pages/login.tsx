import {FC} from "react";

import { useForm } from "react-hook-form";
import Layout from "../components/Layout";
import Input from "../components/Input";

const Login: FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="usuario" {...register("username")} />
        <Input label="contraseña" type="passowrd" {...register("password")} />

        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </Layout>
  );
}

export default Login;
