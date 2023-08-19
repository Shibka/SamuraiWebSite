import React, {useState} from "react";
import type {Meta, StoryObj} from "@storybook/react";
import {Post} from "./Post";



const meta: Meta<typeof Post> = {
    title: "Post",
    component: Post,
};

export default meta;

type PostType = StoryObj<typeof meta>;

export const NewPost: PostType = {
    args: {
        message: 'New',
        likesCount: 2
    },
};

