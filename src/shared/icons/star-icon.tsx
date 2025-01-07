type Props = {
  gradientColor?: boolean,
  smallSize?: boolean
}

const StarIcon = (props: Props) => {
  return (
    <svg width={`${props.smallSize? 15 : 27}`} height={`${props.smallSize? 14 : 26}`} viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.9101 1.35876L11.0101 4.9512C10.5435 6.8157 9.59972 8.51733 8.2771 9.87877C6.95448 11.2402 5.30144 12.2117 3.49011 12.692L6.10352e-05 13.6183L3.49011 14.5448C5.30163 15.0212 6.95541 15.9901 8.27838 17.3501C9.60135 18.7101 10.5448 20.4112 11.0101 22.2752L11.9101 25.8677L12.8001 22.2752C13.2654 20.4112 14.2088 18.7101 15.5318 17.3501C16.8548 15.9901 18.5085 15.0212 20.3201 14.5448L23.8101 13.6183L20.3201 12.692C18.5087 12.2117 16.8557 11.2402 15.5331 9.87877C14.2105 8.51733 13.2667 6.8157 12.8001 4.9512L11.9101 1.35876Z" fill={`${props.gradientColor ? "url(#paint0_linear_55_686)" : "white"}`} />
      <path d="M22.25 0L21.94 1.20433C21.7847 1.8308 21.4691 2.40293 21.0258 2.86101C20.5826 3.31908 20.028 3.64633 19.42 3.80862L18.2401 4.11742L19.42 4.42621C20.028 4.5885 20.5826 4.91575 21.0258 5.37383C21.4691 5.8319 21.7847 6.40404 21.94 7.03051L22.25 8.23483L22.55 7.03051C22.7071 6.40326 23.0246 5.83084 23.4696 5.37282C23.9146 4.9148 24.4707 4.58789 25.08 4.42621L26.25 4.11742L25.08 3.80862C24.4707 3.64695 23.9146 3.3201 23.4696 2.86207C23.0246 2.40405 22.7071 1.83157 22.55 1.20433L22.25 0Z" fill={`${props.gradientColor ? "url(#paint1_linear_55_686)" : "white"}`} />
      <defs>
        {
          props.gradientColor && 
            <>
              <linearGradient id="paint0_linear_55_686" x1="12.52" y1="25.9706" x2="23.8667" y2="13.9454" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1BD1C2" />
                <stop offset="1" stopColor="#1F67E7" />
              </linearGradient>
              <linearGradient id="paint1_linear_55_686" x1="22.52" y1="6.92756" x2="25.5908" y2="4.44157" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1BD1C2" />
                <stop offset="1" stopColor="#1F67E7" />
              </linearGradient>
            </>
        }
      </defs>
    </svg>
  )
}

export default StarIcon