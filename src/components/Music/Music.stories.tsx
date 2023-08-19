import React from "react";
import type {Meta, StoryObj} from "@storybook/react";
import {Music} from "./Music";

const meta: Meta<typeof Music> = {
    title: "Music",
    component: Music,
};

export default meta;

type MusicType = StoryObj<typeof meta>;

export const NewMusic: MusicType = {
    args: {
    },
};
