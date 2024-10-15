import { FC, useState } from "react";
import { Modal } from "antd";
import PhoneInput from "react-phone-input-2";
import { useForm, SubmitHandler } from "react-hook-form";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from "react-i18next";
interface ModalCardProps {
  open: boolean;
  setOpen: (item: boolean) => void;
}

interface FormValues {
  name: string;
  userName: string
  phone: string;
}

const ModalCard: FC<ModalCardProps> = ({ open, setOpen }) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset
  } = useForm<FormValues>();
  const [phone, setPhone] = useState<string>("");

  const handleCancel = () => {
    setOpen(false);
  };
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const token: string = "7700997527:AAGr4FXq05a8AgxNIWiS-ocm2Ddm9uT4XD4";
    const chat_id: number = -1002491440339;
    const url: string = `https://api.telegram.org/bot${token}/sendMessage`;
    const messageContent = `Name: ${data.name} \nUsername: ${data.userName} \nNumber: ${data.phone}`;
    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chat_id,
        text: messageContent,
      },
    })
      .then((res) => {
        toast.success("Succsess");
        setOpen(false)
        console.log(res);
      })
      .catch((error) => {
        toast.error("Error");
        console.log(error);
      });
    reset();
    setPhone("998")
    console.log(data);
  };

  const { t } = useTranslation()

  return (
    <>
      <Modal
        title={t("modal.props")}
        open={open}
        onCancel={handleCancel}
        footer={false}
      >
        <div className="modal-content">
          <h3>{t("modal.title")}</h3>
          <p className="modal-description">{t("modal.description")}</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              {...register("name", { required: "This is required" })}
              placeholder={t("modal.input-1")}
            />
            <input
              type="text"
              {...register("userName", { required: "This is required" })}
              placeholder={t("modal.input-2")}
            />
            <PhoneInput
              country={"uz"}
              value={phone}
              onChange={(value) => {
                setPhone(value);
                setValue("phone", value);
              }}
              inputProps={{
                name: "phone",
                required: true,
                autoFocus: true,
              }}
              inputClass="input-tel"
              buttonClass="input-button"
              containerClass="input-tel"
            />
            <button type="submit">{t("modal.button")}</button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default ModalCard;
