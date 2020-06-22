import React from "react";

import { Default } from "../Components/Buttom/Default/Buttom";
import { Attention } from "../Components/Buttom/Attention";
import { storiesOf } from "@storybook/react";

storiesOf("Components", module).add("Default", () => <Default />);
storiesOf("Components", module).add("Attention", () => <Attention />);
