import Page from '../../components/Page';
import data from '../../data/content.json';
const p = data.pages.projects;
export const metadata = { title: p.title, description: p.desc, alternates: { canonical: '/projects' }, openGraph: { title: p.title, description: p.desc } };
export default function Route() { return <Page k="projects" />; }
