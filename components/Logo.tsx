interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

const LOGO_DARK = 'https://res.cloudinary.com/dkqocgknd/image/upload/f_auto,q_auto/lpet/logo-hotel-svg.svg';
const LOGO_LIGHT = 'https://res.cloudinary.com/dkqocgknd/image/upload/f_auto,q_auto/lpet/logo-hotel-light.svg';

export default function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const heights = {
    sm: 'h-8',
    md: 'h-10 sm:h-12',
    lg: 'h-12 sm:h-14 lg:h-16',
  };

  return (
    <img
      src={variant === 'light' ? LOGO_LIGHT : LOGO_DARK}
      alt="La Palma & El Tucán Hotel"
      className={`${heights[size]} w-auto object-contain`}
    />
  );
}
