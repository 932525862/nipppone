import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from "react-i18next";

type FormValues = {
  name: string;
  number: string;
};

export const Support = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();
  

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const token: string = "7700997527:AAGr4FXq05a8AgxNIWiS-ocm2Ddm9uT4XD4";
    const chat_id: number = -1002491440339;
    const url: string = `https://api.telegram.org/bot${token}/sendMessage`;
    const messageContent = `Name: ${data.name} \nNumber: ${data.number}`;
    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chat_id,
        text: messageContent,
      },
    })
      .then((res) => {
        console.log(res);
        toast.success("Succsess");
      })
      .catch((error) => {
        toast.error("Error");
        console.log(error);
      });
    reset();
  };
  const { t } = useTranslation()
  return (
    <section className="support" id="support">
      <div className="container">
        <div className="support-content d-flex items-center justify-between">
          <div className="support-text">
            <div className="question">{t("support.title")}</div>
            <div className="support-description">{t("support.description")}</div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
              className={errors.name ? 'error' : ''}
                type="text"
                {...register("name", { required: "This is required" })}
                placeholder={t("support.input-1")}
              />
              <span>{errors?.name && errors?.name?.message}</span>
            </div>
            <div>
              <input
              className={errors.number ? 'error' : ''}
                type="number"
                {...register("number", { required: "This is required" })}
                placeholder={t("support.input-2")}
              />
              <span>{errors?.number && errors?.number?.message}</span>
            </div>
            <button className="btn" type="submit">{t("support.button")}</button>
          </form>
        </div>
      </div>
    </section>
  );
};
