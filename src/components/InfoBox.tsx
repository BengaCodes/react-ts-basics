import { type ReactNode } from 'react'

type HintBoxProps = {
  mode: 'hint'
  children: ReactNode
}

type WarningBoxProps = {
  mode: 'warning'
  severity: 'low' | 'medium' | 'high'
  children: ReactNode
}

type InfoBoxProps = HintBoxProps | WarningBoxProps

const InfoBox = (props: InfoBoxProps) => {
  const hint = () => (
    <aside className='infobox'>
      <p>{props.children}</p>
    </aside>
  )

  const warning = () => (
    <aside
      className={`infobox infobox-warning warning--${
        props?.mode === 'warning' && props?.severity
      }`}
    >
      <h2>Warning</h2>
      <p>{props?.children}</p>
    </aside>
  )

  return <>{props?.mode === 'hint' ? hint() : warning()}</>
}

export default InfoBox
