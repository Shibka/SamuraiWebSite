import React from "react";
import type {Meta, StoryObj} from "@storybook/react";
import {Header} from "./Header";

const meta: Meta<typeof Header> = {
    title: "Header",
    component: Header,
};

export default meta;

type HeaderType = StoryObj<typeof meta>;

export const NewHeader: HeaderType = {
    args: {
    },
};
