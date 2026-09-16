import Link from 'next/link'
import { allProjects } from 'contentlayer2/generated'

export default function Home() {
  const projects = allProjects.slice(0,3)
  return (
    <div style={{padding:'3rem',fontFamily:'system-ui'}}>
      <header>
        <h1 style={{fontSize:32}}>Hi — I'm Joy Adaeze Nzeakor</h1>
        <p style={{color:'#374151'}}>Designer & developer focused on clean digital experiences.</p>
      </header>

      <section style={{marginTop:40}}>
        <h2>About</h2>
        <p style={{maxWidth:680,color:'#4b5563'}}>I design and build professional websites and digital campaigns that help organisations present their services and engage audiences. Below are three highlighted projects.</p>
      </section>

      <section style={{marginTop:40}}>
        <h2>Featured Projects</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:20,marginTop:16}}>
          {projects.map((p) => (
            <article key={p._id} style={{border:'1px solid #e5e7eb',padding:16,borderRadius:8}}>
              <h3>{p.title}</h3>
              <p style={{color:'#374151'}}>{p.description}</p>
              <p style={{fontSize:12,color:'#6b7280'}}><strong>Tech:</strong> {p.tech}</p>
              {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer">Visit</a>}
            </article>
          ))}
        </div>
      </section>

      <section style={{marginTop:40}}>
        <h2>Contact</h2>
        <p style={{color:'#374151'}}>Want to work together? Reach out on <a href="https://github.com/nzeakorjoyadaeze-stack" target="_blank" rel="noopener noreferrer">GitHub</a> or reply here with contact details and I can add a contact form.</p>
      </section>

      <footer style={{marginTop:60,fontSize:12,color:'#9ca3af'}}>Built with Next.js + Contentlayer</footer>
    </div>
  )
}
