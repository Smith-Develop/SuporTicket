import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-white dark:bg-black text-black dark:text-white">
      <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
      <p className="text-xl">{t('subtitle')}</p>
    </div>
  );
}
