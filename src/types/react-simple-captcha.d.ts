declare module "react-simple-captcha" {
  export function loadCaptchaEnginge(characters: number): void;
  export function validateCaptcha(userCaptcha: string): boolean;
  export function LoadCanvasTemplate(): JSX.Element;
  export function LoadCanvasTemplateNoReload(): JSX.Element;
  export function CreateCaptcha(): string;
}
