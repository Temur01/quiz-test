import QuizApp from "../../components/QuizApp";
import logo from "../../assets/logo.png";
import Timer from "../../components/Timer";

export const QuizPage = () => {
  const handleTimeUp = () => {
    console.log("Time is up!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <img
            src={logo}
            alt="O'zbekiston Respublikasi Davlat Xizmati"
            className="h-14"
          />
          <Timer initialTime={3600} onTimeUp={handleTimeUp} />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <QuizApp />
      </div>
    </div>
  );
};
