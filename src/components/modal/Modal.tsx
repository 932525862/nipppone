import { FC, useState } from "react";
import { Modal } from "antd";
import PhoneInput from "react-phone-input-2";
import { useForm, SubmitHandler } from "react-hook-form";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
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
    const token: string = "7334254772:AAEmPl7riyPEqOmXCh-zP2MwXS1fwUq0EBY";
    const chat_id: number = 717071146;
    const url: string = `https://api.telegram.org/bot${token}/sendMessage`;
    const messageContent = `name: ${data.name} \nUsername: ${data.userName} \nnumber: ${data.phone}`;
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

  return (
    <>
      <Modal
        title="Bog'lanish"
        open={open}
        onCancel={handleCancel}
        footer={false}
      >
        <div className="modal-content">
          <h3>O'z ma'lumotlaringizni qoldiring</h3>
          <p className="modal-description">
            Sizga to'liqroq ma'lumot berish uchun mutaxassislarimiz siz bilan
            bog'lanishadi
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              {...register("name", { required: "This is required" })}
              placeholder="Ismingiz"
            />
            <input
              type="text"
              {...register("userName", { required: "This is required" })}
              placeholder="Telegram username (@test)"
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
            <button type="submit">Bog'lanish</button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default ModalCard;
