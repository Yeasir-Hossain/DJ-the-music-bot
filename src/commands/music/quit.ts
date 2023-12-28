import { SlashCommandBuilder } from 'discord.js';
import { IInteraction } from '../../interfaces/Interaction';

export const data = new SlashCommandBuilder().setName('quit').setDescription('Stops the bot and clears the queue');
export async function execute({ interaction }: IInteraction) {
  const queue = interaction.client.player.nodes.get(interaction.guildId);
  if (!queue) return await interaction.editReply('There are no songs in the queue');

  queue.delete();
  await interaction.editReply('Bye!');
}