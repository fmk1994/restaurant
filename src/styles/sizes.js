export default {
    up() {},
    down(size) {
      const sizes = {
        xs: "0px",
        sm: "600px",
        md: "900px",
        lg: "1200px",
        lgg:"1600px",
        xl: "3000px"
      };
      return `@media (max-width: ${sizes[size]})`;
    }
  };