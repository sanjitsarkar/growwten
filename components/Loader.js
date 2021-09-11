import Loader from "react-loader-spinner";
const _Loader = () => {
  return (
    <div className="grid place-items-center">
      <Loader
        type="Bars"
        color="#067fee"
        height={80}
        width={80}
        secondaryColor="#f35020"
      />
    </div>
  );
};

export default _Loader;
