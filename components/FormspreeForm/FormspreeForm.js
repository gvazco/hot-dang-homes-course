import { useForm, ValidationError } from "@formspree/react";
import { Input } from "components/Input";

export const FormspreeForm = ({ formId }) => {
  const [state, handleSubmit] = useForm(formId);
  if (state.succeeded) {
    return <p className="max-w-5xl mx-auto my-5">Thanks for joining!</p>;
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto m-2 my-5 flex flex-col"
    >
      <label className="my-2" htmlFor="name">
        Name
      </label>
      <Input
        className="my-2"
        id="name"
        type="text"
        name="name"
        placeholder="Ingrese Nombre completo"
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <div className="flex md:flex-row flex-col justify-between">
        <div className="flex flex-col w-full md:mr-1">
          <label className="my-2" htmlFor="email">
            Email Address
          </label>
          <Input
            className="my-2"
            id="email"
            type="email"
            name="email"
            placeholder="Ingrese su correo electrónico."
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="flex flex-col w-full md:ml-1">
          <label className="my-2" htmlFor="number">
            Phone Number
          </label>
          <Input
            className="my-2"
            type="number"
            id="phone_number"
            name="phone_number"
            maxLength={10}
            placeholder="Número a 10 dígitos"
          />
        </div>
      </div>
      <label className="my-2" htmlFor="message">
        Message
      </label>
      <textarea
        className="w-full border-2 border-slate-400 p-1 hover:border-slate-500"
        id="message"
        name="message"
        style={{ height: "150px" }}
        rows="4" // opcional, se usa para establecer la cantidad de filas iniciales del textarea
        placeholder="Por favor, escriba un breve mensaje, nuestro equipo le atenderá con gusto."
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <div>
        <button className="my-5 btn" type="submit" disabled={state.submitting}>
          Submit
        </button>
      </div>
    </form>
  );
};
