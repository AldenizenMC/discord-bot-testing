import { Collection } from "discord.js";

// SUMMARY: Extends the client to show "client.commands", "client.events", and some other as valid properties from Client
declare module "discord.js" {
    interface Client {
        commands: Collection<unknown, any>;
        subCommands: Collection<unknown, any>;
        events: Collection<unknown, any>;
        config: Object<unknown, any>;
        icon: Object<unknown, any>;
    }
}

export {};
