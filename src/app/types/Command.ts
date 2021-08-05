export enum Command {
  Clear = 'clear',
  Contact = 'contact',
  Exp = 'exp',
  Help = 'help',
  Skills = 'skills',
}

export type CommandDoc = {
  command: Command,
  description: string,
};