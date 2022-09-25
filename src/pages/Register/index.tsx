import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
    </form>
  );
};

export default Register;
