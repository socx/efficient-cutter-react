# 📦 Efficient Box Net Cutter

A React application that calculates how many cross-shaped box nets can be cut from a flat sheet of material.

## Overview

When creating boxes from flat sheets, you need to cut cross-shaped nets that fold into 3D boxes. This tool helps you calculate the maximum number of nets you can cut from a given sheet size.

## Cross-Shaped Net Pattern

For a box with dimensions L (length), W (width), and H (height), the cross-shaped net looks like:

```
         [Top]
         W × H
            |
[Side]─[Base]─[Side]
L × H   L × W  L × H
            |
       [Bottom]
        W × H
```

**Net Dimensions:**
- Width: 2L + W
- Height: 2H + W

## Features

- Input sheet dimensions (length and width)
- Input box dimensions (length, width, and height)
- Automatically calculates the optimal orientation
- Shows the total number of nets that can be cut
- Visual representation of the cross-shaped net pattern

## Installation

1. Clone the repository:
```bash
git clone https://github.com/socx/efficient-cutter-react.git
cd efficient-cutter-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the local URL shown (typically `http://localhost:5173`)

## Usage

1. Enter the **Sheet Dimensions**:
   - Length: The length of your flat sheet
   - Width: The width of your flat sheet

2. Enter the **Box Dimensions**:
   - Length (L): The length of the box you want to create
   - Width (W): The width of the box you want to create
   - Height (H): The height of the box you want to create

3. Click **Calculate** to see how many cross-shaped nets can be cut from your sheet

## Algorithm

The application:
1. Calculates the dimensions of the cross-shaped net based on box dimensions
2. Tests both normal and 90-degree rotated orientations
3. Returns the maximum number of nets that can fit

## Technologies Used

- React
- Vite
- CSS3

## License

MIT

## Author

Created with GitHub Copilot

