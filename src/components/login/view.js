import styles from './style.module.scss';
const View = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h2>MyJobs</h2>
        </header>
        <main className={styles.main}>
          <div className={styles.container}>
            <h2>Login</h2>
            <div className={styles.input}>
              <p>Email address</p>
              <input
                type='email'
                placeholder='Enter your email'
                className={styles.inputField}
              />
            </div>
            <div className={styles.input}>
              <p>Password</p>
              <input
                type='password'
                placeholder='Enter your password'
                className={styles.inputField}
              />
            </div>
            <div className={styles.btnWrap}>
              <button className={styles.btn}>Login</button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default View;
