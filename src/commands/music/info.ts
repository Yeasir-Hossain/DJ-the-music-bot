import { EmbedBuilder, SlashCommandBuilder } from 'discord.js';
import { IInteraction } from '../../interfaces/Interaction';

export const data = new SlashCommandBuilder().setName('info').setDescription('Display info about the current song');
export async function execute({ interaction }: IInteraction) {
  const queue = interaction.client.player.nodes.get(interaction.guildId);
  if (!queue) return await interaction.editReply('There are no songs in the queue');
  let bar = queue.node.createProgressBar({
    queue: false,
    length: 19,
  });
  const song = queue.currentTrack;

  await interaction.editReply({
    embeds: [new EmbedBuilder()
      .setThumbnail(song.thumbnail)
      .setDescription(`Currently Playing [${song.title}](${song.url})\n\n` + bar)
    ],
  });
}