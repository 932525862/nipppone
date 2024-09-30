import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

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
    const token: string = "7334254772:AAEmPl7riyPEqOmXCh-zP2MwXS1fwUq0EBY";
    const chat_id: number = 717071146;
    const url: string = `https://api.telegram.org/bot${token}/sendMessage`;
    const messageContent = `text: ${data.name} \nnumber: ${data.number}`;
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
  return (
    <section className="support" id="support">
      <div className="container">
        <div className="support-content d-flex items-center justify-between">
          <div className="support-text">
            <div className="question">Savollaringiz qoldimi?</div>
            <div className="support-description">
              Ma’lumotlaringizni qoldiring siz bilan bog’lanib barcha
              savollaringizga javob beramiz.
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
              className={errors.name ? 'error' : ''}
                type="text"
                {...register("name", { required: "This is required" })}
                placeholder="Ismingiz"
              />
              <span>{errors?.name && errors?.name?.message}</span>
            </div>
            <div>
              <input
              className={errors.number ? 'error' : ''}
                type="number"
                {...register("number", { required: "This is required" })}
                placeholder="Telefon raqamingiz"
              />
              <span>{errors?.number && errors?.number?.message}</span>
            </div>
            <button className="btn" type="submit">
              Savol Berish
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
