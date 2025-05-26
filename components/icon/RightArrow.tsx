const RightArrowIcon = ({ size = 14, isDisabled }: { size?: number; isDisabled: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={size}
    height={size}
    className={isDisabled ? "text-gray-50" : "text-brand-gray-light"}
    fill="currentColor"
  >
    <path d="M10.51 29.1 9.1 27.688 20.783 16 9.1 4.313 10.51 2.9 23.611 16Z" />
  </svg>
);

export default RightArrowIcon;
