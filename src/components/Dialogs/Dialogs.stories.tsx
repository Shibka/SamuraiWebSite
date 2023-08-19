import React from "react";
import type {Meta, StoryObj} from "@storybook/react";
import {Dialogs} from "./Dialogs";



const meta: Meta<typeof Dialogs> = {
    title: "Dialogs",
    component: Dialogs,
};

export default meta;

type DialogsType = StoryObj<typeof meta>;

export const NewMessage: DialogsType = {
    args: {
        messages: [],
        dialogs: [],
    },
};
