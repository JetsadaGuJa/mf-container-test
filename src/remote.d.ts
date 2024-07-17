interface IconResolverProps extends SvgIconProps {
  iconName: keyof typeof Icons;
}

declare module "mf1/Home" {
  function Home(): JSX.Element;
  export default Home;
}

declare module "mf1/Pokemon" {
  function Pokemon(): JSX.Element;
  export default Pokemon;
}

declare module "mf2/BasicSpeedDial" {
  function BasicSpeedDial(): JSX.Element;
  export default BasicSpeedDial;
}

declare module "mf2/GlobalUtil";

declare module "mf3/AppBar" {
  function AppBar(props: {
    iconElement: JSX.Element;
    logoElement: JSX.Element;
    onClickLogo: (e: number) => void;
  }): JSX.Element;
  export default AppBar;
}

declare module "mf3/Logo" {
  function Logo(): JSX.Element;
  export default Logo;
}

declare module "mf3/IconResolver" {
  function IconResolver(props: IconResolverProps): JSX.Element;
  export default IconResolver;
}
