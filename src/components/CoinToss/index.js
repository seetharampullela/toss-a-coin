// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    totalCount: 0,
    headsCount: 0,
    tailsCount: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  changeImage = () => {}

  onClickToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const {totalCount, headsCount, tailsCount} = this.state
    if (tossResult === 0) {
      this.setState({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        totalCount: totalCount + 1,
        headsCount: headsCount + 1,
      })
    } else {
      this.setState({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
        totalCount: totalCount + 1,
        tailsCount: tailsCount + 1,
      })
    }
  }

  render() {
    const {totalCount, headsCount, tailsCount, imageUrl} = this.state

    return (
      <div className="outer-container">
        <div className="inner-container">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="image-coin" />
          <button type="button" onClick={this.onClickToss}>
            Toss Coin
          </button>
          <div className="count-container">
            <p>Total:{totalCount}</p>
            <p>Heads:{headsCount}</p>
            <p>Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
