import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SideContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SideContainer>
      <Avatar />
      <Titulo fontSize={20}>Alessandro</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        Alessandro10Lima
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Front-end
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SideContainer>
  </aside>
)

export default Sidebar
