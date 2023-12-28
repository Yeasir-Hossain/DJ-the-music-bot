import { SlashCommandBuilder } from 'discord.js';
import { IInteraction } from '../../interfaces/Interaction';

export const data = new SlashCommandBuilder().setName('shuffle').setDescription('Shuffles the queue');
export async function execute({ interaction }: IInteraction) {
  const queue = interaction.client.player.nodes.get(interaction.guildId);

  if (!queue) return await interaction.editReply('There are no songs in the queue');

  queue.tracks.shuffle();
  await interaction.editReply(`The queue of ${queue.tracks.size} songs have been shuffled!`);
}