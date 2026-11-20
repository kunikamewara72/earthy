import Link from 'next/link';
import data from '../data/content.json';
export function Header({ active }) {
  return (<header><div className="wrap"><Link href="/" className="logo"><img src="/logo.png" alt="Grihum Earthy Studio logo" /><b>Grihum Earthy Studio</b></Link>
    <nav>{data.nav.map(([l, h, k]) => <Link key={k} href={h} className={k === active ? 'on' : ''}>{l}</Link>)}</nav></div></header>);
}
export function Footer() {
  const s = data.site;
  return (<footer><div className="wrap"><div className="grid"><div><img className="flogo" src="/logo.png" alt="Grihum Earthy Studio logo" /><h3>{s.name}</h3><p>{s.tag}. Warm, sustainable spaces rooted in earth and craft.</p></div>
    <div><h3>Pages</h3>{data.nav.map(([l, h]) => <Link key={h} href={h}>{l}</Link>)}</div>
    <div><h3>Contact</h3><a href={'mailto:' + s.email}>{s.email}</a><a href={'tel:' + s.phone}>{s.phone}</a><p>{s.address}</p></div></div>
    <small>© {new Date().getFullYear()} {s.name}. All rights reserved.</small></div></footer>);
}
export function Blocks({ blocks }) {
  return blocks.map((b, i) => {
    if (b.t === 'stats') return <section key={i} className="stats"><div className="wrap grid4">{b.items.map(([n, l]) => <div key={l}><b>{n}</b><span>{l}</span></div>)}</div></section>;
    if (b.t === 'split') return <section key={i} className="sec"><div className="wrap split"><h2>{b.h}</h2><div>{b.ps.map((p, j) => <p key={j}>{p}</p>)}</div></div></section>;
    if (b.t === 'cards') return <section key={i} className={'sec ' + (b.dark ? 'dark' : 'alt')}><div className="wrap"><h2>{b.h}</h2><div className="grid">{b.items.map(([t, d]) => <article className="card" key={t}><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>;
    if (b.t === 'projects') return <section key={i} className="sec"><div className="wrap grid">{b.items.map(([t, k, d]) => <article className="card" key={t}><div className="tile">{k}</div><h3>{t}</h3><p>{d}</p></article>)}</div></section>;
    if (b.t === 'cta') return <section key={i} className="cta"><div className="wrap"><h2>{b.h}</h2><p>{b.p}</p><Link className="btn" href={b.cta[1]}>{b.cta[0]}</Link></div></section>;
    if (b.t === 'form') return <section key={i} className="sec"><div className="wrap split"><h2>Tell us about your project</h2>
      <form action={'mailto:' + data.site.email} method="post" encType="text/plain"><input name="name" placeholder="Your name" required /><input name="email" type="email" placeholder="Email" required /><input name="phone" placeholder="Phone" />
        <select name="type"><option>Residential</option><option>Resort / Hospitality</option><option>Interiors</option><option>Commercial</option></select><textarea name="message" rows="5" placeholder="Project details, location and budget" /><button className="btn">Send Enquiry</button></form></div></section>;
    return null;
  });
}
export default function Page({ k }) {
  const p = data.pages[k];
  return (<><Header active={k} /><main><section className="hero"><div className="wrap"><span className="eyebrow">{p.eyebrow}</span><h1>{p.h}</h1><p>{p.p}</p><Link className="btn" href={p.cta[1]}>{p.cta[0]}</Link></div></section><Blocks blocks={p.blocks} /></main><Footer /></>);
}
