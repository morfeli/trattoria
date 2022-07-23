type InputProps = {
  type: string;
  id: string;
  placeholder?: string;
  pattern?: string;
};

export const Input = ({ type, id, placeholder, pattern }: InputProps) => {
  return (
    <div className="flex flex-col">
      <input
        type={type}
        id={id}
        placeholder={placeholder && placeholder}
        pattern={pattern && pattern}
      />
    </div>
  );
};
