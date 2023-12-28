import { CacheType, ChatInputCommandInteraction, GuildMember } from "discord.js";
import { ClientExtended } from "./Client";

interface InteractionExtended extends ChatInputCommandInteraction {
  client: ClientExtended;
  member: GuildMember;
}

export interface IInteraction {
  interaction: InteractionExtended
}