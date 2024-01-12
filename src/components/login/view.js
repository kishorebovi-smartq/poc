import styles from './style.module.scss';
const View = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h2 className={styles.header}>MyJobs</h2>
        </header>
        <main className={styles.main}>
          <div className={styles.container}>
            <h3>Login</h3>
            <div>
              <p>Email address</p>
              <input
                type='email'
                placeholder='Enter your email'
                className={styles.input}
              />
            </div>
            <div>
              <p>Password</p>
              <input
                type='password'
                placeholder='Enter your password'
                className={styles.input}
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default View;
