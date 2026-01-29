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

  const calculateNetDimensions = (L, W, H) => {
    return {
      width: 2 * L + W,
      height: 2 * H + W
    }
  }

  const calculateTotalNets = () => {
    const L = parseFloat(boxLength)
    const W = parseFloat(boxWidth)
    const H = parseFloat(boxHeight)
    const sheetL = parseFloat(sheetLength)
    const sheetW = parseFloat(sheetWidth)

    if (isNaN(L) || isNaN(W) || isNaN(H) || isNaN(sheetL) || isNaN(sheetW)) {
      alert('Please enter valid numbers for all dimensions')
      return
    }

    if (L <= 0 || W <= 0 || H <= 0 || sheetL <= 0 || sheetW <= 0) {
      alert('All dimensions must be positive numbers')
      return
    }

    const net = calculateNetDimensions(L, W, H)

    const netsPerRow1 = Math.floor(sheetL / net.width)
    const netsPerCol1 = Math.floor(sheetW / net.height)
    const total1 = netsPerRow1 * netsPerCol1

    const netsPerRow2 = Math.floor(sheetL / net.height)
    const netsPerCol2 = Math.floor(sheetW / net.width)
    const total2 = netsPerRow2 * netsPerCol2

    const maxNets = Math.max(total1, total2)
    setTotalNets(maxNets)
  }

  return (
    <div className="bg-white">
      {/* Dark Navbar */}
      <nav className="bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl font-bold">📦</span>
              <span className="ml-3 text-xl font-semibold">Box Net Cutter</span>
            </div>
            <div className="hidden md:block text-sm text-gray-300">
              Calculate efficient cutting layouts
            </div>
          </div>
        </div>
      </nav>

      {/* Overlapping Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-12 sm:px-6 lg:px-8 pb-20">
        <div className="mx-auto max-w-7xl">
          {/* Hero Content */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Efficient Box Net Cutter
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Calculate how many cross-shaped box nets can be cut from a sheet of material
            </p>
          </div>

          {/* Form Card - Overlapping */}
          <div className="relative -mb-20">
            <div className="mx-auto max-w-4xl rounded-lg bg-white shadow-xl">
              <div className="grid grid-cols-1 gap-8 p-8 sm:p-10 lg:grid-cols-2">
                {/* Sheet Dimensions */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-6">
                    Sheet Dimensions
                  </h2>
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="sheet-length" className="block text-sm font-medium text-gray-700 mb-2">
                        Length
                      </label>
                      <input
                        id="sheet-length"
                        type="number"
                        value={sheetLength}
                        onChange={(e) => setSheetLength(e.target.value)}
                        placeholder="Enter length"
                        step="0.01"
                        className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0"
                      />
                    </div>
                    <div>
                      <label htmlFor="sheet-width" className="block text-sm font-medium text-gray-700 mb-2">
                        Width
                      </label>
                      <input
                        id="sheet-width"
                        type="number"
                        value={sheetWidth}
                        onChange={(e) => setSheetWidth(e.target.value)}
                        placeholder="Enter width"
                        step="0.01"
                        className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0"
                      />
                    </div>
                  </div>
                </div>

                {/* Box Dimensions */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-6">
                    Box Dimensions
                  </h2>
                  <div className="space-y-5">
                    <div>
                      <label htmlFor="box-length" className="block text-sm font-medium text-gray-700 mb-2">
                        Length (L)
                      </label>
                      <input
                        id="box-length"
                        type="number"
                        value={boxLength}
                        onChange={(e) => setBoxLength(e.target.value)}
                        placeholder="Enter length"
                        step="0.01"
                        className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0"
                      />
                    </div>
                    <div>
                      <label htmlFor="box-width" className="block text-sm font-medium text-gray-700 mb-2">
                        Width (W)
                      </label>
                      <input
                        id="box-width"
                        type="number"
                        value={boxWidth}
                        onChange={(e) => setBoxWidth(e.target.value)}
                        placeholder="Enter width"
                        step="0.01"
                        className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0"
                      />
                    </div>
                    <div>
                      <label htmlFor="box-height" className="block text-sm font-medium text-gray-700 mb-2">
                        Height (H)
                      </label>
                      <input
                        id="box-height"
                        type="number"
                        value={boxHeight}
                        onChange={(e) => setBoxHeight(e.target.value)}
                        placeholder="Enter height"
                        step="0.01"
                        className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="border-t border-gray-200 px-8 py-6 sm:px-10">
                <button
                  onClick={calculateTotalNets}
                  className="w-full rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
                >
                  Calculate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {totalNets !== null && (
            <div className="rounded-lg border border-gray-200 bg-white p-12 shadow-lg">
              <div className="text-center">
                <h2 className="text-base font-semibold text-indigo-600">RESULT</h2>
                <p className="mt-4 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  {totalNets}
                </p>
                <p className="mt-4 text-lg text-gray-600">
                  cross-shaped nets can be cut from your sheet
                </p>
                {totalNets === 0 && (
                  <div className="mt-6 rounded-lg bg-yellow-50 p-4 border border-yellow-200">
                    <p className="text-sm text-yellow-800">
                      ⚠️ The sheet is too small. Try a larger sheet or smaller box dimensions.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {totalNets === null && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Enter your dimensions and click Calculate to see results
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Cross-Shaped Net Pattern
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              This is the layout pattern for each box net
            </p>
          </div>
          <div className="rounded-lg bg-white p-8 shadow-sm border border-gray-200">
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
              <pre className="text-sm text-green-400 font-mono whitespace-pre">
{`         [Top]
         W × H
            |
[Side]─[Base]─[Side]
L × H   L × W  L × H
            |
       [Bottom]
        W × H

Net Dimensions:
• Width: 2L + W
• Height: 2H + W`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center text-sm">
          <p>📦 Efficient Box Net Cutter • Optimize your material usage</p>
        </div>
      </footer>
    </div>
  )
}

export default App
