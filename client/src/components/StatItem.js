import Wrapper from '../assets/wrappers/StatItem'

const StatItem = ({count, title, color, bcg, icon}) => {
  return (
    <Wrapper color={color} bcg={bcg}>
      <header>
        <span className='count'>{count}</span>
        <div className='icon'>{icon}</div>
      </header>
      <h5 className='title'>{title}</h5>
    </Wrapper>
  )
}
export default StatItem