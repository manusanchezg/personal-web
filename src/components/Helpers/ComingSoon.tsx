import Icons from "../Icons/Icons";

const ComingSoonPage = () => {
  return (
    <div className="dark:bg-slate-900 flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center flex flex-col items-center">
        <div className="w-10 h-10 overflow-hidden">
          <Icons icon="work" size={5} />
        </div>
        <h1 className="text-2xl font-bold mb-2 dark:text-slate-400">
          We are working on it 😁
        </h1>
        <p className="text-lg text-gray-600 mb-6 dark:text-slate-300">
          This page will be ready shortly, thank you for your patience!
        </p>
      </div>
    </div>
  );
};

export default ComingSoonPage;
