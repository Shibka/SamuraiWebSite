import React from "react";
import type {Meta, StoryObj} from "@storybook/react";
import {Profile} from "./Profile";



const meta: Meta<typeof Profile> = {
    title: "Profile",
    component: Profile,
};

export default meta;

type ProfileType = StoryObj<typeof meta>;

export const NewProfile: ProfileType = {
    args: {
       posts: []
    },
};
