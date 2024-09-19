const BgScreen: React.FC<{ bg?: string }> = ({
  bg = "bg-decor-gray-light",
}) => {
  return (
    <div
      style={{ width: "calc(100svw - 5px)" }}
      className={`${
        bg !== "bg-decor-gray-light" ? bg : "bg-decor-gray-light"
      } h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-10 box-content -z-50`}
    ></div>
  );
};

export default BgScreen;
