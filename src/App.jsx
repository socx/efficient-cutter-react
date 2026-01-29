import { useState } from 'react'

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
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            📦 Efficient Box Net Cutter
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Calculate how many cross-shaped box nets can be cut from a sheet
          </p>
        </div>
      </header>

      {/* Main Content with Overlap */}
      <main className="-mt-8">
        <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
            {/* Input Forms Grid */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Sheet Dimensions Section */}
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Sheet Dimensions
                </h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="sheet-length" className="block text-sm font-medium text-gray-700 mb-1">
                      Length
                    </label>
                    <input
                      id="sheet-length"
                      type="number"
                      value={sheetLength}
                      onChange={(e) => setSheetLength(e.target.value)}
                      placeholder="Enter sheet length"
                      step="0.01"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 border"
                    />
                  </div>
                  <div>
                    <label htmlFor="sheet-width" className="block text-sm font-medium text-gray-700 mb-1">
                      Width
                    </label>
                    <input
                      id="sheet-width"
                      type="number"
                      value={sheetWidth}
                      onChange={(e) => setSheetWidth(e.target.value)}
                      placeholder="Enter sheet width"
                      step="0.01"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 border"
                    />
                  </div>
                </div>
              </div>

              {/* Box Dimensions Section */}
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Box Dimensions
                </h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="box-length" className="block text-sm font-medium text-gray-700 mb-1">
                      Length (L)
                    </label>
                    <input
                      id="box-length"
                      type="number"
                      value={boxLength}
                      onChange={(e) => setBoxLength(e.target.value)}
                      placeholder="Enter box length"
                      step="0.01"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 border"
                    />
                  </div>
                  <div>
                    <label htmlFor="box-width" className="block text-sm font-medium text-gray-700 mb-1">
                      Width (W)
                    </label>
                    <input
                      id="box-width"
                      type="number"
                      value={boxWidth}
                      onChange={(e) => setBoxWidth(e.target.value)}
                      placeholder="Enter box width"
                      step="0.01"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 border"
                    />
                  </div>
                  <div>
                    <label htmlFor="box-height" className="block text-sm font-medium text-gray-700 mb-1">
                      Height (H)
                    </label>
                    <input
                      id="box-height"
                      type="number"
                      value={boxHeight}
                      onChange={(e) => setBoxHeight(e.target.value)}
                      placeholder="Enter box height"
                      step="0.01"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2 border"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Calculate Button */}
            <div className="mt-6">
              <button
                onClick={calculateTotalNets}
                className="w-full rounded-md bg-indigo-600 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
              >
                Calculate
              </button>
            </div>

            {/* Result Display */}
            {totalNets !== null && (
              <div className="mt-6 rounded-lg border-2 border-indigo-200 bg-indigo-50 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                  Result
                </h2>
                <div className="text-center">
                  <p className="text-6xl font-bold text-indigo-600 mb-2">
                    {totalNets}
                  </p>
                  <p className="text-base text-gray-600">
                    cross-shaped nets can be cut from the sheet
                  </p>
                  {totalNets === 0 && (
                    <div className="mt-4 rounded-md bg-yellow-50 p-4 border border-yellow-200">
                      <p className="text-sm text-yellow-800">
                        ⚠️ The sheet is too small for even one net. Try a larger sheet or smaller box dimensions.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Info Section */}
            <div className="mt-6 rounded-lg border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-6">
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                Cross-Shaped Net Pattern
              </h3>
              <div className="rounded-md bg-gray-800 p-4 overflow-x-auto">
                <pre className="text-sm text-indigo-400 font-mono whitespace-pre">
{`         [Top]
         W × H
            |
[Side]─[Base]─[Side]
L × H   L × W  L × H
            |
       [Bottom]
        W × H

Net dimensions:
• Width: 2L + W
• Height: 2H + W`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
