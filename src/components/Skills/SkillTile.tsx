import React from 'react'

interface SkillTileProps {
  type: string
  isPressed: boolean
  onPressStart: () => void
  onPressEnd: (e: React.MouseEvent | React.TouchEvent) => void
}

const SkillTile: React.FC<SkillTileProps> = ({
  type,
  isPressed,
  onPressStart,
  onPressEnd,
}) => (
  <div className="tile">
    <div className="shadow"></div>
    <div
      className={`item ${isPressed ? 'pressed' : ''}`}
      onMouseDown={onPressStart}
      onMouseUp={onPressEnd}
      onTouchStart={onPressStart}
      onTouchEnd={onPressEnd}
    >
      <img src={`/images/${type}.png`} alt={type} width={48} height="auto" />
    </div>
  </div>
)

export default SkillTile
