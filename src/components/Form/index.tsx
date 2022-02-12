import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "../Input";

import { FormContent, ButtonForm } from './styles'

type InputsProps = {
  user_name: string,
};

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm<InputsProps>();
  const onSubmit = (data: InputsProps ) => {
    localStorage.setItem("user", data.user_name)
    handleClick()
  };

  let navigation = useNavigate();

  function handleClick() {
    navigation("/Home");
  }

  return (
      <FormContent>
        <h1>Registrar-se</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" placeholder="Digite seu usuario" {...register("user_name", { required: true })} />
        {errors.user_name && <span>Usuario é obrigatorio!</span>}
        <ButtonForm type="submit">Logar</ButtonForm>
        </form>
      </FormContent>
  );
}