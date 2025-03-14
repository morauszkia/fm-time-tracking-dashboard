const TimeframeOption = ({ timeframe, active = false, onClick }) => {
  const id = timeframe.toLowerCase();

  return (
    <div className={`w-full max-lg:text-center ${active ? "text-white" : ""}`}>
      <label htmlFor={id} className="cursor-pointer">
        {timeframe}
      </label>
      <input
        type="radio"
        name="timeframe"
        id={id}
        className="appearance-none"
        onClick={onClick}
      />
    </div>
  );
};

export default TimeframeOption;
