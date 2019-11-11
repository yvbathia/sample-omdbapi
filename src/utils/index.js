export const getPathArray = path => {
  let newPath = path || "";
  if (newPath.indexOf("?") !== -1) {
    newPath = newPath.substring(0, newPath.indexOf("?"));
  }

  if (newPath.indexOf("#") !== -1) {
    newPath = newPath.substring(0, newPath.indexOf("#"));
  }
  return newPath.split("/");
};
