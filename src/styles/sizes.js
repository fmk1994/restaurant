export default {
  up(size) {
    const sizes = {
      xs: "0px",
      sm: "575.98px",
      md: "767.98px",
      lg: "991.98px",
      xl:"1199.98px",
  
    };
    return `@media (min-width: ${sizes[size]})`;
  },
    down(size) {
      const sizes = {
        xs: "0px",
        sm: "575.98px",
        md: "767.98px",
        lg: "991.98px",
        xl:"1199.98px",
    
      };
      return `@media (max-width: ${sizes[size]})`;
    }
  };