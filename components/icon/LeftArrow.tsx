const LeftArrowIcon = ({ size = 14, isDisabled }: { size?: number; isDisabled: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={size}
    height={size}
    className={isDisabled ? "text-gray-50" : "text-brand-gray-light"}
    fill="currentColor"
  >
    <path d="M22.33,30c-.26,0-.52-.1-.72-.3l-12.65-13c-.38-.39-.38-1.01,0-1.4L21.61,2.3c.39-.4,1.02-.4,1.41-.02,.4,.39,.4,1.02,.02,1.41l-11.98,12.3,11.98,12.3c.38,.4,.38,1.03-.02,1.41-.19,.19-.45,.28-.7,.28Z"></path>
  </svg>
);

export default LeftArrowIcon;
