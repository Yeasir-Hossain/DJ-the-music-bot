import { SlashCommandBuilder } from 'discord.js';
import { IInteraction } from '../../interfaces/Interaction';

export const data = new SlashCommandBuilder()
  .setName('skipto')
  .setDescription('Skips to a certain track #')
  .addNumberOption((option) =>
    option.setName('tracknumber').setDescription('The track to skip to').setMinValue(1).setRequired(true));
export async function execute({ interaction }: IInteraction) {
  const queue = interaction.client.player.nodes.get(interaction.guildId);

  if (!queue) return await interaction.editReply('There are no songs in the queue');

  const trackNum = interaction.options.getNumber('tracknumber');
  if (trackNum > queue.tracks.size)
    return await interaction.editReply('Invalid track number');
  queue.node.skipTo(trackNum - 1);

  await interaction.editReply(`Skipped ahead to track number ${trackNum}`);
}