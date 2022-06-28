const Navbar = () => {
  return (
    <nav style={styles.navStyle}>
      <h1>Todo App</h1>
      <ul>
        <li>Home</li>
        <li>Todo</li>
      </ul>
    </nav>
  );
};

const styles = {
  navStyle: {
    display: "flex",
    justifyContent: "space-around",
    border: "solid red 2px",
  },
};

export default Navbar;
