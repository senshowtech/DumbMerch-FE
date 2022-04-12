import "../assets/css/profile.css";

const Profilecomponent = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-lg">
          <h5 className="judul-produk">My Profile</h5>
          <div className="profile-kiri">
            <img
              src={require("../assets/img/person.png")}
              className="img-fluid"
              alt="..."
            />
            <div className="d-flex flex-column mx-3">
              <h6 className="judul-profile">Name</h6>
              <p className="paragrapgh-profile">Sena</p>
              <h6 className="judul-profile">Email</h6>
              <p className="paragrapgh-profile">hargiantofebrisena@gmail.com</p>
              <h6 className="judul-profile">Phone</h6>
              <p className="paragrapgh-profile">08212</p>
              <h6 className="judul-profile">Gender</h6>
              <p className="paragrapgh-profile">Male</p>
              <h6 className="judul-profile">Address</h6>
              <p className="paragrapgh-profile">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                porro, sequi nemo voluptates, ab quo inventore eaque corrupti
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg">
          <h5 className="judul-produk">My Transaction</h5>
          <div className="box-profile d-flex align-items-center">
            <div className="col-8 d-flex">
              <img
                src={require("../assets/img/mousesamping.png")}
                className="img-fluid img-samping"
                alt="..."
              />
              <div className="d-flex flex-column">
                <h6 className="judul-produk-profile">Mouse</h6>
                <p className="judul-produk-profile">Saturday, 14 Juli 2021</p>
                <p className="paragrapgh-produk-profile">Price: Rp.50.000</p>
                <p className="paragrapgh-produk-profile fw-bold">
                  Sub Total: 500.000
                </p>
              </div>
            </div>
            <div className="col-4">
              <svg
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M69.9873 66.8325L64.9263 21.5789C64.8101 20.5409 63.9326 19.756 62.8883 19.756H7.10523C6.06071 19.756 5.18297 20.541 5.06715 21.5791L0.0126919 66.8328C-0.0521125 67.4129 0.133277 67.9929 0.522378 68.4279C0.911476 68.8628 1.46724 69.1113 2.05089 69.1113H67.9493C68.5328 69.1113 69.089 68.8628 69.4778 68.4279C69.867 67.9929 70.0522 67.4125 69.9873 66.8325Z"
                  fill="#E13A3A"
                />
                <path
                  d="M69.9873 66.8325L64.9263 21.5788C64.8101 20.5408 63.9326 19.7559 62.8883 19.7559H35V69.1113H67.9493C68.5329 69.1113 69.0887 68.8625 69.4779 68.4275C69.867 67.9926 70.0522 67.4125 69.9873 66.8325Z"
                  fill="#F74D4D"
                />
                <path
                  d="M48.1933 31.8557C47.0609 31.8557 46.1426 30.9374 46.1426 29.8048V16.133C46.1426 9.98894 41.144 4.99036 34.9999 4.99036C28.856 4.99036 23.8574 9.98894 23.8574 16.133V29.8048C23.8574 30.9374 22.9392 31.8557 21.8066 31.8557C20.6741 31.8557 19.7559 30.9374 19.7559 29.8048V16.133C19.7559 7.72733 26.5944 0.888809 34.9999 0.888809C43.4056 0.888809 50.2443 7.72733 50.2443 16.133V29.8048C50.2443 30.9374 49.326 31.8557 48.1933 31.8557Z"
                  fill="#FFF4F4"
                />
                <path
                  d="M35 0.888809V4.99036C41.1441 4.99036 46.1427 9.98894 46.1427 16.133V29.8048C46.1427 30.9374 47.0607 31.8557 48.1934 31.8557C49.3258 31.8557 50.2441 30.9374 50.2441 29.8048V16.133C50.2441 7.72733 43.4057 0.888809 35 0.888809Z"
                  fill="#F6EFEA"
                />
                <path
                  d="M16.189 38.7164H19.1671C19.8884 38.7164 20.5714 38.7969 21.2162 38.9582C21.8696 39.1195 22.4381 39.3823 22.9217 39.7473C23.4053 40.1036 23.7871 40.5704 24.0671 41.1473C24.3556 41.7241 24.4999 42.4241 24.4999 43.2473C24.4999 43.9769 24.3599 44.6218 24.0799 45.1818C23.8084 45.7332 23.4393 46.2 22.9726 46.5818C22.5059 46.955 21.9671 47.2395 21.3562 47.4345C20.7453 47.6296 20.1047 47.7273 19.4344 47.7273H16.189V38.7164ZM18.1744 45.8945H19.2053C19.6635 45.8945 20.0877 45.8478 20.4781 45.7545C20.8768 45.6613 21.2205 45.5086 21.509 45.2964C21.7975 45.0759 22.0223 44.7914 22.1835 44.4436C22.3532 44.0873 22.4381 43.6546 22.4381 43.1455C22.4381 42.7041 22.3532 42.3223 22.1835 42C22.0223 41.6691 21.8017 41.3977 21.5217 41.1855C21.2417 40.9732 20.9108 40.8164 20.529 40.7145C20.1556 40.6041 19.7611 40.5491 19.3453 40.5491H18.1744V45.8945ZM33.4446 44.2527C33.4446 44.7873 33.3638 45.2795 33.2028 45.7291C33.0415 46.1787 32.7996 46.5691 32.4773 46.9C32.1633 47.2309 31.7687 47.4896 31.2936 47.6764C30.8184 47.8631 30.2711 47.9564 29.6517 47.9564C29.0238 47.9564 28.4723 47.8631 27.9972 47.6764C27.522 47.4896 27.1232 47.2309 26.8008 46.9C26.4869 46.5691 26.2493 46.1787 26.0881 45.7291C25.9269 45.2795 25.8463 44.7873 25.8463 44.2527V38.7164H27.8317V44.1764C27.8317 44.4564 27.8742 44.715 27.959 44.9527C28.0523 45.1904 28.1796 45.3982 28.3408 45.5764C28.502 45.746 28.6929 45.8818 28.9136 45.9836C29.1427 46.0769 29.3887 46.1236 29.6517 46.1236C29.9148 46.1236 30.1566 46.0769 30.3772 45.9836C30.5978 45.8818 30.7887 45.746 30.9499 45.5764C31.1111 45.3982 31.2342 45.1904 31.319 44.9527C31.4123 44.715 31.459 44.4564 31.459 44.1764V38.7164H33.4446V44.2527ZM35.2799 38.7164H38.2835L40.358 44.5964H40.3835L42.4708 38.7164H45.4617V47.7273H43.4762V40.8164H43.4508L41.0835 47.7273H39.569L37.2908 40.8164H37.2653V47.7273H35.2799V38.7164ZM47.2985 38.7164H50.6585C51.049 38.7164 51.4394 38.746 51.8295 38.8055C52.2285 38.8564 52.5848 38.9668 52.8985 39.1364C53.2126 39.2977 53.4671 39.5268 53.6622 39.8236C53.8575 40.1205 53.9549 40.5151 53.9549 41.0073C53.9549 41.5164 53.8108 41.9405 53.5222 42.28C53.2422 42.6109 52.869 42.8486 52.4022 42.9927V43.0182C52.6994 43.0605 52.9666 43.1455 53.204 43.2727C53.4503 43.3914 53.658 43.5486 53.8276 43.7436C54.0058 43.9304 54.1417 44.1509 54.2349 44.4055C54.3285 44.66 54.3749 44.9314 54.3749 45.22C54.3749 45.695 54.2731 46.094 54.0695 46.4164C53.8658 46.7304 53.603 46.985 53.2804 47.18C52.958 47.375 52.5931 47.515 52.1858 47.6C51.7871 47.685 51.3885 47.7273 50.9895 47.7273H47.2985V38.7164ZM49.284 42.3182H50.7222C50.8749 42.3182 51.0235 42.3013 51.1676 42.2673C51.3204 42.2332 51.4562 42.1782 51.5749 42.1018C51.6939 42.0255 51.7871 41.9236 51.8549 41.7964C51.9313 41.6691 51.9695 41.5164 51.9695 41.3382C51.9695 41.1514 51.9271 40.9987 51.8422 40.88C51.7658 40.7527 51.664 40.655 51.5367 40.5873C51.4095 40.5195 51.2653 40.4727 51.104 40.4473C50.943 40.4132 50.7858 40.3964 50.6331 40.3964H49.284V42.3182ZM49.284 46.0473H51.0658C51.2185 46.0473 51.3713 46.0304 51.524 45.9964C51.6853 45.9623 51.8295 45.9031 51.9567 45.8182C52.084 45.7332 52.1858 45.6231 52.2622 45.4873C52.3471 45.3514 52.3895 45.186 52.3895 44.9909C52.3895 44.7787 52.3344 44.6091 52.224 44.4818C52.1222 44.346 51.9908 44.2441 51.8295 44.1764C51.6685 44.1086 51.4944 44.0618 51.3076 44.0364C51.1212 44.0109 50.9471 43.9982 50.7858 43.9982H49.284V46.0473Z"
                  fill="white"
                />
                <path
                  d="M13.5293 51.4436H15.1202L18.1747 58.5073H18.2002L21.2802 51.4436H22.8329V60.4545H21.7638V52.8946H21.7384L18.5057 60.4545H17.8566L14.6238 52.8946H14.5984V60.4545H13.5293V51.4436ZM25.0758 51.4436H30.7395V52.4364H26.1449V55.2618H30.434V56.2546H26.1449V59.4618H30.9685V60.4545H25.0758V51.4436ZM32.6202 51.4436H34.9238C35.3566 51.4436 35.7851 51.4691 36.2093 51.52C36.642 51.5709 37.028 51.6813 37.3675 51.8509C37.707 52.0205 37.9825 52.2709 38.1947 52.6018C38.407 52.9241 38.5129 53.3655 38.5129 53.9255C38.5129 54.5873 38.3134 55.1218 37.9147 55.5291C37.5161 55.9364 36.9643 56.1951 36.2602 56.3055L38.8184 60.4545H37.5075L35.0638 56.4073H33.6893V60.4545H32.6202V51.4436ZM33.6893 55.4146H34.6438C34.9407 55.4146 35.2462 55.406 35.5602 55.3891C35.8825 55.3722 36.1752 55.3169 36.4384 55.2236C36.7098 55.1304 36.9306 54.986 37.1002 54.7909C37.2784 54.5873 37.3675 54.2987 37.3675 53.9255C37.3675 53.6031 37.3038 53.3441 37.1766 53.1491C37.0493 52.954 36.8797 52.8055 36.6675 52.7036C36.4638 52.5932 36.2306 52.5213 35.9675 52.4873C35.7129 52.4532 35.4542 52.4364 35.1911 52.4364H33.6893V55.4146ZM46.7134 53.3018C46.442 52.9369 46.1066 52.6655 45.708 52.4873C45.3093 52.3005 44.8934 52.2073 44.4607 52.2073C43.9602 52.2073 43.4976 52.3091 43.0734 52.5127C42.6576 52.7164 42.2971 52.9922 41.9916 53.34C41.6861 53.6795 41.4485 54.0782 41.2789 54.5364C41.1093 54.986 41.0243 55.4569 41.0243 55.9491C41.0243 56.475 41.1093 56.9673 41.2789 57.4255C41.4485 57.875 41.682 58.2696 41.9789 58.6091C42.2843 58.94 42.6448 59.2031 43.0607 59.3982C43.4848 59.5932 43.9516 59.6909 44.4607 59.6909C45.0121 59.6909 45.5043 59.585 45.9371 59.3727C46.3698 59.1522 46.7475 58.8382 47.0698 58.4309L47.8716 59.1055C47.4643 59.6486 46.9721 60.0473 46.3952 60.3018C45.8266 60.5564 45.182 60.6836 44.4607 60.6836C43.8157 60.6836 43.2134 60.565 42.6534 60.3273C42.0934 60.0896 41.6056 59.7631 41.1898 59.3473C40.7825 58.9231 40.4602 58.4223 40.2225 57.8455C39.9934 57.2686 39.8789 56.6364 39.8789 55.9491C39.8789 55.2873 39.9893 54.6678 40.2098 54.0909C40.4389 53.5141 40.7571 53.0132 41.1643 52.5891C41.5716 52.165 42.0552 51.8296 42.6152 51.5836C43.1752 51.3377 43.7903 51.2146 44.4607 51.2146C45.0716 51.2146 45.6571 51.325 46.2171 51.5455C46.7856 51.766 47.2607 52.1268 47.6425 52.6273L46.7134 53.3018ZM49.362 51.4436H50.431V55.2618H55.242V51.4436H56.3111V60.4545H55.242V56.2546H50.431V60.4545H49.362V51.4436Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profilecomponent;
