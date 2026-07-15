import { FormProvider, useForm } from "react-hook-form";
import InputLabel from "./components/InputLabel";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  emailValidation,
  type emailValidationType,
} from "./schema/emailValidation";
import { FaArrowCircleRight, FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { send } from "@emailjs/browser";
import LoadingSpinner from "./components/LoadingSpinner";
import toast from "react-hot-toast";

const Contact = () => {
  const methods = useForm({
    resolver: zodResolver(emailValidation),
    mode: "onSubmit",
  });

  const onSubmitEmail = async (data: emailValidationType) => {
    try {
      await send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          message: data.message,
          subject: data.subject,
          email: data.email,
        },
      );

      toast.success("Formulário enviado com sucesso");
    } catch {
      methods.setError("root", {
        type: "manual",
        message: "Ocorreu um erro ao enviar o formulário",
      });
    }
  };

  return (
    <>
      <div className="relative bg-dark-grey-900 min-h-screen ">
        <section
          className={`flex flex-col min-h-screen max-w-700 mx-auto self-center relative`}
        >
          <span className="absolute top-0 -translate-y-1/2 text-decoration">
            /CONTACT
          </span>
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
                    {methods.formState.errors.root?.message && (
                      <span className="font-quinary ml-1  text-[0.875rem] text-red-400">
                        {methods.formState.errors.root.message}
                      </span>
                    )}
                  </div>

                  <button
                    disabled={methods.formState.isSubmitting}
                    className="flex items-center bg-dark-grey-800 hover:bg-dark-grey-900 rounded-3xl font-secondary font-bold gap-3 ml-auto text-white mt-10 px-3 py-2"
                    type="submit"
                  >
                    {methods.formState.isSubmitting ? (
                      <>
                        Enviando <LoadingSpinner />
                      </>
                    ) : (
                      <>
                        Enviar mensagem{" "}
                        <FaArrowCircleRight className="text-white" />
                      </>
                    )}{" "}
                  </button>
                </form>
              </FormProvider>
            </div>
          </div>

          <div className="flex gap-2 justify-end pr-5 pb-2 h-10 mt-auto">
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
