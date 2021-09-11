const ReferralCodeModal = () => {
  return (
    <form className="container modal fixed md:top-1/2 top-1/2 left-1/2 bg-white w-11/12 md:w-auto z-50 transform -translate-y-1/2 -translate-x-1/2 rounded-md  md:p-7 p-6  shadow-2xl border-textDark ">
      <h1 className="text-center font-medium text-xl">Enter Referral Code</h1>
      <svg
        onClick={() => setShowLoginModal(false)}
        className={`cursor-pointer absolute top-2.5 right-2.5`}
        fill="#F25724"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 512 512"
        width="24px"
        height="24px"
      >
        <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
      </svg>

      <div className="gap-5 justify-center mt-7 grid md:flex">
        <button className=" py-2 md:px-6  px-4 shadow-md bg-white flex gap-2 justify-between items-center">
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};

export default ReferralCodeModal;
