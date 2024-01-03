import { colors } from '@ignite-ui/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => (
    <div
      key={key}
      style={{
        backgroundColor: color,
        padding: '2rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'monospace',
          color: getContrast(color, 'white') > 3.5 ? 'white' : 'black',
        }}
      >
        <strong>${key}</strong>
        <span>{color}</span>
      </div>
    </div>
  ))
}
