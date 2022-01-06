import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1 className={styles.header}>Welcome to Amocvad</h1>
    </>
  );
}

const styles = {
  header: 'text-3xl font-bold underline text-red-500',
};
