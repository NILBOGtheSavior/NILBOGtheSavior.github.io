import '../css/Hero.css'

export default function Header() {
  return (
    <>
      <p>~ $ profilefetch</p>
      <div className="Hero">
        <div>
          <pre style={{ lineHeight: 1 }}>
            {String.raw`
  ███████╗ ██████╗ ███████╗████████╗██╗    ██╗ █████╗ ██████╗ ███████╗       ██╗   
  ██╔════╝██╔═══██╗██╔════╝╚══██╔══╝██║    ██║██╔══██╗██╔══██╗██╔════╝       ██║   
  ███████╗██║   ██║█████╗     ██║   ██║ █╗ ██║███████║██████╔╝█████╗      ████████╗
  ╚════██║██║   ██║██╔══╝     ██║   ██║███╗██║██╔══██║██╔══██╗██╔══╝      ██╔═██╔═╝
  ███████║╚██████╔╝██║        ██║   ╚███╔███╔╝██║  ██║██║  ██║███████╗    ██████║  
  ╚══════╝ ╚═════╝ ╚═╝        ╚═╝    ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝    ╚═════╝  
                                                                                   
  ███████╗██╗   ██╗███████╗████████╗███████╗███╗   ███╗███████╗                    
  ██╔════╝╚██╗ ██╔╝██╔════╝╚══██╔══╝██╔════╝████╗ ████║██╔════╝                    
  ███████╗ ╚████╔╝ ███████╗   ██║   █████╗  ██╔████╔██║███████╗                    
  ╚════██║  ╚██╔╝  ╚════██║   ██║   ██╔══╝  ██║╚██╔╝██║╚════██║                    
  ███████║   ██║   ███████║   ██║   ███████╗██║ ╚═╝ ██║███████║                    
  ╚══════╝   ╚═╝   ╚══════╝   ╚═╝   ╚══════╝╚═╝     ╚═╝╚══════╝                    
                                                                                   
  ██████╗ ███████╗██╗   ██╗███████╗██╗      ██████╗ ██████╗ ███████╗██████╗        
  ██╔══██╗██╔════╝██║   ██║██╔════╝██║     ██╔═══██╗██╔══██╗██╔════╝██╔══██╗       
  ██║  ██║█████╗  ██║   ██║█████╗  ██║     ██║   ██║██████╔╝█████╗  ██████╔╝       
  ██║  ██║██╔══╝  ╚██╗ ██╔╝██╔══╝  ██║     ██║   ██║██╔═══╝ ██╔══╝  ██╔══██╗       
  ██████╔╝███████╗ ╚████╔╝ ███████╗███████╗╚██████╔╝██║     ███████╗██║  ██║       
  ╚═════╝ ╚══════╝  ╚═══╝  ╚══════╝╚══════╝ ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═╝       
          `}
          </pre>
        </div>
        <div>
          <ul>
            <li><b>nilbog@nilbogthesavior.github.io</b></li>
            <li>--------------------------------</li>
            <li><b>Name</b>: Nasser-Abumariam v24.3.0</li>
            <li><b>OS</b>: Human (Stable)</li>
            <li><b>Date created</b>: 01.23.2001</li>
            <li><b>Location</b>: /usr/share/America/Chicago</li>
            <li><b>Memory</b>: 2450TiB / 16384PiB</li>
            <li>
              <div style={{ marginBlock: '1em' }}>
                <div className="colorBlocks">
                  <div style={{ backgroundColor: 'var(--ansi-black)' }} />
                  <div style={{ backgroundColor: 'var(--ansi-red)' }} />
                  <div style={{ backgroundColor: 'var(--ansi-green)' }} />
                  <div style={{ backgroundColor: 'var(--ansi-yellow)' }} />
                  <div style={{ backgroundColor: 'var(--ansi-blue)' }} />
                  <div style={{ backgroundColor: 'var(--ansi-magenta)' }} />
                  <div style={{ backgroundColor: 'var(--ansi-cyan)' }} />
                  <div style={{ backgroundColor: 'var(--ansi-white)' }} />
                </div>
                <div className="colorBlocks">
                  <div style={{ backgroundColor: 'var(--ansi-bright-black)' }} />
                  <div style={{ backgroundColor: 'var(--ansi-bright-red)' }} />
                  <div style={{ backgroundColor: 'var(--ansi-bright-green)' }} />
                  <div style={{ backgroundColor: 'var(--ansi-bright-yellow)' }} />
                  <div style={{ backgroundColor: 'var(--ansi-bright-blue)' }} />
                  <div style={{ backgroundColor: 'var(--ansi-bright-magenta)' }} />
                  <div style={{ backgroundColor: 'var(--ansi-bright-cyan)' }} />
                  <div style={{ backgroundColor: 'var(--ansi-bright-white)' }} />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
