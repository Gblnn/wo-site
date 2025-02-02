"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface Props {
  fontsize?: string;
}

// const components: {
//   id: string;
//   title: string;
//   to: string;
//   description: string;
// }[] = [
//   {
//     id: "1",
//     title: "Civil",
//     to: "/civil-engineering",
//     description: "Construction of non-commercial buildings and structures",
//   },
//   {
//     id: "2",
//     title: "Mechanical",
//     to: "/mechanical-dept",
//     description:
//       " High-quality installation, maintenance, and repair of industrial systems,",
//   },
//   {
//     id: "3",
//     title: "Automobile",
//     to: "",
//     description: "Repair and maintainence of light and heavy vehicles",
//   },
//   {
//     id: "4",
//     title: "MEP",
//     to: "",
//     description: "Mechanical, Electrical and Plumbing works.",
//   },
//   {
//     id: "5",
//     title: "Electrical",
//     to: "",
//     description: "Electrical Works dealing with installation and maintainence.",
//   },
//   {
//     id: "6",
//     title: "Landscaping",
//     to: "",
//     description: "Transforming Barren lands to beautiful landscapes",
//   },
// ];

export function Nav(props: Props) {
  return (
    <NavigationMenu>
      <NavigationMenuList style={{ display: "flex", gap: "" }}>
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger
            style={{ fontSize: props.fontsize, background: "none" }}
          >
            What we do
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <Link key={component.id} to={component.to}>
                  <ListItem key={component.title} title={component.title}>
                    {component.description}
                  </ListItem>
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <NavigationMenuLink
            style={{ fontSize: props.fontsize, background: "none" }}
            className={navigationMenuTriggerStyle()}
          >
            <p className="hoverable">Projects</p>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            style={{ fontSize: props.fontsize, background: "none" }}
            className={navigationMenuTriggerStyle()}
          >
            <p className="hoverable">Careers</p>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            style={{ fontSize: props.fontsize, background: "none" }}
            className={navigationMenuTriggerStyle()}
          >
            <p className="hoverable">Contact Us</p>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
