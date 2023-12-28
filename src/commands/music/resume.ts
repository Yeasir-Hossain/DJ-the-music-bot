import { SlashCommandBuilder } from 'discord.js';
import { IInteraction } from '../../interfaces/Interaction';

export const data = new SlashCommandBuilder().setName('resume').setDescription('Resumes the music');
export async function execute({ interaction }: IInteraction) {
  const queue = interaction.client.player.nodes.get(interaction.guildId);

  if (!queue) return await interaction.editReply('There are no songs in the queue');

  queue.node.resume();
  await interaction.editReply('Music has been resumed! Use `/pause` to resume the music');
}