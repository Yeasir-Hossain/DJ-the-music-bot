import { EmbedBuilder, SlashCommandBuilder } from 'discord.js';
import { IInteraction } from '../../interfaces/Interaction';
import { readdirSync } from 'fs';
import path, { join } from 'path';

export const data = new SlashCommandBuilder().setName('help').setDescription('Shows description about the commands')

export async function execute({ interaction }: IInteraction) {
  const foldersPath = join(path.resolve(), 'src', 'commands');
  const commandFolders = readdirSync(foldersPath);

  const embed = new EmbedBuilder().setColor('Blue').setTitle('All commands')
  // Iterate through command folders and files
  for (const folder of commandFolders) {
    const commandsPath = join(foldersPath, folder);
    const commandFiles = readdirSync(commandsPath).filter(file => file.endsWith('.js') || file.endsWith('.ts'));

    // Iterate through command files
    for (const file of commandFiles) {
      const filePath = join(commandsPath, file);
      const command = require(filePath);
      embed.addFields({ name: command.data.name, value: command.data.description })
      // str += `Name: ${command.data.name}, Description: ${command.data.description} \n`;
    }
  }
  await interaction.editReply({
    embeds: [embed]
  });
}