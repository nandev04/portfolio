import { FormProvider, useForm } from "react-hook-form";
import Section from "../../components/ui/Section";
import InputLabel from "./components/InputLabel";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  emailValidation,
  type emailValidationType,
} from "./schema/emailValidation";
import { FaArrowCircleRight } from "react-icons/fa";

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
    <div className="bg-dark-grey-900 min-h-dvh">
      <Section>
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
                  Enviar mensagem <FaArrowCircleRight className="text-white" />
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
