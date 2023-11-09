import styles from './styles/BgGlowDecorators.modules.scss'

function BgGlowDecoratorHeroBottomLeft() {
  return (
    <div className={`hero__bottom-left ${styles.hero}`}>BackgroundGlowDecorators</div>
  )
}

function BgGlowDecoratorHeroMobileTitle() {
    return (
      <div className={`hero__mobile-title ${styles.hero}`}>BackgroundGlowDecorators</div>
    )
  }

export {BgGlowDecoratorHeroBottomLeft, BgGlowDecoratorHeroMobileTitle}
