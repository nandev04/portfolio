import { FormProvider, useForm } from "react-hook-form";
import InputLabel from "./components/InputLabel";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  emailValidation,
  type emailValidationType,
} from "./schema/emailValidation";
import { FaArrowCircleRight, FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Contact = () => {
  const methods = useForm({
    resolver: zodResolver(emailValidation),
    mode: "onSubmit",
  });

  const onSubmitEmail = (data: emailValidationType) => {
    console.log(data);
    return;
  };

  return (
    <>
      <div className="relative bg-dark-grey-900 min-h-screen ">
        <div className="relative">
          <span className="absolute w-45 h-45 bg-dark-grey-900 rounded-full -top-15 -left-30"></span>
          <span className="absolute -top-15 text-decoration">/CONTACT</span>
        </div>
        <section
          className={`flex flex-col min-h-screen max-w-700 mx-auto self-center`}
        >
          <div className="py-24 px-16 mt-auto">
            <div className="bg-white w-full max-w-5xl py-10 px-11 mx-auto rounded-2xl">
              <FormProvider {...methods}>
                <form noValidate onSubmit={methods.handleSubmit(onSubmitEmail)}>
                  <div className="flex flex-col gap-3">
                    <InputLabel
                      registerName="name"
                      htmlFor="nameFor"
                      label="Nome"
                      type="text"
                      error={methods.formState.errors}
                    />
                    <InputLabel
                      error={methods.formState.errors}
                      registerName="email"
                      htmlFor="emailFor"
                      label="Email"
                      type="email"
                    />
                    <InputLabel
                      error={methods.formState.errors}
                      registerName="subject"
                      htmlFor="subject"
                      label="Assunto"
                      type="text"
                    />
                    <InputLabel
                      error={methods.formState.errors}
                      registerName="message"
                      htmlFor="message"
                      label="Mensagem"
                      type="text"
                    />
                  </div>

                  <div className="bg-dark-grey-800 rounded-3xl w-max ml-auto hover:bg-dark-grey-900">
                    <button
                      className="flex items-center font-secondary font-bold gap-3 ml-auto text-white mt-10 px-3 py-2 cursor-pointer"
                      type="submit"
                    >
                      Enviar mensagem{" "}
                      <FaArrowCircleRight className="text-white" />
                    </button>
                  </div>
                </form>
              </FormProvider>
            </div>
          </div>

          <div className="flex gap-2 justify-start pl-5 pb-2 h-10 mt-auto">
            <a
              href="https://github.com/nandev04"
              aria-label="Github"
              target="_blank"
            >
              <FaGithub
                aria-hidden={true}
                focusable={false}
                className="text-white w-full h-full"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/nandev04/"
              aria-label="LinkedIn"
              target="_blank"
            >
              <FaLinkedinIn
                aria-hidden={true}
                focusable={false}
                className="text-white w-full h-full"
              />
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
