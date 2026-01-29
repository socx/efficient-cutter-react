import { useState } from 'react'
import './App.css'

function App() {
  // Sheet dimensions
  const [sheetLength, setSheetLength] = useState('')
  const [sheetWidth, setSheetWidth] = useState('')
  
  // Box dimensions
  const [boxLength, setBoxLength] = useState('')
  const [boxWidth, setBoxWidth] = useState('')
  const [boxHeight, setBoxHeight] = useState('')
  
  // Result
  const [totalNets, setTotalNets] = useState(null)

  /**
   * Calculate the dimensions of a cross-shaped net
   * For a box with dimensions L (length), W (width), H (height):
   * 
   *         [W x H]
   *            |
   *   [L x H][L x W][L x H]
   *            |
   *         [W x H]
   * 
   * Total net dimensions:
   * - Width: L + W + L = 2L + W
   * - Height: H + W + H = 2H + W
   */
  const calculateNetDimensions = (L, W, H) => {
    return {
      width: 2 * L + W,
      height: 2 * H + W
    }
  }

  /**
   * Calculate how many cross-shaped nets can fit in the sheet
   * Try both orientations: normal and rotated 90 degrees
   */
  const calculateTotalNets = () => {
    const L = parseFloat(boxLength)
    const W = parseFloat(boxWidth)
    const H = parseFloat(boxHeight)
    const sheetL = parseFloat(sheetLength)
    const sheetW = parseFloat(sheetWidth)

    // Validate inputs
    if (isNaN(L) || isNaN(W) || isNaN(H) || isNaN(sheetL) || isNaN(sheetW)) {
      alert('Please enter valid numbers for all dimensions')
      return
    }

    if (L <= 0 || W <= 0 || H <= 0 || sheetL <= 0 || sheetW <= 0) {
      alert('All dimensions must be positive numbers')
      return
    }

    const net = calculateNetDimensions(L, W, H)

    // Try orientation 1: net placed normally
    const netsPerRow1 = Math.floor(sheetL / net.width)
    const netsPerCol1 = Math.floor(sheetW / net.height)
    const total1 = netsPerRow1 * netsPerCol1

    // Try orientation 2: net rotated 90 degrees
    const netsPerRow2 = Math.floor(sheetL / net.height)
    const netsPerCol2 = Math.floor(sheetW / net.width)
    const total2 = netsPerRow2 * netsPerCol2

    // Use the maximum
    const maxNets = Math.max(total1, total2)
    setTotalNets(maxNets)
  }

  return (
    <div className="app">
      <h1>📦 Efficient Box Net Cutter</h1>
      <p className="subtitle">Calculate how many cross-shaped box nets can be cut from a sheet</p>

      <div className="container">
        <div className="section">
          <h2>Sheet Dimensions</h2>
          <div className="input-group">
            <label>
              Length:
              <input
                type="number"
                value={sheetLength}
                onChange={(e) => setSheetLength(e.target.value)}
                placeholder="Enter sheet length"
                step="0.01"
              />
            </label>
            <label>
              Width:
              <input
                type="number"
                value={sheetWidth}
                onChange={(e) => setSheetWidth(e.target.value)}
                placeholder="Enter sheet width"
                step="0.01"
              />
            </label>
          </div>
        </div>

        <div className="section">
          <h2>Box Dimensions</h2>
          <div className="input-group">
            <label>
              Length (L):
              <input
                type="number"
                value={boxLength}
                onChange={(e) => setBoxLength(e.target.value)}
                placeholder="Enter box length"
                step="0.01"
              />
            </label>
            <label>
              Width (W):
              <input
                type="number"
                value={boxWidth}
                onChange={(e) => setBoxWidth(e.target.value)}
                placeholder="Enter box width"
                step="0.01"
              />
            </label>
            <label>
              Height (H):
              <input
                type="number"
                value={boxHeight}
                onChange={(e) => setBoxHeight(e.target.value)}
                placeholder="Enter box height"
                step="0.01"
              />
            </label>
          </div>
        </div>

        <button className="calculate-btn" onClick={calculateTotalNets}>
          Calculate
        </button>

        {totalNets !== null && (
          <div className="result">
            <h2>Result</h2>
            <div className="result-value">
              <span className="number">{totalNets}</span>
              <span className="label">cross-shaped nets can be cut from the sheet</span>
            </div>
            {totalNets === 0 && (
              <p className="warning">⚠️ The sheet is too small for even one net. Try a larger sheet or smaller box dimensions.</p>
            )}
          </div>
        )}

        <div className="info-section">
          <h3>Cross-Shaped Net Pattern</h3>
          <div className="net-diagram">
            <pre>{`
         [Top]
         W × H
            |
[Side]─[Base]─[Side]
L × H   L × W  L × H
            |
       [Bottom]
        W × H

Net dimensions:
• Width: 2L + W
• Height: 2H + W
            `}</pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
