export interface AudioProps {
  title?: string;
  artist?: string;
  src?: any;
  artwork?: string;
  bg?: string;

  /**
   * The Postion of the player.
   * @default "bottom" | "top"
   */
  position?: "top" | "bottom";

  /**
   * Hides the player when the user is not interacting with it.
   * @default false
   */
  hidden?: boolean;
}
