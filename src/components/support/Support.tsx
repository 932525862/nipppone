import { useForm, SubmitHandler } from "react-hook-form";
import Alert from "@mui/material/Alert";
import axios from "axios";
import { useState } from "react";
import { Snackbar } from "@mui/material";

type FormValues = {
  name: string;
  number: string;
};

export const Support = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();
  const isHandleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    console.log(event);
    setIsOpen(false);
  };
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    console.log(event);
    setOpen(false);
  };

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
        setIsOpen(true);
      })
      .catch((error) => {
        setOpen(true);
        console.log(error);
      });
    reset();
  };
  return (
    <section className="support" id="support">
      <Snackbar open={isOpen} autoHideDuration={3000} onClose={isHandleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          This is a success!
        </Alert>
      </Snackbar>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Error
        </Alert>
      </Snackbar>
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
