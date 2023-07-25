export class Theme {
  constructor(
    public primaryColor: string,
    public secondaryColor: string,
    public backGround: string,
    public fontColor: string,
    public buttonHoverBackground: string
  ) {}
}

export const ligntTheme = new Theme(
  "#dd0000",
  " #ff5b5b ",
  "#ffffff",
  "#000000",
  "#ffeb7a"
);
