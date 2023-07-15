import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre Mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
      corporis voluptates libero. Vel libero deleniti esse saepe nemo, dolore
      repudiandae, rerum veniam iure quo perferendis quasi pariatur quibusdam
      corporis distinctio.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=Alessandro10Lima&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Alessandro10Lima&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
