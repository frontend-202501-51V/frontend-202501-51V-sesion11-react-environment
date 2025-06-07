
// estoy exportando un componente llamado Nav
export const HOME_DEFAULT_TEXT = 'Home v2'

export default function Nav({ homeText }) {
  return (
    <div>
      <ul>
        <li>{homeText}</li>
        <li>Contactanos</li>
      </ul>
    </div>
  )
}
