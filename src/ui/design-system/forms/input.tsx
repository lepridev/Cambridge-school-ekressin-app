import clsx from "clsx";
import { Typograpy } from "../typograpy/typography";

interface Props {
  isLoading: boolean;
  placehoder: string;
  type?: "text" | "email" | "password";
  register: any;
  errors: any;
  errorMsg: string;
  id: string;
  required?: boolean;
  isAutocompleted: boolean;
}

export const Input = ({
  isLoading,
  placehoder,
  type = "text",
  register,
  errors,
  errorMsg = "Ce champ est par defaut requis",
  id,
  required = true,
  isAutocompleted = false,
}: Props) => {
  return (
    <div className=" space-y-2 text-center ">
      <input
        type={type}
        placeholder={placehoder}
        className={clsx(
          errors[id] ? "placeholder-alert-danger" : "placeholder-gray-600",
          "w-full p-4 font-light border border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-primary"
        )}
        disabled={isLoading}
        {...register(id, {
          required: { value: required, message: errorMsg },
        })}
        autoComplete={isAutocompleted ? "on" : "off"}
      />
      {errors[id] && (
        <Typograpy variant="caption4" theme="danger" component="div">
          {errors[id]?.message}
        </Typograpy>
      )}
    </div>
  );
};
