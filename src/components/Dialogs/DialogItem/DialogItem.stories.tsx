import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {DialogItem} from "./DialogItem";


const meta: Meta<typeof DialogItem> = {
    title: "DialogItem",
    component: DialogItem,
};

export default meta;

type DialogItemType = StoryObj<typeof meta>;

export const Collapsed: DialogItemType = {
    args: {
        name: 'true',
        id: 2
    },
};

// export const UnCollapsed: Accordion = {
//     args: {
//         titleValue: "Hello",
//         collapsed: false,
//         onClick: () => {},
//     },
// };
// export const ChangingAccordion: Accordion = {
//     render: (args) => {
//         // eslint-disable-next-line
//         const [value, setValue] = useState(true);
//
//         return (
//             <Accordion
//                 {...args}
//                 titleValue={"New"}
//                 collapsed={value}
//                 onClick={() => setValue(!value)}
//             />
//         );
//     },
// };
