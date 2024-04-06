import classes from "./loading.module.scss";
function Loading() {
  return (
    <div className={classes.container}>
      <div className={classes.first}></div>
      <div className={classes.second}></div>
      <div className={classes.third}></div>
      {/* <div className={classes.loader}></div> */}
    </div>
  );
}

export default Loading;
