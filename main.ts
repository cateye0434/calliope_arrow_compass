basic.forever(function () {
    if (input.compassHeading() < 23) {
        basic.showIcon(IconNames.ArrowNorth)
    } else if (input.compassHeading() < 68) {
        basic.showIcon(IconNames.ArrowNorthWest)
    } else if (input.compassHeading() < 113) {
        basic.showIcon(IconNames.ArrowWest)
    } else if (input.compassHeading() < 158) {
        basic.showIcon(IconNames.ArrowSouthWest)
    } else if (input.compassHeading() < 203) {
        basic.showIcon(IconNames.ArrowSouth)
    } else if (input.compassHeading() < 248) {
        basic.showIcon(IconNames.ArrowSouthEast)
    } else if (input.compassHeading() < 293) {
        basic.showIcon(IconNames.ArrowEast)
    } else if (input.compassHeading() < 338) {
        basic.showIcon(IconNames.ArrowNorthEast)
    }
})
