import React from "react";
import type {Meta, StoryObj} from "@storybook/react";
import {MyPost} from "./MyPost"



const meta: Meta<typeof MyPost> = {
    title: "MyPost",
    component: MyPost,
};

export default meta;

type MyPostType = StoryObj<typeof meta>;

export const NewMyPost: MyPostType = {
    args: {
       posts: []
    },
};
