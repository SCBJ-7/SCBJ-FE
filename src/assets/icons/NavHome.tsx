import { theme } from "@/styles/theme";

const NavIconHome = ({ isActive }: { isActive: boolean }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <g clipPath="url(#clip0_1724_9234)">
        <path
          d="M26.4873 20.5968C28.4273 20.5968 30 19.0186 30 17.0718C30 15.125 28.4273 13.5469 26.4873 13.5469C24.5473 13.5469 22.9746 15.125 22.9746 17.0718C22.9746 19.0186 24.5473 20.5968 26.4873 20.5968Z"
          fill={isActive ? theme.color.percentOrange : theme.color.black}
        />
        <path
          d="M4.51269 16.8146C6.45269 16.8146 8.02537 15.2364 8.02537 13.2896C8.02537 11.3428 6.45269 9.76465 4.51269 9.76465C2.57268 9.76465 1 11.3428 1 13.2896C1 15.2364 2.57268 16.8146 4.51269 16.8146Z"
          fill={isActive ? theme.color.percentOrange : theme.color.black}
        />
        <path
          d="M22.7322 5.99975H19.089C18.5431 8.0072 17.8158 8.73873 16.9359 8.73873C16.1476 8.73873 15.6017 8.22156 15.6017 7.24675C15.6017 6.91331 15.6306 6.51692 15.7221 5.99975H12.0314C11.2855 5.99975 10.6362 6.50842 10.4531 7.23484L6.00797 24.9566C5.75028 25.9858 6.52165 26.9844 7.57952 26.9878L10.7345 26.9997H10.8989C11.4499 25.0076 12.1806 24.2761 13.0622 24.2761C13.8607 24.2761 14.4133 24.8001 14.4133 25.7868C14.4133 26.1134 14.3828 26.503 14.298 26.9997H18.633C19.3908 26.9997 20.0468 26.4758 20.2181 25.7357L24.3139 8.0004C24.5496 6.97625 23.7765 5.99805 22.7288 5.99805L22.7322 5.99975ZM17.6921 13.8594H14.0014L14.237 12.7196H17.9379L17.6921 13.8594Z"
          fill={isActive ? theme.color.percentOrange : theme.color.black}
        />
      </g>
      <defs>
        <clipPath id="clip0_1724_9234">
          <rect
            width="29"
            height="21"
            fill={isActive ? theme.color.percentOrange : theme.color.black}
            transform="translate(1 6)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default NavIconHome;
