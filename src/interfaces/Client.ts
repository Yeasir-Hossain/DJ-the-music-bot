import { Player } from "discord-player";
import { Client, Collection } from "discord.js";
import { Command } from "./Command";

export interface ClientExtended<Ready extends boolean = boolean> extends Client {
  player?: Player;
  commands?: Collection<string, Command>;
}