import clsx from "clsx";
import { Typograpy } from "../typograpy/typography";

export interface Props {
  id: string;
  placeholder: string;
  cols?: number;
  rows?: number;
  register: any;
  errors: any;
  errorMsg: string;
  required?: boolean;
  disabled: boolean;
}

export const Textarea = ({
  id,
  placeholder,
  cols,
  rows,
  register,
  errors,
  errorMsg,
  required,
  disabled,
}: Props) => {
  return (
    <div>
      <textarea
        id={id}
        placeholder={placeholder}
        cols={cols}
        rows={rows}
        {...register(id, {
          required: { value: required, message: errorMsg },
        })}
        className={clsx(
          errors[id] ? "placeholder-alert-danger" : "placeholder-gray-600",
          "w-full p-4 font-light border border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-primary"
        )}
        disabled={disabled}
      ></textarea>
      {errors[id] && (
        <Typograpy variant="caption3" component="div" theme="danger">
          {errors[id]?.message}
        </Typograpy>
      )}
    </div>
  );
};
