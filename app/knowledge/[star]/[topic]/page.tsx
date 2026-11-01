import { notFound } from 'next/navigation';

export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ star: 'ziwei', topic: 'overview' }];
}

export default function KnowledgePage() {
  notFound();
}
