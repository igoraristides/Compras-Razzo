function pascalCaseSplit(str) {
  return (
    str
      // Look for long acronyms and filter out the last letter
      .replace(/([A-Z]+)([A-Z][a-z])/g, " $1 $2")
      // Look for lower-case letters followed by upper-case letters
      .replace(/([a-z\d])([A-Z])/g, "$1 $2")
      // Look for lower-case letters followed by numbers
      .replace(/([a-zA-Z])(\d)/g, "$1 $2")
      .replace(/^./, function (str) {
        return str.toLowerCase();
      })
      // Remove any white space left around the word
      .trim()
  );
}

export default function getColor(colorName, theme) {
  try {
    const colors = pascalCaseSplit(colorName).split(" ");
    let color = theme;
    if (colors.length === 1) return theme[colorName];

    for (const path in colors) {
      color = color[path];
      if (!color) return false;
    }

    return color;
  } catch (error) {
    return false;
  }
}
