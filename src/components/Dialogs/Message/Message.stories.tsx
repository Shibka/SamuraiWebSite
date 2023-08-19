import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {Message} from "./Message";


const meta: Meta<typeof Message> = {
    title: "Message",
    component: Message,
};

export default meta;

type MessageType = StoryObj<typeof meta>;

export const NewMessage: MessageType = {
    args: {
        message: 'Hi Hi',
    },
};
