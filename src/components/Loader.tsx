interface LoaderProps {
  text: string;
}

const Loader = ({ text }: LoaderProps) => {
  return (
    <div className="backdrop-blur-sm opacity-0 flex items-center h-screen justify-center text-xl font-semibold bg-[#F4FCFF]">
      <div className="bg-slate-500 backdrop-filter backdrop-blur-md p-8 rounded-md">
        {text}
      </div>
    </div>
  );
};

export default Loader;
