// Composer
import { topNavItems } from "./topNav_items";
import { docsNavItems } from "./docsNav_items";

export const navItems = topNavItems.map((item) => {
    if (item.uid === "docs") {
        return { ...item, children: docsNavItems };
    }
    return item;
});
