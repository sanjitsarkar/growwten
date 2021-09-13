import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-coolGray-100 text-coolGray-800 grid place-content-center  md:block">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3 mx-auto md:mx-0">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-600">
            <svg
              className="w-screen"
              viewBox="0 0 99 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M80.7523 17.5496H88.6194L75.0396 46.0344C73.7361 42.653 71.4178 39.7581 68.403 37.7472C65.3882 35.7362 61.8248 34.7079 58.2022 34.8034C54.5795 34.8989 51.0753 36.1135 48.1706 38.2805C45.266 40.4474 43.1034 43.4605 41.9798 46.9058C40.7831 44.8864 39.0612 43.2293 36.9974 42.1109C34.9336 40.9925 32.6052 40.4546 30.2599 40.5546C27.9147 40.6545 25.6405 41.3886 23.6793 42.6786C21.7182 43.9685 20.1435 45.7662 19.123 47.8801C17.8922 46.0038 16.0883 44.5753 13.9799 43.8071C11.8715 43.039 9.57142 42.9724 7.42211 43.6172C5.27279 44.262 3.38921 45.5837 2.05183 47.3856C0.714444 49.1874 -0.00520745 51.3731 2.83686e-05 53.617C0.726218 49.986 5.27701 46.4277 8.94426 45.7499C10.5976 45.4285 12.3104 45.6424 13.8339 46.3607C15.3574 47.0789 16.6123 48.264 17.4165 49.744C17.429 49.765 17.4392 49.7873 17.4467 49.8106C17.5496 50.216 17.8582 50.5912 17.9853 51.0209C18.1124 51.4505 18.3545 52.4127 18.6268 53.2721C18.6178 53.2078 18.6178 53.1426 18.6268 53.0784C18.6692 53.1934 18.6994 53.3144 18.7297 53.4294C18.7297 53.4294 18.8204 53.8651 18.8204 53.8772C18.8802 54.0611 18.9679 54.2346 19.0807 54.3916C19.2618 54.5953 19.5037 54.7353 19.7705 54.791C21.7494 55.2388 21.2169 50.5549 21.7615 49.393C22.5928 47.6067 23.9333 46.1058 25.6148 45.0788C27.2963 44.0519 29.2437 43.5448 31.2125 43.6211C33.1813 43.6973 35.0837 44.3537 36.6807 45.5077C38.2777 46.6616 39.4981 48.2618 40.1886 50.1071C40.4972 50.924 40.939 54.0043 41.3989 54.4763C41.7173 54.7783 42.124 54.9706 42.5595 55.025C42.995 55.0795 43.4365 54.9932 43.8195 54.7789C45.3445 53.8772 44.6667 51.3416 44.9512 49.8711C44.9541 49.8389 44.9541 49.8064 44.9512 49.7742C45.5459 46.6052 47.2224 43.7409 49.6943 41.6707C52.1663 39.6004 55.2803 38.4526 58.5046 38.4234C61.7288 38.3941 64.8632 39.4851 67.3723 41.5101C69.8815 43.5351 71.6098 46.3684 72.2619 49.5261C72.8005 52.1465 73.4178 57.7381 77.7084 55.0694L93.4425 19.3651L98.2837 25.4166L98.8889 0L80.7523 17.5496Z"
                fill="url(#paint0_linear)"
              />
              <path
                d="M10.554 40.8481C12.058 40.8481 13.2772 39.6289 13.2772 38.1249C13.2772 36.6209 12.058 35.4017 10.554 35.4017C9.04999 35.4017 7.83077 36.6209 7.83077 38.1249C7.83077 39.6289 9.04999 40.8481 10.554 40.8481Z"
                fill="#F15A24"
              />
              <path
                d="M58.3615 31.4682C61.3694 31.4682 63.8079 29.0297 63.8079 26.0218C63.8079 23.0138 61.3694 20.5753 58.3615 20.5753C55.3535 20.5753 52.915 23.0138 52.915 26.0218C52.915 29.0297 55.3535 31.4682 58.3615 31.4682Z"
                fill="#F15A24"
              />
              <path
                d="M30.5242 38.1249C32.5295 38.1249 34.1551 36.4993 34.1551 34.494C34.1551 32.4887 32.5295 30.863 30.5242 30.863C28.5189 30.863 26.8932 32.4887 26.8932 34.494C26.8932 36.4993 28.5189 38.1249 30.5242 38.1249Z"
                fill="#F15A24"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="2.83686e-05"
                  y1="27.8857"
                  x2="98.907"
                  y2="27.8857"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF0000" />
                  <stop offset="0.1" stopColor="#FD0B05" />
                  <stop offset="0.5" stopColor="#F73616" />
                  <stop offset="0.81" stopColor="#F35020" />
                  <stop offset="1" stopColor="#F15A24" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <Link
            href="/"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <span className="self-center text-2xl font-semibold cursor-pointer">
              GrowwTen
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-7 gap-y-8  lg:w-2/3 sm:grid-cols-4  mx-auto md:mx-0">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-coolGray-900  mx-auto md:mx-0">
              Product
            </h3>
            <ul className="space-y-1">
              <li>
                <Link href="#why-us">Features</Link>
              </li>
              <li>
                <Link href="#services">Services</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-coolGray-900">
              Company
            </h3>
            <ul className="space-y-1">
              <li>
                <Link href="/privacy">Privacy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 ">
            <div className="uppercase text-coolGray-900 ">Social media</div>
            <div className="flex justify-start space-x-3">
              <Link
                rel="noreferrer"
                href="https://fb.com/GrowwTen"
                title="Facebook"
                target="_blank"
                className="flex items-center p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fillCurrent"
                >
                  <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                </svg>
              </Link>
              <Link
                rel="noreferrer"
                href="https://twitter.com/GrowwTen"
                title="Twitter"
                target="_blank"
                className="flex items-center p-1"
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fillCurrent"
                >
                  <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                </svg>
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://instagram.com/GrowwTen"
                title="Instagram"
                className="flex items-center p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="w-5 h-5 fillCurrent"
                >
                  <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center text-coolGray-600">
        © 2021 Company Co. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
