const rootPath = "/pages";
interface NavPathType {
  name: string;
  path: string;
}

const NavigationPath: NavPathType[] = [
  {
    name: "Home",
    path: `/`,
  },
  {
    name: "About",
    path: `/#about`,
  },
  {
    name: "Projects",
    path: `${rootPath}/projects`,
  },
  {
    name: "Testimonial",
    path: `${rootPath}/testimonial`,
  },
];
export { NavigationPath };
