import React from "react";
import "../../assets/css/login.css";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../config/axios";
const FormLogin = () => {
  const dataResponse = React.useRef({});
  const navigate = useNavigate();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      let data = {
        email: e.target.email.value,
        password: e.target.password.value,
      };
      const response = await API.post(`/login`, data, config);
      if (response.status === 201) {
        dataResponse.current = response.data.data;
      }
      if (dataResponse.current.user.status === "admin") {
        localStorage.setItem(
          "token",
          JSON.stringify({
            token: dataResponse.current.user.token,
            isAdmin: true,
          })
        );
        navigate("/product");
      } else {
        localStorage.setItem(
          "token",
          JSON.stringify({
            token: dataResponse.current.user.token,
            isAdmin: false,
          })
        );
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg">
          <div className="box-kiri">
            <div className="icon-text">
              <svg
                width="264"
                height="264"
                viewBox="0 0 264 264"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2_108)">
                  <path
                    d="M263.952 252.054L244.865 81.3832C244.427 77.4685 241.117 74.5084 237.179 74.5084H26.797C22.8576 74.5084 19.5473 77.469 19.1105 81.3841L0.0479886 252.055C-0.196416 254.243 0.502768 256.43 1.97023 258.071C3.43769 259.711 5.5337 260.648 7.7349 260.648H256.266C258.467 260.648 260.564 259.711 262.031 258.071C263.498 256.43 264.197 254.242 263.952 252.054Z"
                    fill="#E13A3A"
                  />
                  <path
                    d="M263.952 252.054L244.865 81.3829C244.427 77.4682 241.117 74.5081 237.179 74.5081H132V260.648H256.266C258.467 260.648 260.563 259.71 262.031 258.069C263.498 256.429 264.197 254.241 263.952 252.054Z"
                    fill="#F74D4D"
                  />
                  <path
                    d="M82.2428 130.453C90.7859 130.453 97.7115 123.528 97.7115 114.985C97.7115 106.442 90.7859 99.5161 82.2428 99.5161C73.6996 99.5161 66.774 106.442 66.774 114.985C66.774 123.528 73.6996 130.453 82.2428 130.453Z"
                    fill="#2E2E2E"
                  />
                  <path
                    d="M181.758 130.453C190.301 130.453 197.226 123.528 197.226 114.985C197.226 106.441 190.301 99.5158 181.758 99.5158C173.214 99.5158 166.289 106.441 166.289 114.985C166.289 123.528 173.214 130.453 181.758 130.453Z"
                    fill="#1A1A1A"
                  />
                  <path
                    d="M181.758 120.142C177.487 120.142 174.024 116.678 174.024 112.407V60.8443C174.024 37.6726 155.172 18.8208 132 18.8208C108.829 18.8208 89.9771 37.6726 89.9771 60.8443V112.407C89.9771 116.678 86.5142 120.142 82.2428 120.142C77.9714 120.142 74.5084 116.678 74.5084 112.407V60.8443C74.5084 29.1431 100.299 3.35208 132 3.35208C163.702 3.35208 189.493 29.1431 189.493 60.8443V112.407C189.493 116.678 186.03 120.142 181.758 120.142Z"
                    fill="#FFF4F4"
                  />
                  <path
                    d="M132 3.35208V18.8208C155.172 18.8208 174.024 37.6726 174.024 60.8443V112.407C174.024 116.678 177.486 120.142 181.758 120.142C186.029 120.142 189.492 116.678 189.492 112.407V60.8443C189.492 29.1431 163.702 3.35208 132 3.35208Z"
                    fill="#F6EFEA"
                  />
                  <path
                    d="M61.056 146.016H72.288C75.008 146.016 77.5839 146.32 80.016 146.928C82.4799 147.536 84.624 148.528 86.448 149.904C88.272 151.248 89.712 153.008 90.768 155.184C91.856 157.36 92.4 160 92.4 163.104C92.4 165.856 91.872 168.288 90.816 170.4C89.792 172.48 88.4 174.24 86.64 175.68C84.8799 177.088 82.848 178.16 80.544 178.896C78.24 179.632 75.824 180 73.296 180H61.056V146.016ZM68.544 173.088H72.432C74.16 173.088 75.7599 172.912 77.232 172.56C78.7359 172.208 80.0319 171.632 81.12 170.832C82.208 170 83.0559 168.928 83.664 167.616C84.3039 166.272 84.624 164.64 84.624 162.72C84.624 161.056 84.3039 159.616 83.664 158.4C83.0559 157.152 82.224 156.128 81.168 155.328C80.112 154.528 78.864 153.936 77.424 153.552C76.016 153.136 74.528 152.928 72.96 152.928H68.544V173.088ZM126.134 166.896C126.134 168.912 125.83 170.768 125.222 172.464C124.614 174.16 123.702 175.632 122.486 176.88C121.302 178.128 119.814 179.104 118.022 179.808C116.23 180.512 114.166 180.864 111.83 180.864C109.462 180.864 107.382 180.512 105.59 179.808C103.798 179.104 102.294 178.128 101.078 176.88C99.8938 175.632 98.9978 174.16 98.3899 172.464C97.7818 170.768 97.4779 168.912 97.4779 166.896V146.016H104.966V166.608C104.966 167.664 105.126 168.64 105.446 169.536C105.798 170.432 106.278 171.216 106.886 171.888C107.494 172.528 108.214 173.04 109.046 173.424C109.91 173.776 110.838 173.952 111.83 173.952C112.822 173.952 113.734 173.776 114.566 173.424C115.398 173.04 116.118 172.528 116.726 171.888C117.334 171.216 117.798 170.432 118.118 169.536C118.47 168.64 118.646 167.664 118.646 166.608V146.016H126.134V166.896ZM133.056 146.016H144.384L152.208 168.192H152.304L160.176 146.016H171.456V180H163.968V153.936H163.872L154.944 180H149.232L140.64 153.936H140.544V180H133.056V146.016ZM178.384 146.016H191.056C192.528 146.016 194 146.128 195.472 146.352C196.976 146.544 198.32 146.96 199.504 147.6C200.688 148.208 201.648 149.072 202.384 150.192C203.12 151.312 203.488 152.8 203.488 154.656C203.488 156.576 202.944 158.176 201.856 159.456C200.8 160.704 199.392 161.6 197.632 162.144V162.24C198.752 162.4 199.76 162.72 200.656 163.2C201.584 163.648 202.368 164.24 203.008 164.976C203.68 165.68 204.192 166.512 204.544 167.472C204.896 168.432 205.072 169.456 205.072 170.544C205.072 172.336 204.688 173.84 203.92 175.056C203.152 176.24 202.16 177.2 200.944 177.936C199.728 178.672 198.352 179.2 196.816 179.52C195.312 179.84 193.808 180 192.304 180H178.384V146.016ZM185.872 159.6H191.296C191.872 159.6 192.432 159.536 192.976 159.408C193.552 159.28 194.064 159.072 194.512 158.784C194.96 158.496 195.312 158.112 195.568 157.632C195.856 157.152 196 156.576 196 155.904C196 155.2 195.84 154.624 195.52 154.176C195.232 153.696 194.848 153.328 194.368 153.072C193.888 152.816 193.344 152.64 192.736 152.544C192.128 152.416 191.536 152.352 190.96 152.352H185.872V159.6ZM185.872 173.664H192.592C193.168 173.664 193.744 173.6 194.32 173.472C194.928 173.344 195.472 173.12 195.952 172.8C196.432 172.48 196.816 172.064 197.104 171.552C197.424 171.04 197.584 170.416 197.584 169.68C197.584 168.88 197.376 168.24 196.96 167.76C196.576 167.248 196.08 166.864 195.472 166.608C194.864 166.352 194.208 166.176 193.504 166.08C192.8 165.984 192.144 165.936 191.536 165.936H185.872V173.664Z"
                    fill="white"
                  />
                  <path
                    d="M51.024 194.016H57.024L68.544 220.656H68.64L80.256 194.016H86.112V228H82.08V199.488H81.984L69.792 228H67.344L55.152 199.488H55.056V228H51.024V194.016ZM94.5709 194.016H115.931V197.76H98.6029V208.416H114.779V212.16H98.6029V224.256H116.795V228H94.5709V194.016ZM123.024 194.016H131.712C133.344 194.016 134.96 194.112 136.56 194.304C138.192 194.496 139.648 194.912 140.928 195.552C142.208 196.192 143.248 197.136 144.048 198.384C144.848 199.6 145.248 201.264 145.248 203.376C145.248 205.872 144.496 207.888 142.992 209.424C141.488 210.96 139.408 211.936 136.752 212.352L146.4 228H141.456L132.24 212.736H127.056V228H123.024V194.016ZM127.056 208.992H130.656C131.776 208.992 132.928 208.96 134.112 208.896C135.328 208.832 136.432 208.624 137.424 208.272C138.448 207.92 139.28 207.376 139.92 206.64C140.592 205.872 140.928 204.784 140.928 203.376C140.928 202.16 140.688 201.184 140.208 200.448C139.728 199.712 139.088 199.152 138.288 198.768C137.52 198.352 136.64 198.08 135.648 197.952C134.688 197.824 133.712 197.76 132.72 197.76H127.056V208.992ZM176.176 201.024C175.152 199.648 173.887 198.624 172.384 197.952C170.88 197.248 169.312 196.896 167.68 196.896C165.792 196.896 164.047 197.28 162.448 198.048C160.879 198.816 159.52 199.856 158.368 201.168C157.216 202.448 156.319 203.952 155.68 205.68C155.04 207.376 154.72 209.152 154.72 211.008C154.72 212.992 155.04 214.848 155.68 216.576C156.319 218.272 157.2 219.76 158.32 221.04C159.472 222.288 160.831 223.28 162.4 224.016C163.999 224.752 165.76 225.12 167.68 225.12C169.759 225.12 171.616 224.72 173.248 223.92C174.88 223.088 176.304 221.904 177.52 220.368L180.544 222.912C179.008 224.96 177.151 226.464 174.976 227.424C172.831 228.384 170.4 228.864 167.68 228.864C165.247 228.864 162.976 228.416 160.864 227.52C158.752 226.624 156.912 225.392 155.344 223.824C153.808 222.224 152.592 220.336 151.696 218.16C150.832 215.984 150.4 213.6 150.4 211.008C150.4 208.512 150.816 206.176 151.648 204C152.512 201.824 153.712 199.936 155.248 198.336C156.784 196.736 158.608 195.472 160.72 194.544C162.832 193.616 165.151 193.152 167.68 193.152C169.984 193.152 172.192 193.568 174.304 194.4C176.448 195.232 178.24 196.592 179.68 198.48L176.176 201.024ZM186.164 194.016H190.196V208.416H208.34V194.016H212.372V228H208.34V212.16H190.196V228H186.164V194.016Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_108">
                    <rect width="264" height="264" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <h1 className="judul-login">Easy, Fast and Reliable</h1>

            <p className="paragrapgh-login">
              Go shopping for merchandise, just go to dumb merch shopping. the
              biggest merchandise in Indonesia
            </p>

            <div className="d-flex mt-5 button-grup">
              <Link to="/login" className="btn login-buttons-samping">
                Login
              </Link>
              <Link
                to="/register"
                className="mx-5 text-login register-buttons-samping"
              >
                Register
              </Link>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg">
          <div className="box-kanan">
            <div className="d-flex align-items-center login-box">
              <Form onSubmit={HandleSubmit}>
                <h3 className="judul-login-form mx-5">Login</h3>
                <div className="mx-5">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      className="form-background"
                    />
                  </Form.Group>
                </div>

                <div className="mx-5">
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-background"
                    />
                  </Form.Group>
                </div>

                <div className="mx-5">
                  <Button type="submit" className="login-buttons">
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
