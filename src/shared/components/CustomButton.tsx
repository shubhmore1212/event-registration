export const CustomButton = (props: any) => {
  const { name, buttonHandler, className } = props;

  return (
    <>
      <button className={className} onClick={buttonHandler}>
        {name}
      </button>
    </>
  );
};
