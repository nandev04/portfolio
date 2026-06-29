import Section from "../../components/ui/Section";
import InputLabel from "./components/InputLabel";

const Contact = () => {
  return (
    <div className="bg-dark-grey-900">
      <Section>
        <div className="bg-white w-full max-w-4xl p-10">
          <form className="flex flex-col gap-2" action="">
            <InputLabel htmlFor="nameFor" label="Nome" type="text" />
            <InputLabel htmlFor="emailFor" label="Email" type="email" />
            <InputLabel htmlFor="subject" label="Assunto" type="text" />
            <InputLabel htmlFor="message" label="Mensagem" type="text" />
          </form>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
