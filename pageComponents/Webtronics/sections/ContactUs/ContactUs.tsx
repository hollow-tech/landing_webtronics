import React from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ButtonTypes, IFormInput } from "./ContactUs.types";
import { Button, Input } from "../../../../components";

import styles from "./ContactUs.module.css";
const schema = yup
  .object({
    name: yup.string().required(),
    phone: yup.number().typeError("that doesn't look like a phone number").integer().required(),
    email: yup.string().email().required(),
  })
  .required();

export const ContactUs: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    axios({
      method: "post",
      url: "http://localhost:3004/feedback",
      data: data,
    });
  };

  return (
    <div className={styles[`contact_us_wrapper`]} id="contact_section">
      <form className={styles.contact_us} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.contact_us_content}>
          <h2 className={styles.title}>Contact Us</h2>
          <p className={styles.contact_us_text}>
            Do you have any kind of help please contact with us.
          </p>

          <Input
            placeholder={"Name"}
            error={errors.name ? true : false}
            register={register}
            value={"name"}
          />
          {errors.name?.message}

          <Input
            placeholder={"Phone"}
            error={errors.phone ? true : false}
            register={register}
            value={"phone"}
          />
          {errors.phone?.message}

          <Input
            placeholder={"E-Mail"}
            error={errors.email ? true : false}
            register={register}
            value={"email"}
          />
          {errors.email?.message}

          <Button
            content={"Send"}
            type={ButtonTypes.Submit}
            disabled={errors.name || errors.phone || errors.email ? true : false}
          />
        </div>
      </form>
    </div>
  );
};
