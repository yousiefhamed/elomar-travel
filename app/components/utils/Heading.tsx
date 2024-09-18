const Heading: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="w-full pb-12">
      <h2 className="w-fit text-5xl font-bold relative after:absolute after:top-full after:right-0 after:w-3/4 after:bg-green-dark after:h-[6px] after:mt-2 after:rounded-l-full">
        {title}
      </h2>
    </div>
  );
};

export default Heading;
