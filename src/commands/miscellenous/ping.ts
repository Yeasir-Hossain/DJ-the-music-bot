import { SlashCommandBuilder } from 'discord.js';
import { IInteraction } from '../../interfaces/Interaction';

export const data = new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong!')

export async function execute({ interaction }: IInteraction) {
  await interaction.editReply('Pong!')
}