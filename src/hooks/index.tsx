import { ThemeCustomProvider } from './Theme'
import { ScrollProvider } from './Scroll'

const AppProvider: React.FC = ({ children }) => (
  <ThemeCustomProvider>
    <ScrollProvider>{children}</ScrollProvider>
  </ThemeCustomProvider>
)

export default AppProvider
