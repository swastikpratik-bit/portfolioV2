import Download from "./lottie/Download-icon";
import SendIcon from "./lottie/Send-icon";

const ResumeCard = () => {
  return (
    // <CardWrapper>
    <div className="btn-secondary relative h-full flex flex-col justify-center gap-6 px-8 py-">
      <div className="flex justify-between w-full items-center">
        <div className="flex flex-col items-start gap-1">
          <h1 className="text-xl font-medium dark:text-white text-black uppercase opacity-90">
            Resume
          </h1>
        </div>
        <div className="pl-6 flex gap-2 lg:gap-6 items-center">
          <Download />
          <SendIcon />
        </div>
      </div>
    </div>
    // </CardWrapper>
  );
};

export default ResumeCard;
