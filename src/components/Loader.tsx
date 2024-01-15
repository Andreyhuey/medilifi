interface LoaderProps {
  text: string;
}

const Loader = ({ text }: LoaderProps) => {
  return (
    <div className="backdrop-blur-sm flex items-center h-screen justify-center text-xl font-semibold bg-[#F4FCFF]">
      <div className="bg-[rgba(244,252,255,0.9)] backdrop-filter backdrop-blur-md p-8 rounded-md">
        {text}
      </div>
    </div>
  );
};

export default Loader;
