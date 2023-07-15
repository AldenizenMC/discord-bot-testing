import chalk from "chalk";
import { Client } from "discord.js";
import { load_commands } from "../../handlers/command_handler";

module.exports = {
    name: "ready",
    once: true,
    execute(client: Client) {
        console.log(
            chalk.green(
                `[CLIENT] Logged in as ${chalk.yellow(client.user?.tag)}`
            )
        );

        load_commands(client, true);
        if (process.argv[2] == "--exit-on-ready") procses.exit(0);
    },
};
